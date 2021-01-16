import { Router } from 'express';
import { getRepository } from 'typeorm';
import Character from '../../entities/Character.entity';
import CharacterController from './character.controller';
import StoreService from './services/store.service';
import IndexService from './services/index.service';
import StoreValidator from './validators/store.validator';

const getCharacterRoutes = async (): Promise<Router> => {
  const characterRoutes = Router();

  const characterRepository = getRepository(Character);

  const indexService = new IndexService(characterRepository);

  const storeValidator = new StoreValidator(characterRepository);
  const storeService = new StoreService(characterRepository);

  const characterController = new CharacterController(
    indexService,
    storeValidator,
    storeService,
  );

  characterRoutes.get('/characters', characterController.index);
  characterRoutes.post('/characters', characterController.store);

  return characterRoutes;
};

export { getCharacterRoutes as default };
