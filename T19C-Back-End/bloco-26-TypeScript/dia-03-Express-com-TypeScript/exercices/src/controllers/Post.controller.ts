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
}

export default PostController;
