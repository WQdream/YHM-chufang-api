const path = require('path');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const qiniu = require('qiniu');

// 七牛云配置
const qiniuConfig = {
  accessKey: 'qxAAiT-8jcHmq1IQ9QwPhwWvo4hWKvvMzvrOXJpR',
  secretKey: 'c2D36XatOjh_0RabGdXyqHQH5MnaoC7dhY4j2qFp',
  bucket: 'yhm-yl',
  zone: 'Zone_z0', // 华东区域
  domain: 'https://y.wqdream.vip' // 七牛云域名
};

// 初始化七牛云配置
const mac = new qiniu.auth.digest.Mac(qiniuConfig.accessKey, qiniuConfig.secretKey);
const config = new qiniu.conf.Config();
config.zone = qiniu.zone[qiniuConfig.zone]; // 使用配置中的区域
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

// 临时文件和正式文件的存储路径
const TEMP_UPLOAD_PATH = path.join(__dirname, '../public/temp');
const FORMAL_UPLOAD_PATH = path.join(__dirname, '../public/uploads');

// 获取当前日期文件夹名称 (格式: YYYYMMDD)
const getCurrentDateFolder = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};

// 确保目录存在
const ensureDir = async (dirPath) => {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
  }
};

// 初始化存储目录
(async () => {
  await ensureDir(TEMP_UPLOAD_PATH);
  await ensureDir(FORMAL_UPLOAD_PATH);
})();

// 清理临时文件
const cleanTempFiles = async () => {
  try {
    const files = await fs.readdir(TEMP_UPLOAD_PATH);
    const now = Date.now();
    
    for (const file of files) {
      const filePath = path.join(TEMP_UPLOAD_PATH, file);
      const stats = await fs.stat(filePath);
      
      // 如果文件超过24小时就删除
      if (now - stats.ctimeMs > 24 * 60 * 60 * 1000) {
        await fs.unlink(filePath);
        console.log(`已删除临时文件: ${file}`);
      }
    }
  } catch (error) {
    console.error('清理临时文件失败:', error);
  }
};

// 每隔12小时执行一次清理
setInterval(cleanTempFiles, 12 * 60 * 60 * 1000);

// 文件上传接口
exports.upload = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '没有上传文件'
      });
    }

    const file = req.files.file;
    const fileExt = path.extname(file.name);
    const fileName = `${uuidv4()}${fileExt}`;
    const filePath = path.join(TEMP_UPLOAD_PATH, fileName);

    // 保存到临时目录
    await file.mv(filePath);

    res.json({
      success: true,
      code: 200,
      message: '文件上传成功',
      data: {
        fileName,
        url: `/temp/${fileName}`, // 返回可访问的URL
        originalName: file.name
      }
    });
  } catch (error) {
    console.error('文件上传失败:', error);
    res.status(500).json({
      success: false,
      code: 500,
      message: '文件上传失败'
    });
  }
};

// 删除文件的辅助函数
const deleteFile = async (fileUrl) => {
  if (!fileUrl) return;
  
  try {
    // 如果是七牛云文件，则删除
    if (fileUrl.startsWith(qiniuConfig.domain)) {
      await deleteFromQiniu(fileUrl);
    }
  } catch (error) {
    console.error('删除文件失败:', error);
  }
};
// 删除七牛云文件
const deleteFromQiniu = async (fileUrl) => {
  if (!fileUrl || !fileUrl.startsWith(qiniuConfig.domain)) return;

  try {
    // 从URL中提取文件key
    const key = fileUrl.replace(`${qiniuConfig.domain}/`, '');
    const bucketManager = new qiniu.rs.BucketManager(mac, config);

    return new Promise((resolve, reject) => {
      bucketManager.delete(qiniuConfig.bucket, key, (err, respBody, respInfo) => {
        if (err) {
          console.error('七牛云删除文件错误:', err);
          reject(err);
        } else {
          if (respInfo.statusCode === 200) {
            console.log('七牛云文件删除成功:', key);
            resolve(true);
          } else {
            console.error('七牛云删除文件失败:', respInfo.statusCode, respBody);
            reject(new Error(`删除失败: ${respInfo.statusCode} ${JSON.stringify(respBody)}`));
          }
        }
      });
    });
  } catch (error) {
    console.error('删除七牛云文件失败:', error);
    throw error;
  }
};

