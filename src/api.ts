import 'reflect-metadata';
import 'dotenv/config';

import * as express from 'express';
import { getRepository } from 'typeorm';
import dbConnection from './database/db.connection';
import User from './entities/User';

const getApi = async () => {
  const api = express();
  const db = await dbConnection();

  const ru = getRepository(User);
  ru.create({ name: 'test', age: 15 });

  return api;
};

export { getApi as default };
