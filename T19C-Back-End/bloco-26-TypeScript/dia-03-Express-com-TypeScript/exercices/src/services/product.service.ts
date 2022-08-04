import ProductModel from '../models/product.model';
import connection from '../utils/connection';
import HttpException from '../validations/HttpException';
import IProduct from '../interfaces/IProduct';

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

    if (!result) throw new HttpException('NotFoundError', 'Produto não encontrado');

    return result;
  };

  public create = async (product: IProduct) => {
    const result = await this.productModel.create(product);

    return result;
  };

  public update = async (id:number, product: IProduct) => {
    const productExist = await this.getById(id);

    if (!productExist) throw new HttpException('NotFoundError', 'Produto não existe');

    const result = await this.productModel.update(id, product);
    return result;
  };

  public remove = async (id: number) => {
    const result = await this.productModel.remove(id);

    if (!result) throw new HttpException('NotFoundError', 'Produto não existe');

    return result;
  };
}

export default ProductService;
