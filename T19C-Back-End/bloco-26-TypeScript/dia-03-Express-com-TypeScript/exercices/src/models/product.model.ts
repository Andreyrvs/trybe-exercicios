/* eslint-disable no-console */
import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

const databaseProduct = 'TypeScriptExpress.Products';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const query = `SELECT * FROM ${databaseProduct}`;
    const [result] = await this.connection.execute(query);

    return result as IProduct[];
  };

  public getById = async (id: number): Promise<IProduct | null> => {
    const query = `SELECT * FROM ${databaseProduct} WHERE id=?`;
    const values = [id];

    const [result] = await this.connection.execute(query, values);
    const [product] = result as IProduct[];
    return product || null;
  };
}

export default ProductModel;
