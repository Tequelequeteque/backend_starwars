import { Router } from 'express';

import getCharactersRoutes from './useCases/characters/character.routes';

const getRoutes = async (): Promise<Router> => {
  const characterRoutes = await getCharactersRoutes();
  const routes = Router();
  routes.use(characterRoutes);
  return routes;
};

export { getRoutes as default };
