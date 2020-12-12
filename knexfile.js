// Update with your config settings.

const pgConnection =
  process.env.DATABASE_URL ||
  "postgres://swngzftqsfahka:cba75265a676d18a13e2b069b6fc210e30548bd7fb48ea53c85c2d57442b3c2e@ec2-54-157-66-140.compute-1.amazonaws.com:5432/d6gjkdkn27i8ni";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/bwbe.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/testbwbe.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
