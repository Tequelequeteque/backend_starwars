import { Repository } from 'typeorm';
import Character, {
  ICharacterResponse,
} from '../../../entities/Character.entity';
import { ApiError } from '../../../shared/apiError';

export default class UpdateService {
  constructor(private characterRepository: Repository<Character>) {}

  public execute = async (data: Character): Promise<ICharacterResponse> => {
    let existsCharacter = await this.characterRepository.findOne({
      uuid: data.uuid,
    });

    if (!existsCharacter) throw new ApiError(`${data.name} no exists`, 409);
    if (existsCharacter.hasBeenUpdate)
      throw new ApiError(`${data.name} cannot be updated`, 409);

    Object.assign(existsCharacter, data, { hasBeenUpdate: true });

    existsCharacter = await this.characterRepository.save(existsCharacter);

    return existsCharacter.toJson();
  };
}
