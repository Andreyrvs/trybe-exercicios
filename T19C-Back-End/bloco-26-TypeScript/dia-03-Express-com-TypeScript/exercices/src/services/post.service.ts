import PostModel from '../models/post.model';
import connection from '../utils/connection';
import IPost from '../interfaces/IPost';
import HttpException from '../validations/HttpException';

class PostService {
  public postModel: PostModel;

  constructor() {
    this.postModel = new PostModel(connection);
  }

  public getAll = async () => {
    const result = await this.postModel.getAll();

    return result;
  };
}

export default PostService;
