import dotenv from 'dotenv';

dotenv.config();

export const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
};
