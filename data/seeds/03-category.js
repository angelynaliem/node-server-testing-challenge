exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("category").insert([
    {
      name: "Animal Products",
    },
    {
      name: "Beans",
    },
    {
      name: "Cereal - Maize",
    },
    {
      name: "Cereal - Other",
    },
    {
      name: "Cereal - Rice",
    },
    {
      name: "Fruits",
    },
    {
      name: "Other",
    },
    {
      name: "Peas",
    },
    {
      name: "Roots & Tubers",
    },
    {
      name: "Seeds & Nuts",
    },
    {
      name: "Vegetables",
    },
  ]);
};
