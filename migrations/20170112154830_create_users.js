// const knex = require('knex')(require('./knex.config.js'));

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments().primary();
    table.timestamps();
    table.string('name');
    table.integer('englishYears');
    table.boolean('householdEnglish');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
