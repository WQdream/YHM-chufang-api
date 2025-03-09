exports.up = function(knex) {
  return knex.schema.createTable('chinese_medicines', table => {
    table.increments('id').primary();
    table.string('name').notNullable().comment('中药材名称');
    table.decimal('stock_amount', 10, 2).defaultTo(0).comment('库存数量');
    table.string('unit').comment('单位');
    table.text('description').comment('描述');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('chinese_medicines');
}; 