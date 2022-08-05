/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import HTTP_STATUS from '../enums/HttpStatus';
import IProduct from '../interfaces/IProduct';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (__req: Request, res: Response) => {
    const result = await this.productService.getAll();
    return res.status(HTTP_STATUS.OK).json(result);
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const result = await this.productService.getById(Number(id));
      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body as IProduct;

      const result = await this.productService.create(product);

      return res.status(HTTP_STATUS.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const product = req.body as IProduct;

      const result = await this.productService.update(Number(id), product);

      return res.status(HTTP_STATUS.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  };

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.productService.remove(Number(id));

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
