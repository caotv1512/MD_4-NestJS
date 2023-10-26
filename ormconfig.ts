import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import {User} from "./src/user/entities/users.enity";

// const SnakeNamingStrategy = require('typeorm-naming-strategies').SneakNamingStrategy
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
require('dotenv').config();
const config : MysqlConnectionOptions = {
  type:  "mysql",
  host: process.env.DB_HOST,
  port:  3306,
  username:  process.env.DB_USERNAME,
  password:  process.env.DB_PASSWORD,
  database:  process.env.DB_DATABASE_NAME,
  entities: [User],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy()
};

export default config;