// 导出删除文件函数供其他模块使用
exports.deleteFile = deleteFile;

// 上传文件到七牛云
const uploadToQiniu = async (localFile, key) => {
  try {
    // 检查文件是否存在
    await fs.access(localFile);
    const stats = await fs.stat(localFile);
    if (stats.size === 0) {
      throw new Error(`文件大小为0: ${localFile}`);
    }

    return new Promise((resolve, reject) => {
      const putPolicy = new qiniu.rs.PutPolicy({
        scope: qiniuConfig.bucket,
        expires: 7200 // 上传凭证有效期2小时
      });
      const uploadToken = putPolicy.uploadToken(mac);

      formUploader.putFile(uploadToken, `images/${key}`, localFile, putExtra, (err, body, info) => {
        if (err) {
          console.error('七牛云上传错误:', err);
          reject(err);
        } else if (info.statusCode === 200) {
          console.log('七牛云上传成功:', key);
          resolve(`${qiniuConfig.domain}/images/${key}`);
        } else {
          console.error('七牛云上传失败:', info.statusCode, body);
          reject(new Error(`上传失败: ${info.statusCode} ${JSON.stringify(body)}`));
        }
      });
    });
  } catch (error) {
    console.error(`文件验证失败: ${localFile}`, error);
    throw new Error(`文件验证失败: ${error.message}`);
  }
};
// 处理表单提交时的文件确认
exports.processFormFiles = async (fileNames, oldFileUrl = null) => {
  try {
    // 如果提供了旧文件URL，先删除旧文件
    if (oldFileUrl) {
      try {
        await deleteFromQiniu(oldFileUrl);
        console.log('成功删除七牛云旧文件:', oldFileUrl);
      } catch (error) {
        console.error('删除七牛云旧文件失败:', error);
      }
    }

    const processedFiles = [];
    
    for (const fileName of fileNames) {
      const tempPath = path.join(TEMP_UPLOAD_PATH, fileName);
      
      // 检查临时文件是否存在
      try {
        await fs.access(tempPath);
        const stats = await fs.stat(tempPath);
        if (stats.size === 0) {
          console.error(`临时文件大小为0: ${fileName}`);
          continue;
        }
      } catch (error) {
        console.error(`临时文件访问失败: ${fileName}`, error);
        continue;
      }
      
      // 上传到七牛云
      try {
        const url = await uploadToQiniu(tempPath, fileName);
        if (!url) {
          throw new Error('七牛云返回的URL为空');
        }
        processedFiles.push({
          fileName,
          url
        });
        
        // 上传成功后删除临时文件
        await fs.unlink(tempPath).catch(err => {
          console.error(`删除临时文件失败: ${fileName}`, err);
        });
      } catch (error) {
        console.error(`上传文件到七牛云失败: ${fileName}`, error);
        throw new Error(`上传文件失败: ${error.message}`);
      }
    }
    
    if (processedFiles.length === 0) {
      throw new Error('没有成功处理任何文件');
    }
    
    return processedFiles;
  } catch (error) {
    console.error('处理文件失败:', error);
    throw error;
  }
};

// 密码加密解密接口
exports.handlePassword = async (req, res) => {
  try {
    const { type, password } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: '密码不能为空'
      });
    }

    // 加密
    if (type === 1) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      res.json({
        success: true,
        code: 200,
        message: '密码加密成功',
        data: {
          password: hashedPassword
        }
      });
    } 
    // 解密（验证）
    else if (type === 2) {
      const { originalPassword } = req.body;
      
      if (!originalPassword) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: '请提供明文密码'
        });
      }

      const isMatch = await bcrypt.compare(originalPassword, password);
      
      res.json({
        success: true,
        code: 200,
        message: '密码验证完成',
        data: {
          isMatch  // true表示密码匹配，false表示不匹配
        }
      });
    } else {
      res.status(400).json({
        success: false,
        code: 400,
        message: '无效的操作类型'
      });
    }
  } catch (error) {
    console.error('密码处理错误:', error);
    res.status(500).json({
      success: false,
      code: 500,
      message: error.message
    });
  }
};