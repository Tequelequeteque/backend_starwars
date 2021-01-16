import { Request, Response } from 'express';
import GetAllCharacters from './services/GetAllCharacters';

export default class CharacterController {
  constructor(private getAll: GetAllCharacters) {}

  public index = async (
    _request: Request,
    response: Response,
  ): Promise<Response> => {
    const characters = await this.getAll.execute();
    return response.json(characters);
  };
}
