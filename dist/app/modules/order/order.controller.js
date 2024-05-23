"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_alldata_1 = require("./order.alldata");
// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const { order: orderData } = req.body;
//     const newOrder = await orderaProduct.createaOrder(orderData);
//     res.status(200).json({
//       success: true,
//       message: 'Order created successfully!',
//       data: newOrder,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: orderData } = req.body;
        const newOrder = yield order_alldata_1.orderaProduct.createaOrder(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: newOrder,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = yield order_alldata_1.orderaProduct.getallorderstFromDataBase();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: newOrder,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSpecificOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const orders = yield order_alldata_1.orderaProduct.getAOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: orders,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.OrderController = {
    createOrder,
    getAllOrders,
    getSpecificOrdersByEmail,
};
