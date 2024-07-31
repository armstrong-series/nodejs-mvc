import { Router } from 'express';
import authRoute from './auth/authRoute';
import collectionRoute from './collection/collectionRoute';

const router = Router();

router.use('/users', authRoute);
router.use('/collection', collectionRoute);

export default router;



