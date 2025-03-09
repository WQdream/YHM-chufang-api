/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.5.27 : Database - yhm
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`yhm` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `yhm`;

/*Table structure for table `chinese_medicines` */

DROP TABLE IF EXISTS `chinese_medicines`;

CREATE TABLE `chinese_medicines` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL COMMENT '中药材名称',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `chinese_medicines` */

insert  into `chinese_medicines`(`id`,`name`,`createdAt`,`updatedAt`) values ('-5y91eNoHT1tdgdU5-Ep2','川木通','2025-03-01 10:39:13','2025-03-01 10:39:13'),('-9AmZMlIxG2Z9DOHISobP','茯苓','2025-03-01 10:39:13','2025-03-01 10:39:13'),('-MXc7cpmM9XzEv-ptkmuQ','枸杞子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('-R3UN_HMGPl2cU9odF-1n','紫苏梗','2025-03-01 10:39:13','2025-03-01 10:39:13'),('-WkilWecTNMnFCDxm9unh','黄芪','2025-03-01 10:39:13','2025-03-01 10:39:13'),('-Y1B4h4OAuivDUrPM1WSo','烫骨碎补','2025-03-01 10:39:13','2025-03-01 10:39:13'),('0A4t51Gmrzi8D6Aiwd4dm','炒葶苈子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('0d4cYhmODMKQGzyqI0KI9','燀桃仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('0e6hBWSg1rH9INygGGn_d','白参须','2025-03-01 10:39:13','2025-03-01 10:39:13'),('0m5iPa7sqgD7PjTo0JJW0','炒谷芽','2025-03-01 10:39:13','2025-03-01 10:39:13'),('0T8beQTvh4IFpwyLmg9iU','生石膏','2025-03-01 10:39:13','2025-03-01 10:39:13'),('0vDTgwFN-KGGtVOPEP3U2','醋三棱','2025-03-01 10:39:13','2025-03-01 10:39:13'),('1CH-s-_IIBe88_9DEYq-8','金钱草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('1D7q7CY0_bHtLI8ROGgXS','柏子仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('1hzQ7X0l89OIA_Zu4jTAi','石菖蒲','2025-03-01 10:39:13','2025-03-01 10:39:13'),('1iFhBkB_7syNEEvgC-SI1','九节菖蒲','2025-03-01 10:39:13','2025-03-01 10:39:13'),('1Ne5zSiVmoD6WHTsRFC4A','炒酸枣仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('1NWYtaJe9ivLxTt3jTXTR','醋乳香','2025-03-01 10:39:13','2025-03-01 10:39:13'),('24QeGxKnLwf3UUS8DYk1f','制胆星','2025-03-01 10:39:13','2025-03-01 10:39:13'),('2BjnAXN76iWH04y43RLEW','赤芍','2025-03-01 10:39:13','2025-03-01 10:39:13'),('2Imd23u4XZQP59n8AfPCD','天麻','2025-03-01 10:39:13','2025-03-01 10:39:13'),('2jlArTHgSajHBDR4WEtC9','滑石','2025-03-01 10:39:13','2025-03-01 10:39:13'),('2qAhLw4FcPc12vGaBnmxf','焦山楂','2025-03-01 10:39:13','2025-03-01 10:39:13'),('30a2RwnGXXHztW-lDkdGY','桑白皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('3lg1NlsDnD7AWK8virZOm','苍耳子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('3Uh0TaqivYxbsvCLn18wD','麸炒山药','2025-03-01 10:39:13','2025-03-01 10:39:13'),('3vtl-LmYMao_H6mwAEJ-j','鸡血藤','2025-03-01 10:39:13','2025-03-01 10:39:13'),('3zJ8DoNoP5Cg3m20uKGH7','砂仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('45TD3Odf-Qb053t7P6lJ2','前胡','2025-03-01 10:39:13','2025-03-01 10:39:13'),('46JfAcCODynNWSlbCgsvB','焦麦芽','2025-03-01 10:39:13','2025-03-01 10:39:13'),('4QH3IzNjuZvCy7JeToMX8','炮姜','2025-03-01 10:39:13','2025-03-01 10:39:13'),('5-xasXXvldJP5lkPFtHmo','骨碎补','2025-03-01 10:39:13','2025-03-01 10:39:13'),('5hiWFFl5noEIq-HW9EeuN','槐花','2025-03-01 10:39:13','2025-03-01 10:39:13'),('5MGvFh-zAnghKcn9nuhys','猪苓','2025-03-01 10:39:13','2025-03-01 10:39:13'),('5o8CEi0MYdTy2LsXtnHcj','大枣','2025-03-01 10:39:13','2025-03-01 10:39:13'),('65UhkdeHHBIn4BTTjJxE1','白薇','2025-03-01 10:39:13','2025-03-01 10:39:13'),('6DjPXyak_naLXaBgoxJfM','青蒿','2025-03-01 10:39:13','2025-03-01 10:39:13'),('7bItYZF6DT49XuagBofDV','麸炒枳实','2025-03-01 10:39:13','2025-03-01 10:39:13'),('7j5t1K8KrLKza69yxOA-O','佛手','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8b45qFk_gCY4sTQn2FzG5','燀苦杏仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8CX4kYEKRknzq5O9Ro5gi','重楼','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8fItiy9QvLjRhT33dJqBX','盐车前子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8I_J3HLRfyKqz01Mnarbe','豆蔻','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8kLGnOyffQ-ZoQXnpySQW','炒麦芽','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8Mot_KJlACfYGgMZtHZR2','侧柏叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8PjvChJPlSmZ3nsl3ApQA','芒硝','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8qSf_X5pf0CCAPs_fLx1i','乌药','2025-03-01 10:39:13','2025-03-01 10:39:13'),('8ri1JXReGnIfqTnNqxhbA','薄荷','2025-03-01 10:39:13','2025-03-01 10:39:13'),('9qiShXhu3knW4Tijg_sGN','盐巴戟天','2025-03-01 10:39:13','2025-03-01 10:39:13'),('9UlG43NsXn73rCFXBy0O1','青礞石','2025-03-01 10:39:13','2025-03-01 10:39:13'),('A5kxWfnLC7edUXp8aKxjx','槟榔','2025-03-01 10:39:13','2025-03-01 10:39:13'),('aI5DwjRxcl41mjQhcbC00','决明子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('amNvBrictf7kuwxS5NJnV','太子参','2025-03-01 10:39:13','2025-03-01 10:39:13'),('An18z0rGqCNNZoXj7SDr8','姜竹茹','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ATF8w38UvLGkCw7WHCpTY','锁阳','2025-03-01 10:39:13','2025-03-01 10:39:13'),('AXm1Pmk2wHNtoBUt_a110','煅赭石','2025-03-01 10:39:13','2025-03-01 10:39:13'),('B064KA4gowB3rCUZrc9YE','北柴胡','2025-03-01 10:39:13','2025-03-01 10:39:13'),('BgpmEFRO2hssuVB3gqmg_','红参','2025-03-01 10:39:13','2025-03-01 10:39:13'),('bKUxLsk5XGmBFZGKg36zB','川牛膝','2025-03-01 10:39:13','2025-03-01 10:39:13'),('BVWNESMq-P0612-zB430U','栀子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('BWSadDREtgmqPT_V1PcRx','知母','2025-03-01 10:39:13','2025-03-01 10:39:13'),('C4bav367REEs1xeIxN5GM','酒女贞子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('cEUBWvmxs-sw6rjoFDj9b','莲子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('cIQuVCz0cbvBV_PH65JPW','新疆紫草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('cL_2RcTrKMOQN8tHRq6C6','桑椹','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Cmq43TNOE8LqtBLJY_41K','炒莱菔子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('CpnVSYpJRmif5_FCo1CHM','天花粉','2025-03-01 10:39:13','2025-03-01 10:39:13'),('CQLi1pIKpPDCl7sA3idiI','白术','2025-03-01 10:39:13','2025-03-01 10:39:13'),('CqUQv5P_vnh9VLvDQdn-a','白鲜皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('d4aZTm9bj8MyNJfJrO6FV','怀牛膝','2025-03-01 10:39:13','2025-03-01 10:39:13'),('dcUCrRkGu6WwtRCpWo9H5','广藿香','2025-03-01 10:39:13','2025-03-01 10:39:13'),('DDtMnd8nqJxc6dlQ0Ufxv','首乌藤','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Ddx1aF-f2Q-bxR8LH7bhn','薤白','2025-03-01 10:39:13','2025-03-01 10:39:13'),('dOON8kaDMglZxsrV6aaJ5','大青叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('DvNNG-MbxGEejyr6VXQ9Q','芡实','2025-03-01 10:39:13','2025-03-01 10:39:13'),('e78_mlWDpcqXtrw2B8w7P','莱菔子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('EA1OeISDNrn-yHwFaAIY3','金荞麦','2025-03-01 10:39:13','2025-03-01 10:39:13'),('egbAZ_IEFse-49x17BW8Q','炒紫苏子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('eiijQLijv3OsdMfTeh9Td','细辛','2025-03-01 10:39:13','2025-03-01 10:39:13'),('eldBtxRFaGyHOIUQdnxNf','法半夏','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ElnWHvu1895woLzXtiGak','伸筋草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('enkjTdrGLeS0ZBzEBU1dG','姜厚朴','2025-03-01 10:39:13','2025-03-01 10:39:13'),('EWwpuVfq7rlSY_QZksH0H','醋莪术','2025-03-01 10:39:13','2025-03-01 10:39:13'),('EXvt7Jqm9ewtnuNmb2-t3','夏枯草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('F0bY67-7cfXeepkiMzwSO','淫羊藿','2025-03-01 10:39:13','2025-03-01 10:39:13'),('f3gpuBQA4dzF4c8mP_gvm','紫石英','2025-03-01 10:39:13','2025-03-01 10:39:13'),('fbUNRzbqZYgb3MImiz7Mk','大黄','2025-03-01 10:39:13','2025-03-01 10:39:13'),('FCmE4SSH90mCfNGYxwbCt','磁石','2025-03-01 10:39:13','2025-03-01 10:39:13'),('FCs-he3Pk04dO3OlG1xtO','延胡索','2025-03-01 10:39:13','2025-03-01 10:39:13'),('FCUR3FJdd-UwpEN5mYlpb','玄参','2025-03-01 10:39:13','2025-03-01 10:39:13'),('FdC4lhAOFjvjD8tEaN4fM','瞿麦','2025-03-01 10:39:13','2025-03-01 10:39:13'),('fe597lye688tRiuyeIvdl','猫爪草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('FfjRycCwapDGin7UfzhZg','胖大海','2025-03-01 10:39:13','2025-03-01 10:39:13'),('FIKFLUwnG7hrRYh3XmUpP','生麦芽','2025-03-01 10:39:13','2025-03-01 10:39:13'),('fJHCcF7XzJwnE_VtMDFJt','桂枝','2025-03-01 10:39:13','2025-03-01 10:39:13'),('fllMtSwbgrhHjHiL8ehIl','地榆','2025-03-01 10:39:13','2025-03-01 10:39:13'),('fLohfN6L5_EkwoigJzh2i','天冬','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ftYy8saZjVPrTy-FoxTx6','山药','2025-03-01 10:39:13','2025-03-01 10:39:13'),('fU8rGFgIqel6Gc3TGa9w0','黄连','2025-03-01 10:39:13','2025-03-01 10:39:13'),('g7RRc9KaPq4-80wFUYVEJ','路路通','2025-03-01 10:39:13','2025-03-01 10:39:13'),('G8vnJN_8qKfIzno8K0eea','熟地黄','2025-03-01 10:39:13','2025-03-01 10:39:13'),('g95ZWzAfd26KOObQxk2MP','煅牡蛎','2025-03-01 10:39:13','2025-03-01 10:39:13'),('gBDPfp9eerOGfKD6l4lEL','辛夷','2025-03-01 10:39:13','2025-03-01 10:39:13'),('GgOFI30GRnyu30Ect-DCy','鳖甲','2025-03-01 10:39:13','2025-03-01 10:39:13'),('gZJ4mUqp2Hc69sBIMg2sv','连翘','2025-03-01 10:39:13','2025-03-01 10:39:13'),('h-pN5EZ87Td8iFV7PcE9y','中医次卡','2025-03-01 10:39:13','2025-03-01 10:39:13'),('hadE_0yEbZOUOLC3ZHF-t','桑叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('hCYhUMB-tbHjsgpd8hyO9','净山楂','2025-03-01 10:39:13','2025-03-01 10:39:13'),('HJjlWuNJlIWsoXZDsBaaD','玫瑰花','2025-03-01 10:39:13','2025-03-01 10:39:13'),('hjWm2UcVxxyOmyTQ-IkOT','核桃仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('HkJNeOEC5x8cL_HECZ2H_','白芍','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Hllr0C0QY8xxMQqpVnGNE','蒲公英','2025-03-01 10:39:13','2025-03-01 10:39:13'),('hYe24k_LWmTFS4c9nHVFI','泽兰','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Hyy1QxOjfhIFZOGHezKoP','石决明','2025-03-01 10:39:13','2025-03-01 10:39:13'),('i-Xwx4vEun12m-m5C2wHP','龙眼肉','2025-03-01 10:39:13','2025-03-01 10:39:13'),('i4dMkH-9Iwyk4Mp-sINYA','盐菟丝子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('i5iRfNzPqlpFnqaeBL7N1','败酱草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('iBdTLgIvqkyY9PIn5qEe3','赤小豆','2025-03-01 10:39:13','2025-03-01 10:39:13'),('iDxlkqwQf4Vw_c0VnjFaz','五味子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ihhn37LE2VOIlGwrsBIIS','炒芥子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ImoTyLJAYg5HYlWjWAA6S','仙鹤草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('iNzjwYfhgDWRPtUJq5QZP','姜半夏','2025-03-01 10:39:13','2025-03-01 10:39:13'),('irEYeok6CYQKWxxWtenVl','威灵仙','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Ius-uvvNoV8zNISJUjsxl','肉豆蔻','2025-03-01 10:39:13','2025-03-01 10:39:13'),('IzZPqeGnCrBINKx0jcwlN','忍冬藤','2025-03-01 10:39:13','2025-03-01 10:39:13'),('I_H54r63IW95v0GLKdEQu','焦六神曲','2025-03-01 10:39:13','2025-03-01 10:39:13'),('J2eoo5h-SeXkCyE5LXXsb','炒僵蚕','2025-03-01 10:39:13','2025-03-01 10:39:13'),('J3FgXgR8iX_0gTkNfPVMf','百部','2025-03-01 10:39:13','2025-03-01 10:39:13'),('j5W0szfI1hF-VIa4pElBv','牛蒡子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('j7d1mj3BIw5QxXSLXlVvb','当归','2025-03-01 10:39:13','2025-03-01 10:39:13'),('jDkeaDCsuaHVgZoN3En-E','淡竹叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('jiFtNPIekk8HaSOgc-PwU','大腹皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('JUzxRPSQ3rTTRD6AvI3P-','茵陈','2025-03-01 10:39:13','2025-03-01 10:39:13'),('K0sM7z0x3yISr4MEiEWwJ','葶苈子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ka-XePJ41qRt5f-eTrOcg','远志','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Keg24LFAX5-x7hRsGOW06','浮小麦','2025-03-01 10:39:13','2025-03-01 10:39:13'),('kG1TxeHD9mV-0GERKFNAo','野菊花','2025-03-01 10:39:13','2025-03-01 10:39:13'),('KI4Rg1ndi5Q596djv8CEZ','盐荔枝核','2025-03-01 10:39:13','2025-03-01 10:39:13'),('kNNB_JlMY3vPDObV6AwdU','麸炒枳壳','2025-03-01 10:39:13','2025-03-01 10:39:13'),('kv_1goASohzRm3mKhFhbe','桔梗','2025-03-01 10:39:13','2025-03-01 10:39:13'),('L7qzHL26q3W9-RfutplXz','黄精','2025-03-01 10:39:13','2025-03-01 10:39:13'),('LLcTCPbAwVOY6WjUXFAZx','鹿衔草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('LmjJ1MlwtFbTdco9WKoTJ','丹参','2025-03-01 10:39:13','2025-03-01 10:39:13'),('lMKD7pvlJRW_HERHGNzA2','胆南星','2025-03-01 10:39:13','2025-03-01 10:39:13'),('lmLu-ZxViVYsbs7xfWja2','红景天','2025-03-01 10:39:13','2025-03-01 10:39:13'),('lNIwaPpEHgX0LWFfbDcjq','石韦','2025-03-01 10:39:13','2025-03-01 10:39:13'),('lopM9T4GiesLFULFMfK3i','降香','2025-03-01 10:39:13','2025-03-01 10:39:13'),('LPFvm_CeJ2s_fiKuZnP5u','墨旱莲','2025-03-01 10:39:13','2025-03-01 10:39:13'),('lSI1hgLwdRDoMIUKpFJKj','草果','2025-03-01 10:39:13','2025-03-01 10:39:13'),('lXayjWNGWLkSBMkRxZKyV','白花蛇舌草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('lz4ekfymGAVSAUx4WPKpm','金银花','2025-03-01 10:39:13','2025-03-01 10:39:13'),('m1XC90U4TihDiYTOd8DQn','防风','2025-03-01 10:39:13','2025-03-01 10:39:13'),('mfox-wtERGrSZHhNmvh7f','木贼','2025-03-01 10:39:13','2025-03-01 10:39:13'),('MIY8Ylw3Z3LUbUThQLK6q','龙齿','2025-03-01 10:39:13','2025-03-01 10:39:13'),('mP0XzWOvZ6EkynR24tNLD','秦艽','2025-03-01 10:39:13','2025-03-01 10:39:13'),('n4Wv6f7OEhQRIJYyLO4tQ','郁金','2025-03-01 10:39:13','2025-03-01 10:39:13'),('n8AsmMTwHuKNCY44KSYUL','醋青皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('nB4iiCrPfWVN0_yKkpWTL','苏木','2025-03-01 10:39:13','2025-03-01 10:39:13'),('NeXdhYeeKgg-KuBeuvfhW','芦根','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Ngeim5bZ8L-ZhNjrd4efH','薏苡仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('nGix43i3EOeyytCB1JNzg','醋龟甲','2025-03-01 10:39:13','2025-03-01 10:39:13'),('NGYh-UNSEtJmCdZmSIdaS','麻黄','2025-03-01 10:39:13','2025-03-01 10:39:13'),('NjfK-aQBdfE287_EZ7zmr','红花','2025-03-01 10:39:13','2025-03-01 10:39:13'),('nnT-4uim1aPpqrfWh2pT_','百合','2025-03-01 10:39:13','2025-03-01 10:39:13'),('nO2ZMtLrIosBMOIeq3BdQ','草果','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Noh2FwhrOjmHB74ER37LS','茜草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('O4bfoJJekOAJ9JEyYo4a0','蛇床子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('O81MmarB_fSjr2FKW9mg4','麸炒白术','2025-03-01 10:39:13','2025-03-01 10:39:13'),('O8aeSJd6GlPLYtHP3hMt2','制吴茱萸','2025-03-01 10:39:13','2025-03-01 10:39:13'),('OjkVpt7orfjCKc6zDq4Me','鸡内金','2025-03-01 10:39:13','2025-03-01 10:39:13'),('oKV35NtClrp3yhX9YFoqp','干姜','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Op8f_1uuXRteEQ7fGSViB','杜仲','2025-03-01 10:39:13','2025-03-01 10:39:13'),('oPBMfi4Bzf9LMjAuIouA8','肉苁蓉片','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ov0UNH8rklPArJ8HIgtSl','党参','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Ox7acoI0nQ3F7vW4Edlgd','山萸肉','2025-03-01 10:39:13','2025-03-01 10:39:13'),('OXxdteXDKnAeRtLe5BNyt','瓜蒌','2025-03-01 10:39:13','2025-03-01 10:39:13'),('OY_gNFXGnmyWAPGbA94vt','蜜款冬花','2025-03-01 10:39:13','2025-03-01 10:39:13'),('P0PmuiYQ5dfo-rfrDYqCD','续断','2025-03-01 10:39:13','2025-03-01 10:39:13'),('P5cFBDDVSGJeE9_nj7VMp','麸炒苍术','2025-03-01 10:39:13','2025-03-01 10:39:13'),('pBa41WbR6ZHSY5X06oaS1','地龙','2025-03-01 10:39:13','2025-03-01 10:39:13'),('PfagPfxCx6bxw7xUDNEey','土茯苓','2025-03-01 10:39:13','2025-03-01 10:39:13'),('PhMG7g_v8mevmx4eO2t0M','肉桂','2025-03-01 10:39:13','2025-03-01 10:39:13'),('pmd3dSp_I5fEBIpVECAnv','木瓜','2025-03-01 10:39:13','2025-03-01 10:39:13'),('PnK2c8fdI2F6DN6_J0cMz','煅龙骨','2025-03-01 10:39:13','2025-03-01 10:39:13'),('PrirGWrKozNbGrDWhHyC-','黄芩','2025-03-01 10:39:13','2025-03-01 10:39:13'),('PUepmvMbRWr5AEvibuZM1','炒蔓荆子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('pU_vrzG9K_3lAjgpfVtET','荆芥','2025-03-01 10:39:13','2025-03-01 10:39:13'),('PVt_N9h7BP7jprDDG7WcO','牡丹皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('PvY2mui1fONWtJ2bDtuar','益母草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('pXvNI6vtbDtAnbI9uWf1z','檀香','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Q4rhiMKEEvkyHt_qWRZL9','白芷','2025-03-01 10:39:13','2025-03-01 10:39:13'),('q6swqJsrTnGNNcdxkO-8x','赤石脂','2025-03-01 10:39:13','2025-03-01 10:39:13'),('QcvcJ9Nt8YqR6h6zFibtL','蝉蜕','2025-03-01 10:39:13','2025-03-01 10:39:13'),('qDG6O4INVkGRlj2Dfqcv4','炙甘草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('qDqD0rqzz1pAqjPL3INQ8','姜黄','2025-03-01 10:39:13','2025-03-01 10:39:13'),('qg0o2qsRQXuqymU80qfYO','紫苏叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Qp9S1QWQDz_I1iF2VLLj0','荷叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('QU4S0XnX15jWS4g2Zy_nP','醋没药','2025-03-01 10:39:13','2025-03-01 10:39:13'),('quCUIgWdYb-2iNxJF-fmK','木香','2025-03-01 10:39:13','2025-03-01 10:39:13'),('QwirApoeq-EAQXUj8k5pa','海螵蛸','2025-03-01 10:39:13','2025-03-01 10:39:13'),('r0cNJ0FxKjgZDmUP1mwTg','黄柏','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Rcqcq-bX2TQG0P2cpnWwl','侧柏叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('rIGgRxJ352FTXTA2RPUk4','白茅根','2025-03-01 10:39:13','2025-03-01 10:39:13'),('rixflxzSijvCWLMhqQXBh','干鱼腥草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('RKkKJiMu4QLjOTVCdV9lL','盐益智仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('rU-OC9Vm4cFUCE4zrc0I1','炒蒺藜','2025-03-01 10:39:13','2025-03-01 10:39:13'),('SCS6A_0B0bz6lcJanMant','红参须','2025-03-01 10:39:13','2025-03-01 10:39:13'),('svT3dNlTvF-m5a7jVLhk4','钩藤','2025-03-01 10:39:13','2025-03-01 10:39:13'),('SYEH3LpRINzcn61wEY_B0','制何首乌','2025-03-01 10:39:13','2025-03-01 10:39:13'),('sZJolBJ2SRyICQRSnz2x0','盐小茴香','2025-03-01 10:39:13','2025-03-01 10:39:13'),('TArSEsAkNpuNQ6hELhnao','高良姜','2025-03-01 10:39:13','2025-03-01 10:39:13'),('TX19zMMQZEWPfZ40A-loa','棉萆薢','2025-03-01 10:39:13','2025-03-01 10:39:13'),('u3QdjsxygjwL0wPbBSHEM','淡豆豉','2025-03-01 10:39:13','2025-03-01 10:39:13'),('uck2NmYCbe5bqkTg0mM9I','秦皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('uHFjz9g58yZy4P-iUYTau','川芎','2025-03-01 10:39:13','2025-03-01 10:39:13'),('u_9yNU-rgH8wEtfpl9jGT','蜜枇杷叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('v2BGiNcFBs58jNhrrTzOC','龙骨','2025-03-01 10:39:13','2025-03-01 10:39:13'),('V2H1nA2x22wOu3Ty4TqLo','补骨脂','2025-03-01 10:39:13','2025-03-01 10:39:13'),('v6I89aVTIlDbaKSQWChOr','小通草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('V9jn_oaPRLcIuDVReqmWL','麦冬','2025-03-01 10:39:13','2025-03-01 10:39:13'),('veuPdgZKv2bhIkSronZ_g','黑顺片','2025-03-01 10:39:13','2025-03-01 10:39:13'),('VGTHm234iLKqm8RJ0ctbF','车前草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('VKweAxIpGZe4N_-k-WbfL','醋乌梅','2025-03-01 10:39:13','2025-03-01 10:39:13'),('VmZ88Bt_W_2AhdkhgUB9M','茯神','2025-03-01 10:39:13','2025-03-01 10:39:13'),('VngqOBbIewFtcK6p7iSZQ','醋香附','2025-03-01 10:39:13','2025-03-01 10:39:13'),('VTAUO3fnsjXJ5BkEr_YvB','香附','2025-03-01 10:39:13','2025-03-01 10:39:13'),('vUPiniyzSI-bmy_IhH9un','炒王不留行','2025-03-01 10:39:13','2025-03-01 10:39:13'),('vYQa4Q3o-eeni04ChrDy9','人参片','2025-03-01 10:39:13','2025-03-01 10:39:13'),('w05yl_mJnipyH9RAnjDh8','稻芽','2025-03-01 10:39:13','2025-03-01 10:39:13'),('w2KwhMpzC9fmMR-MgwpLC','牡蛎','2025-03-01 10:39:13','2025-03-01 10:39:13'),('w38JNU2LRFiYbKYbrV2CX','合欢皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('W8OHun14r7vrKLFlmZ-hV','鸡矢藤','2025-03-01 10:39:13','2025-03-01 10:39:13'),('WeCZq6W1zAqOAbN9vkMLt','盐橘核','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Whm9bCRmb6NrzIVCk3L-e','升麻','2025-03-01 10:39:13','2025-03-01 10:39:13'),('WjOODLSplV-ypU_xorBgJ','绵萆薢','2025-03-01 10:39:13','2025-03-01 10:39:13'),('wriBvwc3YbdSPd0jqIVw9','珍珠母','2025-03-01 10:39:13','2025-03-01 10:39:13'),('WTFVHRSaW9qMk9_EfRhrp','生地黄','2025-03-01 10:39:13','2025-03-01 10:39:13'),('x28oklOtTnepZUy3tfz5i','玉竹','2025-03-01 10:39:13','2025-03-01 10:39:13'),('X2mdprbSySmfZJPV2fVoV','艾叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('x9hwQgpVTIdyiii3Q_5Sj','炒川楝子','2025-03-01 10:39:13','2025-03-01 10:39:13'),('xDN6etA1Lcyp6DfW3UzF3','桑寄生','2025-03-01 10:39:13','2025-03-01 10:39:13'),('XfuzTWSggi9T_5qLIl1Xw','桑枝','2025-03-01 10:39:13','2025-03-01 10:39:13'),('xfXHR3SP-xeVn-GyGqYsZ','独活','2025-03-01 10:39:13','2025-03-01 10:39:13'),('xI3IqE4lwlR668zc0JCNj','鹿角霜','2025-03-01 10:39:13','2025-03-01 10:39:13'),('XrdMcGIJ-DXlbzZK3nV8c','陈皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('XytwGvJLebOgJXhp_4loA','浙贝母','2025-03-01 10:39:13','2025-03-01 10:39:13'),('XZ_jqGuY-3V8waGsT-uXf','地骨皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('x_YgZkAgoVn03lguJu4Sr','昆布','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Y-WnTLqo0-Oe7Dhcl4zbt','苍术','2025-03-01 10:39:13','2025-03-01 10:39:13'),('yA9wHhrS2d_HowiMO--bI','葛根','2025-03-01 10:39:13','2025-03-01 10:39:13'),('yAkW1DjfEdKT5pUEARJtD','丝瓜络','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ycnUxHrrS0nVa2cETsMjR','冰片','2025-03-01 10:39:13','2025-03-01 10:39:13'),('yIXhM0qbYNxJbfk2lmfA1','生甘草','2025-03-01 10:39:13','2025-03-01 10:39:13'),('yjgKv90972gFPll2PqpAI','苦参','2025-03-01 10:39:13','2025-03-01 10:39:13'),('YLqLaE237DpB9ZkHVOmvW','炒白芍','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ypflAPyPBfSYWCHgKakOD','土鳖虫','2025-03-01 10:39:13','2025-03-01 10:39:13'),('yP_jsJrT77TsA8ybPI7Ju','刺五加','2025-03-01 10:39:13','2025-03-01 10:39:13'),('yt77VEKkOtylrVIYWLQ7h','白花蛇','2025-03-01 10:39:13','2025-03-01 10:39:13'),('yTLVlnlIb2ZDmRiqrPPia','炒白扁豆','2025-03-01 10:39:13','2025-03-01 10:39:13'),('YyY1xs3BGkD3qzzUgnUcw','旋覆花','2025-03-01 10:39:13','2025-03-01 10:39:13'),('YZdezrNjcf1wU6sEpChqT','五加皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Z0K8sqHI_XIu5rVvJ0rKL','泽泻','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Z1YrG5upWVQn7dg7Y0Dhi','北沙参','2025-03-01 10:39:13','2025-03-01 10:39:13'),('z5xFi6SBFDeP0cC8GluKE','防己','2025-03-01 10:39:13','2025-03-01 10:39:13'),('zcGCvqLPvaZn-Zo0ZBarb','石榴皮','2025-03-01 10:39:13','2025-03-01 10:39:13'),('ZpcyUYK2gN0DtzYF9YcSt','佩兰','2025-03-01 10:39:13','2025-03-01 10:39:13'),('zQtIi7o6Cr6ZssSonGbH8','银杏叶','2025-03-01 10:39:13','2025-03-01 10:39:13'),('Z_G9nsYH09ezj-sfJzsCt','炒薏苡仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('_5047pDAOIIsymGrU1aaS','盐桑螵蛸','2025-03-01 10:39:13','2025-03-01 10:39:13'),('_6szmV1GT2Vnqh2puui20','火麻仁','2025-03-01 10:39:13','2025-03-01 10:39:13'),('_AdGV1OyA4XkLiy8zgoz6','蜜麻黄','2025-03-01 10:39:13','2025-03-01 10:39:13'),('_Nq4SYy40NgbCDAVSSt4R','龙胆','2025-03-01 10:39:13','2025-03-01 10:39:13'),('_ZZKLrDwZVXQJ_QieBxXn','羌活','2025-03-01 10:39:13','2025-03-01 10:39:13');

/*Table structure for table `prescriptions` */

DROP TABLE IF EXISTS `prescriptions`;

CREATE TABLE `prescriptions` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `patientName` varchar(255) NOT NULL COMMENT '患者姓名',
  `age` int(11) NOT NULL COMMENT '年龄',
  `gender` enum('男','女') NOT NULL COMMENT '性别',
  `prescriptionDate` varchar(255) NOT NULL COMMENT '开方时间',
  `diagnosis` text NOT NULL COMMENT '临床诊断',
  `prescription` text NOT NULL COMMENT '药方',
  `imageUrl` varchar(255) DEFAULT NULL COMMENT '原档图片URL',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `pairs` text COMMENT '副数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `prescriptions` */

insert  into `prescriptions`(`id`,`patientName`,`age`,`gender`,`prescriptionDate`,`diagnosis`,`prescription`,`imageUrl`,`createdAt`,`updatedAt`,`deletedAt`,`remark`,`pairs`) values ('9thVK22W2Onf_EWSPBZmZ','da',11,'女','2025-03-05','23','九节菖蒲 105g、制胆星 105g','/temp/2449668c-2dd7-4282-bb40-112835c83c80.jpg','2025-03-05 19:53:54','2025-03-06 23:51:06',NULL,'','2'),('IF4vGJo4N14ECZfDrmp23','sss',2,'男','2024-03-05','ssss','麸炒山药 105g、苍耳子 105g、桑白皮 105g、石菖蒲 105g',NULL,'2025-03-05 20:09:27','2025-03-07 00:30:49',NULL,'','4'),('ITRkT-gP8VifyDxUGjzIC','测试年龄必填',0,'男','2025-03-06','萨达','白参须 15g、炒谷芽 15枚','/temp/392674b4-2831-4513-8a1b-4c4caf3fef77.jpg','2025-03-05 21:57:53','2025-03-06 23:48:30',NULL,'','7'),('pflAE9e9bu0KwsK0fkV0o','测试',3,'男','2024-03-04','sss','炒谷芽 105片、石菖蒲 15g、九节菖蒲 15g、桑白皮 15片、炒酸枣仁 15g','https://y.wqdream.vip/images/793c0008-99f7-45c3-b88e-0a27c62ab201.jpg','2025-03-05 19:50:45','2025-03-07 00:38:18',NULL,'555','5'),('REPeUcyfmusw4Jf6dN8ru','asd',3,'男','2025-03-12','asdsa','焦山楂 15g、桑白皮 15g',NULL,'2025-03-05 22:03:11','2025-03-07 00:29:10',NULL,'','1');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `permission` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_12` (`username`),
  UNIQUE KEY `username_13` (`username`),
  UNIQUE KEY `username_14` (`username`),
  UNIQUE KEY `username_15` (`username`),
  UNIQUE KEY `username_16` (`username`),
  UNIQUE KEY `username_17` (`username`),
  UNIQUE KEY `username_18` (`username`),
  UNIQUE KEY `username_19` (`username`),
  UNIQUE KEY `username_20` (`username`),
  UNIQUE KEY `username_21` (`username`),
  UNIQUE KEY `username_22` (`username`),
  UNIQUE KEY `username_23` (`username`),
  UNIQUE KEY `username_24` (`username`),
  UNIQUE KEY `username_25` (`username`),
  UNIQUE KEY `username_26` (`username`),
  UNIQUE KEY `username_27` (`username`),
  UNIQUE KEY `username_28` (`username`),
  UNIQUE KEY `username_29` (`username`),
  UNIQUE KEY `username_30` (`username`),
  UNIQUE KEY `username_31` (`username`),
  UNIQUE KEY `username_32` (`username`),
  UNIQUE KEY `username_33` (`username`),
  UNIQUE KEY `username_34` (`username`),
  UNIQUE KEY `username_35` (`username`),
  UNIQUE KEY `username_36` (`username`),
  UNIQUE KEY `username_37` (`username`),
  UNIQUE KEY `username_38` (`username`),
  UNIQUE KEY `username_39` (`username`),
  UNIQUE KEY `username_40` (`username`),
  UNIQUE KEY `username_41` (`username`),
  UNIQUE KEY `username_42` (`username`),
  UNIQUE KEY `username_43` (`username`),
  UNIQUE KEY `username_44` (`username`),
  UNIQUE KEY `username_45` (`username`),
  UNIQUE KEY `username_46` (`username`),
  UNIQUE KEY `username_47` (`username`),
  UNIQUE KEY `username_48` (`username`),
  UNIQUE KEY `username_49` (`username`),
  UNIQUE KEY `username_50` (`username`),
  UNIQUE KEY `username_51` (`username`),
  UNIQUE KEY `username_52` (`username`),
  UNIQUE KEY `username_53` (`username`),
  UNIQUE KEY `username_54` (`username`),
  UNIQUE KEY `username_55` (`username`),
  UNIQUE KEY `username_56` (`username`),
  UNIQUE KEY `username_57` (`username`),
  UNIQUE KEY `username_58` (`username`),
  UNIQUE KEY `username_59` (`username`),
  UNIQUE KEY `username_60` (`username`),
  UNIQUE KEY `username_61` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`password`,`avatar`,`permission`,`createdAt`,`updatedAt`,`deletedAt`) values ('zpEbtgkwZ3ePJiuxss','yhmyl','$2a$10$jCE27uPZ8oz08wFzGD35VuiVyVy/IrWTunovNtyZNe9G5AhgxNRea','11','11','2025-02-17 19:51:18','2025-02-17 19:51:21',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
