import { Router } from 'express';
import PostController from '../controllers/Post.controller';

const router = Router();

const postController = new PostController();

router.get('/', postController.getAll);

export default router;
