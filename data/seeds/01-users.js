exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    {
      username: "Unicorn",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "angelyn@gmail.com",
    },
    {
      username: "Darren",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "darren@gmail.com",
    },
    {
      username: "Asher",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "asher@gmail.com",
    },
    {
      username: "Darrell",
      password: "$2y$12$7.jX3544nUwBFnmqvEWLGOFdUxZQNyFDVklsuooxEoLb9ysLDMyuq",
      email: "darrell@gmail.com",
    },
  ]);
};
