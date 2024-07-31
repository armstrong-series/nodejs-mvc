
import express from 'express';
import CollectionController from '../../controllers/MoMo/Collection/CollectionController';

const router = express.Router();

router.post('/invoice', CollectionController.createInvoice.bind(CollectionController));

export default router;
