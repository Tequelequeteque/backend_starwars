import { Request, Response } from 'express';
import CreateCharacterService from './services/CreateCharacters.service';
import GetAllCharactersService from './services/GetAllCharacters.service';
import CreateCharacterValidation from './validations/CreateCharacter.validation';

export default class CharacterController {
  constructor(
    private getAllService: GetAllCharactersService,
    private createCharacterValidation: CreateCharacterValidation,
    private createCharacterService: CreateCharacterService,
  ) {}

  public index = async (
    _request: Request,
    response: Response,
  ): Promise<Response> => {
    const characters = await this.getAllService.execute();
    return response.json(characters);
  };

  public store = async (
    request: Request,
    response: Response,
  ): Promise<Response> => {
    const dto = await this.createCharacterValidation.execute(request.body);
    const newCharacter = await this.createCharacterService.execute(dto);
    return response.status(201).json(newCharacter);
  };
}
