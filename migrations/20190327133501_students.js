exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments(); // primary key
    tbl.string("name", 128).notNullable();
    tbl
      .integer("cohorts_id")
      .unsigned()
      .references("id")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
