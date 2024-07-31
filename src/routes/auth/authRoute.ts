import express from 'express';
import AuthController from '../../controllers/Auth/AuthController';
import AuthService from '../../services/Auth/AuthService';

const router = express.Router();
const authController = new AuthController(AuthService);

router.post('/', authController.create.bind(authController));
router.get('/:id', authController.getUserById.bind(authController));
router.put('/:id', authController.update.bind(authController));
router.delete('/:id', authController.delete.bind(authController));

export default router;
