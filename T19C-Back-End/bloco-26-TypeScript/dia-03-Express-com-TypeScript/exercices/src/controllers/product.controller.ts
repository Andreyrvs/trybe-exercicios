/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import HTTP_STATUS from '../enums/HttpStatus';
import IProduct from '../interfaces/IProduct';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const result = await this.productService.getAll();
    return res.status(HTTP_STATUS.OK).json(result);
  };
}

export default ProductController;
