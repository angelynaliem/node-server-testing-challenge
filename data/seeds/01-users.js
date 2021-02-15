exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    {
      username: "santaclaus",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "santaclaus@gmail.com",
    },
    {
      username: "elf",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "elf@gmail.com",
    },
    {
      username: "rudolph",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "rudolph@gmail.com",
    },
    {
      username: "cookie",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "cookie@gmail.com",
    },
  ]);
};
