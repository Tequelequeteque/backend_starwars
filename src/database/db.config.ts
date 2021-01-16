import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

const entitiesDir = join(__dirname, '..', 'entities');

const dbConfig = {
  type: 'postgres',
  host: String(DB_HOST),
  port: Number(DB_PORT),
  username: String(DB_USER),
  password: String(DB_PASS),
  database: String(DB_NAME),
  synchronize: true,
  entities: [`${entitiesDir}/**/*.entity.ts`],
  cli: { entitiesDir },
} as PostgresConnectionOptions;

export { dbConfig as default };
