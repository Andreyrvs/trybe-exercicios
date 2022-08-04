/* eslint-disable no-console */
import { Pool, ResultSetHeader } from 'mysql2/promise';
import IPost from '../interfaces/IPost';

const databasePosts = 'TypeScriptExpress.Posts';
class PostModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IPost[]> => {
    const query = `SELECT * FROM ${databasePosts}`;
    const [result] = await this.connection.execute(query);

    return result as IPost[];
  };
}

export default PostModel;
