import { Router } from 'express';
import { getRepository } from 'typeorm';
import Character from '../../entities/Character.entity';
import CharacterController from './character.controller';
import GetAllCharacters from './services/GetAllCharacters';

const getCharactersRoutes = async (): Promise<Router> => {
  const charactersRoutes = Router();

  const characterRepository = getRepository(Character);
  const getAllCharacters = new GetAllCharacters(characterRepository);

  const characterController = new CharacterController(getAllCharacters);

  charactersRoutes.get('/characters', characterController.index);
  return charactersRoutes;
};

export { getCharactersRoutes as default };
