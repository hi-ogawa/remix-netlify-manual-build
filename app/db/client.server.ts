import { Knex, knex as initKnex } from "knex";
import { SERVER_CONFIG } from "../config.server";

const CONFIG: Knex.Config = {
  client: "mysql2",
  connection: {
    host: SERVER_CONFIG.MYSQL_HOST,
    port: Number(SERVER_CONFIG.MYSQL_PORT),
    user: SERVER_CONFIG.MYSQL_USER,
    password: SERVER_CONFIG.MYSQL_PASSWORD,
    database: SERVER_CONFIG.MYSQL_DATABASE,
    ssl: SERVER_CONFIG.MYSQL_SSL,
  },
};

// cf. https://github.com/remix-run/remix/blob/7a4279a513fb38fdea5b49a3a6ffa24dfbafcf16/examples/jokes/app/utils/db.server.ts

export let client: Knex;

declare global {
  var __DEV_CLIENT__: any;
}

if (process.env.NODE_ENV === "production") {
  client = initKnex(CONFIG);
} else {
  if (!global.__DEV_CLIENT__) {
    global.__DEV_CLIENT__ = initKnex(CONFIG);
  }
  client = global.__DEV_CLIENT__;
}
