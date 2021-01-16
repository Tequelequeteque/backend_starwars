import { Router } from 'express';
import { getRepository } from 'typeorm';
import Character from '../../entities/Character.entity';
import CharacterController from './character.controller';
import CreateCharacterService from './services/CreateCharacters.service';
import GetAllCharactersService from './services/GetAllCharacters.service';
import CreateCharacterValidation from './validations/CreateCharacter.validation';

const getCharactersRoutes = async (): Promise<Router> => {
  const charactersRoutes = Router();

  const characterRepository = getRepository(Character);

  const getAllCharacters = new GetAllCharactersService(characterRepository);

  const createCharacterValidation = new CreateCharacterValidation(
    characterRepository,
  );
  const createCharacterService = new CreateCharacterService(
    characterRepository,
  );

  const characterController = new CharacterController(
    getAllCharacters,
    createCharacterValidation,
    createCharacterService,
  );

  charactersRoutes.get('/characters', characterController.index);
  charactersRoutes.post('/characters', characterController.store);

  return charactersRoutes;
};

export { getCharactersRoutes as default };
