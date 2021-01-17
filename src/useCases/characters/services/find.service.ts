import { Repository } from 'typeorm';
import Character, {
  ICharacterResponse,
} from '../../../entities/Character.entity';
import { ApiError } from '../../../shared/apiError';

export default class FindService {
  constructor(private characterRepository: Repository<Character>) {}

  public execute = async (uuid: string): Promise<ICharacterResponse> => {
    const existsCharacter = await this.characterRepository.findOne({ uuid });
    if (!existsCharacter) throw new ApiError('Character cannot be found!', 404);
    return existsCharacter.toJson();
  };
}
