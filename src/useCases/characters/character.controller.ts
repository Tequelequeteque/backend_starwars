import { Request, Response } from 'express';
import StoreService from './services/store.service';
import IndexService from './services/index.service';
import StoreValidator from './validators/store.validator';

export default class CharacterController {
  constructor(
    private indexService: IndexService,
    private storeValidator: StoreValidator,
    private storeService: StoreService,
  ) {}

  public index = async (
    _request: Request,
    response: Response,
  ): Promise<Response> => {
    const characters = await this.indexService.execute();
    return response.json(characters);
  };

  public store = async (
    request: Request,
    response: Response,
  ): Promise<Response> => {
    const dto = await this.storeValidator.execute(request.body);
    const newCharacter = await this.storeService.execute(dto);
    return response.status(201).json(newCharacter);
  };
}
