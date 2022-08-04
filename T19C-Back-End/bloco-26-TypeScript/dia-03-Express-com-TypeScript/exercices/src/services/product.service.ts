import ProductModel from '../models/product.model';
import connection from '../utils/connection';
import IPost from '../interfaces/IPost';
import HttpException from '../validations/HttpException';

class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public getAll = async () => {
    const result = await this.productModel.getAll();
    return result;
  };

  public getById = async (id: number) => {
    const result = await this.productModel.getById(id);

    return result;
  };
}

export default ProductService;
