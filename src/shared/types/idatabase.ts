import { Dialect } from "sequelize"

export interface IDatabase {
    [key: string]:{
        username: string | undefined,
        password: string | undefined,
        database: string | undefined,
        dialect: Dialect | string,
        host: string
    }
}

export interface ISqlite {
    storage: string | undefined,
    dialect: Dialect | undefined,
    logging: boolean
}