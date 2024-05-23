import express from 'express';
import { OrderController } from './order.controller';
const router = express.Router();
router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);
router.get('/', OrderController.getSpecificOrdersByEmail);

export const OrderRoutes = router;
