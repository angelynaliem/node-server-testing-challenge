exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    { id: 1, username: "Angelyn" },
    { id: 2, username: "Darren" },
    { id: 3, username: "Asher" },
    { id: 4, username: "Darrell" },
  ]);
};
