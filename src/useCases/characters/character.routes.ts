import { Router } from 'express';
import { getRepository } from 'typeorm';
import Character from '../../entities/Character.entity';
import CharacterController from './character.controller';
import StoreService from './services/store.service';
import IndexService from './services/index.service';
import StoreValidator from './validators/store.validator';
import UpdateValidator from './validators/update.validator';
import UpdateService from './services/update.service';
import DeleteValidator from './validators/delete.validator';
import DeleteService from './services/delete.service';
import FindValidator from './validators/find.validator';
import FindService from './services/find.service';

const getCharacterRoutes = async (): Promise<Router> => {
  const characterRoutes = Router();

  const characterRepository = getRepository(Character);

  const indexService = new IndexService(characterRepository);

  const storeValidator = new StoreValidator(characterRepository);
  const storeService = new StoreService(characterRepository);

  const updateValidator = new UpdateValidator(characterRepository);
  const updateService = new UpdateService(characterRepository);

  const deleteValidator = new DeleteValidator();
  const deleteService = new DeleteService(characterRepository);

  const findValidator = new FindValidator();
  const findService = new FindService(characterRepository);

  const characterController = new CharacterController(
    indexService,
    storeValidator,
    storeService,
    updateValidator,
    updateService,
    deleteValidator,
    deleteService,
    findValidator,
    findService,
  );

  characterRoutes.get('/characters', characterController.index);
  characterRoutes.post('/characters', characterController.store);
  characterRoutes.put('/characters', characterController.update);
  characterRoutes.delete('/characters/:uuid', characterController.delete);
  characterRoutes.get('/characters/:uuid', characterController.find);

  return characterRoutes;
};

export { getCharacterRoutes as default };
