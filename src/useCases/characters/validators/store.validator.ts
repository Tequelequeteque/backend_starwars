import { Repository } from 'typeorm';
import * as Yup from 'yup';
import Character from '../../../entities/Character.entity';
import { ApiError } from '../../../shared/apiError';

interface IStoreRequest {
  [key: string]: unknown;
}
export default class StoreValidator {
  constructor(private characterRepository: Repository<Character>) {}

  private schema = Yup.object({
    name: Yup.string().required('Your name is required!'),
    age: Yup.number().integer().positive().required(),
  });

  public execute = async (data: IStoreRequest): Promise<Character> => {
    try {
      const dto = await this.schema.validate(data, {
        abortEarly: false,
      });
      return this.characterRepository.create(dto);
    } catch (e) {
      throw new ApiError(e.errors.join(', '));
    }
  };
}
