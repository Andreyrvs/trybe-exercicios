import { Router } from 'express';
import UserController from '../controllers/User.controller';

const router = Router();

const userController = new UserController();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);

export default router;
