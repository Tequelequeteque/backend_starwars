import { Repository } from 'typeorm';
import Character, {
  ICharacterResponse,
} from '../../../entities/Character.entity';
import { ApiError } from '../../../shared/apiError';

export default class StoreService {
  constructor(private characterRepository: Repository<Character>) {}

  public execute = async (data: Character): Promise<ICharacterResponse> => {
    const existsCharacter = await this.characterRepository.findOne({
      name: data.name,
    });

    if (existsCharacter)
      throw new ApiError(`${data.name} cannot be recreate`, 409);

    const store = await this.characterRepository.save(data);
    return store.toJson();
  };
}
