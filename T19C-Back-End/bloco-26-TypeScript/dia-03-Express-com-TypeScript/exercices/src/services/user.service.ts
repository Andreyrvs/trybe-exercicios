import UserModel from '../models/user.model';
import connection from '../utils/connection';
import IUser from '../interfaces/IUser';
import HttpException from '../validations/HttpException';
import validateUser from '../validations/userValidation';

class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public getAll = async () => {
    const result = await this.userModel.getAll();
    return result;
  };

  public getById = async (id: number) => {
    const result = await this.userModel.getById(id);
    if (!result) throw new HttpException('NotFoundError', 'Pessoa não encontrada');
    return result;
  };

  public create = async (user: IUser) => {
    validateUser(user);
    const userExist = await this.userModel.getByEmail(user.email);

    if (userExist) throw new HttpException('NotFoundError', 'Pessoa já cadastrada');

    const result = await this.userModel.create(user);
    return result;
  };

  public update = async (id: number, user: IUser) => {
    const userExist = await this.userModel.getById(id);

    if (!userExist) throw new HttpException('NotFoundError', 'Pessoa não existe');

    const result = await this.userModel.update(id, user);
    return result;
  };

  public remove = async (id:number) => {
    const result = await this.userModel.remove(id);

    if (!result) throw new HttpException('NotFoundError', 'Pessoa não existe');

    return result;
  };
}

export default UserService;
