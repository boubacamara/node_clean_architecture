import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8080;

export const ENV_MODE = process.env.ENV_MODE || 'development';
export const DIALECT_MODE = process.env.DIALECT_MODE || 'sqlite';

export const INTERFACE_TYPES = {
    WelcomeController: Symbol.for('WelcomeController'),
}