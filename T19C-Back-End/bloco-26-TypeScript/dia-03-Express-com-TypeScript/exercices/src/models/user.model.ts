/* eslint-disable no-console */
import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IUser';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IUser[]> => {
    const query = 'SELECT * FROM TypeScriptExpress.Users;';
    const [result] = await this.connection.execute(query);

    return result as IUser[];
  };

  public getById = async (id: number): Promise<IUser | null> => {
    const query = 'SELECT * FROM TypeScriptExpress.Users WHERE id=?';
    const values = [id];

    const [result] = await this.connection.execute(query, values);

    const [user] = result as IUser[];
    return user || null;
  };

  public getByEmail = async (email: string): Promise<IUser | null> => {
    const query = 'SELECT * FROM Users WHERE email = ?';
    const values = [email];

    const [data] = await this.connection.execute(query, values);
    const [user] = data as IUser[];

    return user || null;
  };

  public create = async (user: IUser): Promise<IUser> => {
    const { name, email, password } = user;
    const query = 'INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES(?, ?, ?)';
    const values = [name, email, password];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const newUser: IUser = {
      id, name, email, password,
    };
    return newUser;
  };

  public update = async (id: number, user: IUser): Promise<IUser> => {
    const { name, email, password } = user;

    const query = 'UPDATE TypeScriptExpress.Users SET name=?, email=?, password=? WHERE id=?';
    const values = [name, email, password, id];

    await this.connection.execute(query, values);

    const editedUser: IUser = {
      id, name, email, password,
    };

    return editedUser;
  };

  public remove = async (id:number): Promise<IUser | null> => {
    const userToBeDeleted = await this.getById(id);

    if (!userToBeDeleted) return null;

    const query = 'DELETE FROM TypeScriptExpress.Users WHERE id=?';
    const values = [id];

    await this.connection.execute(query, values);

    return userToBeDeleted;
  };
}

export default UserModel;
