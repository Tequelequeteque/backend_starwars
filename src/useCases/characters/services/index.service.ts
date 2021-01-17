import { Repository } from 'typeorm';
import Character, {
  ICharacterResponse,
} from '../../../entities/Character.entity';

export default class IndexService {
  constructor(private characterRepository: Repository<Character>) {}

  public execute = async (): Promise<ICharacterResponse[]> => {
    const data = await this.characterRepository.find();
    return data.map(i => i.toJson());
  };
}
