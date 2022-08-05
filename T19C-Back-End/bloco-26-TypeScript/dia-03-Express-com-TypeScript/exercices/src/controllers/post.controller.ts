/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import HTTP_STATUS from '../enums/HttpStatus';
import IPost from '../interfaces/IPost';
import PostService from '../services/post.service';

class PostController {
  constructor(private postService = new PostService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.postService.getAll();

    return res.status(HTTP_STATUS.OK).json(result);
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.postService.getById(Number(id));

      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = req.body as IPost;
      const result = await this.postService.create(post);

      return res.status(HTTP_STATUS.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const post = req.body as IPost;

      const result = await this.postService.update(Number(id), post);

      return res.status(HTTP_STATUS.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  };

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const result = await this.postService.remove(Number(id));
      return res.status(HTTP_STATUS.OK).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default PostController;
