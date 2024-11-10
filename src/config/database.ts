import { SequelizeOptions } from "sequelize-typescript";
import { IDatabase, ISqlite } from "../shared/types/idatabase";
import { ENV_MODE } from "../utils/constants";


const dbconfig:IDatabase = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT || 'mysql',
        host: process.env.DB_HOST || '127.0.0.1',
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT || 'mysql',
        host: process.env.DB_HOST || '127.0.0.1',
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT || 'mysql',
        host: process.env.DB_HOST || '127.0.0.1',
    }
}

export const sqlConfig:ISqlite = {
    storage: process.env.SQL_STORAGE,
    dialect: process.env.SQL_DIALECT as 'sqlite',
    logging: Boolean(JSON.parse(process.env.SQL_LOGGING as string))
};

export const config = dbconfig[ENV_MODE] as SequelizeOptions;