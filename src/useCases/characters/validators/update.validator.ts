import * as Yup from 'yup';
import { Repository } from 'typeorm';
import Character from '../../../entities/Character.entity';
import { ApiError } from '../../../shared/apiError';

interface IUpdateRequest {
  [key: string]: unknown;
}

export default class UpdateValidator {
  constructor(private characterRepository: Repository<Character>) {}

  private schema = Yup.object({
    uuid: Yup.string().uuid().required(),
    name: Yup.string().required('Your name is required!'),
    age: Yup.number().integer().positive().required(),
  });

  public execute = async (data: IUpdateRequest): Promise<Character> => {
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
