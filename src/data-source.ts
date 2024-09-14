import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { FirstOne } from "./entity/firstl";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "titan.de.hostns.io",
  port: 3306,
  ssl: false,
  username: "root",
  password: "perception@7",
  database: "backend",
  synchronize: true,
  logging: false,
  entities: [FirstOne],
  migrations: [],
  subscribers: [],
});
