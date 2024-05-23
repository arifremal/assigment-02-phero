import { Request, Response } from 'express';
import { orderaProduct } from './order.alldata';


const createOrder = async (req: Request, res: Response) => {
    try {
        const {order: orderData } = req.body;
        const newOrder = await orderaProduct.createaOrder(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: newOrder
        });
    } catch (err) {
        console.log(err)
    }
};

const getAllOrders = async (req: Request, res: Response) => {
    try {
        
        const newOrder = await orderaProduct.getallorderstFromDataBase();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: newOrder
        });
    } catch (err) {
        console.log(err)
    }
};






export const OrderController ={
    createOrder,
    getAllOrders
}