import { createConnection } from 'typeorm';
import dbConfig from './db.config';

const getConnection = () => createConnection(dbConfig);

export { getConnection as default };
