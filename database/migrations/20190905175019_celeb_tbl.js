exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments();

      users.string('username', 128).unique();
      users.string('password', 128).notNullable();
      users.string('email', 256).unique();
    })
    .createTable('celebs', celebs => {
      celebs.increments('id').primary();
      celebs.string('celebs_name', 128).notNullable();
      celebs.boolean('is_alive');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('celebs');
};
