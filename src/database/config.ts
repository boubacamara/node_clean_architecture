import { Sequelize } from 'sequelize-typescript';
import { config, sqlConfig } from '../config/database';
import { DIALECT_MODE } from "../utils/constants";

const dbConfig= DIALECT_MODE === 'sqlite' ?  sqlConfig : config;

const db = new Sequelize(dbConfig);

export default db;