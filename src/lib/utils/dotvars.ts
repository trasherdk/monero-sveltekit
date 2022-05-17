import { mode } from '$app/env';
import * as path from 'node:path';
import dotenv from 'dotenv';

const config = path.resolve(`.env.${mode}`)
console.log('dotenv:', config)
dotenv.config({ path: config })

export const dbconfig = {
  driver: process.env.VITE_DB_DRIVER,
  host: process.env.VITE_DB_HOST,
  port: process.env.VITE_DB_PORT,
  database: process.env.VITE_DB_NAME,
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASS,
  debug: process.env.VITE_DEBUG
};
