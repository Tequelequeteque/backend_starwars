import { Repository } from 'typeorm';
import Character from '../../../entities/Character.entity';

export default class GetAllCharacters {
  constructor(private characterRepository: Repository<Character>) {}

  public execute = async (): Promise<Character[]> =>
    this.characterRepository.find();
}
