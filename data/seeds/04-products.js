exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products").insert([
    {
      name: "eggs",
      description: "pasture-raised eggs by small family farm",
      price: 299,
      locationId: 1,
      categoryId: 1,
      userId: 1,
    },
    {
      name: "black beans",
      description: "100% organic",
      price: 40,
      locationId: 2,
      categoryId: 2,
      userId: 2,
    },
    {
      name: "barley",
      description:
        "Our barley is carefully harvested and packaged to preserve its freshness",
      price: 25,
      locationId: 3,
      categoryId: 4,
      userId: 3,
    },
    {
      name: "kales",
      description: "eat your greens, buy our kales",
      price: 50,
      locationId: 1,
      categoryId: 11,
      userId: 1,
    },
  ]);
};
