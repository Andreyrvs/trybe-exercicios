import Joi, { ValidationResult } from 'joi';
import IUser from '../interfaces/IUser';

const validateUser = (data: IUser): ValidationResult => {
  const schema = Joi.object({
    email: Joi.string().email().required()
      .messages(
        { 'any.required': 'Email válido é obrigatório' },
      ),
    name: Joi.string().required().min(3)
      .messages(
        { 'string.min': 'Nome deve ter no mínimo 3 caracteres' },
      ),
    password: Joi.string().min(6).max(12).required()
      .messages(
        {
          'string.min': 'Password deve ter entre 6 e 12 caracteres',
        },
      ),
  });

  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
};

export default validateUser;
