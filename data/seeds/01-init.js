exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    { id: 1, username: "Angelyn", password: "password" },
    { id: 2, username: "Darren", password: "password" },
    { id: 3, username: "Asher", password: "password" },
    { id: 4, username: "Darrell", password: "password" },
  ]);
};
