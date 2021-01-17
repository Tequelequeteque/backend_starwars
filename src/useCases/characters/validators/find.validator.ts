import * as Yup from 'yup';
import { ApiError } from '../../../shared/apiError';

export default class FindValidator {
  private schema = Yup.string().uuid().required();

  public execute = async (data: string): Promise<string> => {
    try {
      const uuid = await this.schema.validate(data, {
        abortEarly: false,
      });
      return uuid;
    } catch (e) {
      throw new ApiError(e.errors.join(', '));
    }
  };
}
