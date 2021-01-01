exports.up = function (knex) {
  return knex.schema

    .createTable("users", (tbl) => {
      tbl.increments();

      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();
      tbl.string("email", 256).notNullable();
    })

    .createTable("location", (tbl) => {
      tbl.increments();

      tbl.string("name", 128).notNullable().unique();
    })

    .createTable("category", (tbl) => {
      tbl.increments();

      tbl.string("name", 128).notNullable().unique();
    })

    .createTable("products", (tbl) => {
      tbl.increments();

      tbl.string("name", 128).notNullable().unique();
      tbl.string("description", 1000);
      tbl.float("price").notNullable();

      tbl
        .integer("locationId")
        .unsigned()
        .notNullable()
        .references("location.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("categoryId")
        .unsigned()
        .notNullable()
        .references("category.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("products")
    .dropTableIfExists("category")
    .dropTableIfExists("location")
    .dropTableIfExists("users");
};
