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

  public getById = async (id: number) => {
    const result = await this.postModel.getById(id);
    if (!result) throw new HttpException('NotFoundError', 'Publicação não encontrada');
    return result;
  };

  public create = async (post: IPost) => {
    const result = await this.postModel.create(post);

    return result;
  };

  public update = async (id: number, post: IPost) => {
    const postExist = await this.getById(id);

    if (!postExist) throw new HttpException('NotFoundError', 'Publicação não existe');

    const result = await this.postModel.update(id, post);

    return result;
  };

  public remove = async (id: number) => {
    const result = await this.postModel.remove(id);

    if (!result) throw new HttpException('NotFoundError', 'Publicação não existe');

    return result;
  };
}

export default PostService;
