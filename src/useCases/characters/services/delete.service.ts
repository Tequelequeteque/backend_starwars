import { Repository } from 'typeorm';
import Character from '../../../entities/Character.entity';
import { ApiError } from '../../../shared/apiError';

export default class DeleteService {
  constructor(private characterRepository: Repository<Character>) {}

  public execute = async (uuid: string): Promise<void> => {
    const existsCharacter = await this.characterRepository.findOne({ uuid });
    if (!existsCharacter) throw new ApiError('Character not found', 404);
    await this.characterRepository.delete({ uuid });
  };
}
