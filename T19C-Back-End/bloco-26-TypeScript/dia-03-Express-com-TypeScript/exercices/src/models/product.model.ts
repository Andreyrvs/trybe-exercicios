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

  public create = async (product: IProduct): Promise<IProduct | null> => {
    const {
      name, brand, price, manufacturing_date, expiration_date,
    } = product;

    const query = `INSERT INTO ${databaseProduct}
      (name, brand, price, manufacturing_date, expiration_date) VALUES (?, ?, ?, ?, ?)`;
    const values = [name, brand, price, manufacturing_date, expiration_date];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const newProduct: IProduct = {
      id, name, brand, price, manufacturing_date, expiration_date,
    };

    return newProduct || null;
  };

  public update = async (id:number, product: IProduct): Promise<IProduct | null> => {
    const {
      name, brand, price, manufacturing_date, expiration_date,
    } = product;

    const query = `UPDATE ${databaseProduct}
      SET name=?, brand=?, price=?, manufacturing_date=?, expiration_date=? WHERE id=?`;

    const values = [name, brand, price, manufacturing_date, expiration_date, id];

    await this.connection.execute<ResultSetHeader>(query, values);
    const editedProduct: IProduct = {
      id, name, brand, price, manufacturing_date, expiration_date,
    };

    return editedProduct || null;
  };

  public remove = async (id: number): Promise<IProduct | null> => {
    const productToDelete = await this.getById(id);

    if (!productToDelete) return null;

    const query = `DELETE FROM ${databaseProduct} WHERE id=?`;
    const values = [id];

    await this.connection.execute(query, values);

    return productToDelete;
  };
}

export default ProductModel;
