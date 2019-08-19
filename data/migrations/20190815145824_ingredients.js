exports.up = function(knex) {
    return knex.schema
      .createTable("recipes", table => {
        table.increments();
        table
          .text("recipename", 128)
          .notNullable()
          .unique();
      })
      .createTable("ingredients", table => {
        table.increments();
        table
          .text("ingredientname", 128)
          .notNullable()
          .unique();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("recipes")
      .dropTableIfExists("ingredients");
  };