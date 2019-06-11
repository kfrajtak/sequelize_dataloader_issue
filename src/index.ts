import "reflect-metadata";
import { Sequelize } from "sequelize-typescript";
import { createContext, EXPECTED_OPTIONS_KEY } from "dataloader-sequelize";

import { User } from "models/all";

async function main() {
  const sequelize = new Sequelize({
    username: "root",
    password: "moodle",
    database: "moodle",
    host: "127.0.0.1",
    port: 3366,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialect: "mysql",
    modelPaths: [__dirname + "/models/**/*.model.ts"]
  });

  const dl_context = createContext(sequelize);
  await Promise.all([
    User.findByPk(48, {
      [EXPECTED_OPTIONS_KEY]: dl_context
    }),
    User.findByPk(47, {
      [EXPECTED_OPTIONS_KEY]: dl_context
    })
  ]);
}

main();
