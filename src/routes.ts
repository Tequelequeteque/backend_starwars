import { Router } from 'express';

import getCharactersRoutes from './useCases/characters/character.routes';

const getRoutes = async (): Promise<Router> => {
  const routes = Router();
  const characterRoutes = await getCharactersRoutes();
  routes.use(characterRoutes);
  return routes;
};

export { getRoutes as default };
