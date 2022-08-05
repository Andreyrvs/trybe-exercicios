import { Router } from 'express';
import PostController from '../controllers/post.controller';

const router = Router();

const postController = new PostController();

router.get('/', postController.getAll);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.remove);

export default router;
