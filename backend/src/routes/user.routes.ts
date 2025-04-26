import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { asyncHandler } from '../utils/asyncHandler';

const router: Router = Router();

router.get('/', asyncHandler(UserController.getUsers));

router.get('/:idUser', asyncHandler(UserController.getUserById));

router.post('/', asyncHandler(UserController.createUser));

router.put('/:idUser', asyncHandler(UserController.updateUser));

router.delete('/:idUser', asyncHandler(UserController.deleteUser));

export default router;
