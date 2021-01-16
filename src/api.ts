import 'reflect-metadata';
import 'dotenv/config';

import * as express from 'express';
import * as cors from 'cors';
import getConnection from './database/db.connection';
import getCharactersRoutes from './useCases/characters/character.routes';

const getApi = async (): Promise<express.Express> => {
  await getConnection();
  const routes = await getCharactersRoutes();

  const api = express();
  api.use(cors());
  api.use(express.json());
  api.use(routes);

  return api;
};

export { getApi as default };
