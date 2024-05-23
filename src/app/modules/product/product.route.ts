import express from 'express';
import { ProductContollers } from './product.controller';

const router = express.Router();

router.post('/', ProductContollers.createProduct);
router.get('/', ProductContollers.getallProducts);
router.get('/:productId', ProductContollers.getallasingleProduct);
router.put('/:productId', ProductContollers.updateaProduct);
router.delete('/:productId', ProductContollers.deleaProduct);
router.get('/', ProductContollers.searchAItem)







export const ProductRoutes = router;
