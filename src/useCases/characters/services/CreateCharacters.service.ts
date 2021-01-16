import { Repository } from 'typeorm';
import Character from '../../../entities/Character.entity';

export default class CreateCharacterService {
  constructor(private characterRepository: Repository<Character>) {}

  public execute = (data: Character): Promise<Character> => {
    return this.characterRepository.save(data);
  };
}
