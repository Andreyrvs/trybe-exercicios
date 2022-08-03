import UserModel from '../models/User.model';
import connection from '../utils/connection';
import IUser from '../interfaces/IUser';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default UserService;
