import { Connection, createConnection } from 'typeorm';
import dbConfig from './db.config';

const getConnection = async (): Promise<Connection> =>
  createConnection(dbConfig);

export { getConnection as default };
