import Knex from "Knex";

const knex = Knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    database: "library",
    password: "bcd127",
  },
});

export { knex };
