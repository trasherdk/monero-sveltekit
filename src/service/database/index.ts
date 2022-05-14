import { knex, Knex } from 'knex';
import * as path from 'node:path';
import dotenv from 'dotenv';
// import { db } from '$utils/vars';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = path.resolve('.env.development')
console.log('dotenv:', config)
dotenv.config({ path: config })

let pool: Knex;

type RawMySQLResult<T> = [T[], []];

type RawResult<T> = RawMySQLResult<T>;

async function getPool (): Promise<Knex> {

  if (!pool) {
    // eslint-disable-next-line no-console
    console.log('Connecting to database');
    pool = knex(getSettings());

    // eslint-disable-next-line no-console
    console.log('Running Migrations');
    await pool.migrate.latest();

  }

  return pool;
}

export async function getConnection (): Promise<Knex> {

  return (await getPool());

}

export async function query<T = unknown> (query: string, params: Knex.ValueDict | Knex.RawBinding[] = []): Promise<T[]> {

  const { client } = await getSettings();
  console.log('Database[client]:', client)

  const querypool = await getPool();

  // Knex returns weird typings for the raw function,
  const result = await querypool.raw(query, params) as RawResult<T>;

  return (result as RawMySQLResult<T>)[0];
}

export default {
  getConnection,
  query,
};

export function getSettings (): Knex.Config {

  let connection: Knex.MySql2ConnectionConfig;
  let client: string;

  // Declare explicitly the client to use, or try to infer it.
  if (Object.keys(process.env).includes('DB_DRIVER')) {
    console.log('Loading ENV from dotenv')
    client = process.env.DB_DRIVER;
    connection = {
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT as string, 10) || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    };
    /**
    } else if ('driver' in db) {
      console.log('Loading ENV from import.meta.env')
      client = `${db.driver}`;
      connection = {
        host: `${db.host}` || '127.0.0.1',
        port: parseInt(db.port as string, 10) || 3306,
        user: `${db.user}`,
        password: `${db.password}`,
        database: `${db.database}`
      };
    **/
  } else {
    throw new Error('No database client selected, please provide DB_DRIVER environment variables');
  }

  return {
    client,
    connection,
    searchPath: [
      connection.user as string,
      connection.database as string,
      'public'
    ],
    migrations: {
      directory: path.join(__dirname, 'migrations'),
      loadExtensions: ['.js'],
      schemaName: connection.database as string,
    },
    pool: { min: 0, max: 10 },
    debug: process.env.DEBUG ? true : false,
  };
}
