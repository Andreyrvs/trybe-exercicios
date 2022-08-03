/* eslint-disable no-console */
import {
  Pool,
  ResultSetHeader,
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

  public async create(user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES(?, ?, ?)';
    const values = [name, email, password];

    const result = await this.connection.execute<ResultSetHeader>(query, values);

    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...user };
  }
}

export default UserModel;
