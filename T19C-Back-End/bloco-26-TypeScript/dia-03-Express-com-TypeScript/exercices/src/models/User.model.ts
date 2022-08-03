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
    return rows as IUser[];
  }

  public async getById(id: number): Promise<IUser[]> {
    const query = 'SELECT * FROM TypeScriptExpress.Users WHERE id=?';
    const values = [id];

    const result = await this.connection.execute(query, values);

    const [rows] = result;
    return rows as IUser[];
  }
}

export default UserModel;
