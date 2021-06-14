
exports.up = function(knex) {
    return knex.schema.createTable('notes' , function(table){
        table.increments('id');
        table.text('titulo');
        table.text('descricao');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('notes');
};
