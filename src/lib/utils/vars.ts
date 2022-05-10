export const db = {
  driver: import.meta.env.VITE_DB_DRIVER,
  host: import.meta.env.VITE_DB_HOST,
  port: import.meta.env.VITE_DB_PORT,
  database: import.meta.env.VITE_DB_NAME,
  user: import.meta.env.VITE_DB_USER,
  password: import.meta.env.VITE_DB_PASS
};
