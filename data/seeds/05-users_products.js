exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users_products").insert([
    {
      userId: 1,
      productId: 1,
    },
    {
      userId: 2,
      productId: 2,
    },
    {
      userId: 3,
      productId: 3,
    },
    {
      userId: 1,
      productId: 4,
    },
  ]);
};
