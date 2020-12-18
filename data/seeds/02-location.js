exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("location").insert([
    {
      name: "Kenya",
    },
    {
      name: "Uganda",
    },
    {
      name: "Tanzania",
    },
    {
      name: "Rwanda",
    },
    {
      name: "South Sudan",
    },
    {
      name: "Burudni",
    },
    {
      name: "DRC",
    },
  ]);
};
