import { Request, Response } from 'express';
import StoreService from './services/store.service';
import IndexService from './services/index.service';
import StoreValidator from './validators/store.validator';
import UpdateValidator from './validators/update.validator';
import UpdateService from './services/update.service';
import DeleteValidator from './validators/delete.validator';
import DeleteService from './services/delete.service';
import FindValidator from './validators/find.validator';
import FindService from './services/find.service';

export default class CharacterController {
  constructor(
    private indexService: IndexService,
    private storeValidator: StoreValidator,
    private storeService: StoreService,
    private updateValidator: UpdateValidator,
    private updateService: UpdateService,
    private deleteValidator: DeleteValidator,
    private deleteService: DeleteService,
    private findValidator: FindValidator,
    private findService: FindService,
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

  public update = async (
    request: Request,
    response: Response,
  ): Promise<Response> => {
    const dto = await this.updateValidator.execute(request.body);
    const newCharacter = await this.updateService.execute(dto);
    return response.json(newCharacter);
  };

  public delete = async (
    request: Request,
    response: Response,
  ): Promise<Response> => {
    const dto = await this.deleteValidator.execute(request.params.uuid);
    await this.deleteService.execute(dto);
    return response.status(204).send();
  };

  public find = async (
    request: Request,
    response: Response,
  ): Promise<Response> => {
    const dto = await this.findValidator.execute(request.params.uuid);
    const character = await this.findService.execute(dto);
    return response.json(character);
  };
}
