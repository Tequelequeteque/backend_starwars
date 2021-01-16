import 'dotenv/config';
import 'reflect-metadata';

import * as express from 'express';
import * as cors from 'cors';
import 'express-async-errors';

import getRoutes from './routes';
import getConnection from './database/db.connection';
import globalHandlerException from './middlewares/globalHandlerException.middleware';

const getApi = async (): Promise<express.Express> => {
  await getConnection();
  const routes = await getRoutes();

  const api = express();
  api.use(cors());
  api.use(express.json());
  api.use(routes);

  api.use(globalHandlerException);

  return api;
};

export { getApi as default };
