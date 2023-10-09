import 'dotenv/config';

export const DbDevConfig = {
  dialect: 'postgres',
  host: process.env.DEV_DB_HOST,
  port: parseInt(process.env.DEV_DB_PORT),
  username: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  database: process.env.DEV_DB_NAME,
};

export const PreProdConfig = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'roku',
  password: 'roku',
  database: 'test',
};

export const ProdConfig = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'roku',
  password: 'roku',
  database: 'prod',
};
