/* eslint-disable no-console */
import {
  Pool,
  // ResultSetHeader
} from 'mysql2/promise';
import IUser from '../interfaces/IUser';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const query = 'SELECT * FROM TypeScriptExpress.Users;';
    const result = await this.connection.execute(query);

    const [rows] = result;
    console.log('🚀 ~ UserModel ~ getAll ~ rows', rows);
    return rows as IUser[];
  }
}

export default UserModel;
