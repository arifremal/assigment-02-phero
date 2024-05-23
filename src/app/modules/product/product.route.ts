import express from 'express';
import { ProductContollers } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductContollers.createProduct);
router.get('/',ProductContollers.getallProducts)
router.get('/:productId',ProductContollers.getallasingleProduct)

export const ProductRoutes = router;
