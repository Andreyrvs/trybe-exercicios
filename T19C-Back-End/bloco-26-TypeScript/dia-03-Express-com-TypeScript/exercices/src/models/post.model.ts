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

  public getById = async (id: number): Promise<IPost | null> => {
    const query = `SELECT * FROM ${databasePosts} WHERE id=?`;
    const values = [id];

    const [result] = await this.connection.execute(query, values);
    const [user] = result as IPost[];
    return user || null;
  };

  public create = async (post: IPost): Promise<IPost | null> => {
    const {
      title, author, category, publicationDate,
    } = post;
    const query = `INSERT INTO ${databasePosts}
    (title, author, category, publicationDate )
    VALUES (?, ?, ?, ?)
    `;
    const values = [title, author, category, publicationDate];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const newPost: IPost = {
      id, title, author, category, publicationDate,
    };

    return newPost;
  };

  public update = async (id: number, post:IPost): Promise<IPost | null> => {
    const {
      title, author, category, publicationDate,
    } = post;
    const query = `UPDATE ${databasePosts} 
    SET title=?, author=?, category=?, publicationDate=? WHERE id=?`;
    const values = [title, author, category, publicationDate, id];

    await this.connection.execute(query, values);

    const editedPost: IPost = {
      id, title, author, category, publicationDate,
    };
    return editedPost;
  };

  public remove = async (id: number): Promise<IPost | null> => {
    const postToBeDeleted = await this.getById(id);

    if (!postToBeDeleted) return null;

    const query = `DELETE FROM ${databasePosts} WHERE id=?`;
    const values = [id];

    await this.connection.execute(query, values);

    return postToBeDeleted;
  };
}

export default PostModel;
