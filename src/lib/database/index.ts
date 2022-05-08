import { knex, Knex } from 'knex';
import * as path from 'node:path';

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
  console.log('database: %s', client)

  // Knex returns weird typings for the raw function,
  const result = (await (await getPool()).raw(query, params)) as RawResult<T>;

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
  if (Object.keys(process.env).includes('MYSQL_DATABASE')) {
    client = process.env.MYSQL_DATABASE;
    connection = {
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT as string, 10) || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    };

    if (process.env.MYSQL_INSTANCE_CONNECTION_NAME) {
      (connection as Knex.MySql2ConnectionConfig).socketPath = '/cloudsql/' + process.env.MYSQL_INSTANCE_CONNECTION_NAME;
    } else {
      delete connection.host;
      delete connection.port;
    }
  } else {
    throw new Error('No database client selected, please provide either PG_DATABASE or MYSQL_DATABASE environment variables');
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
