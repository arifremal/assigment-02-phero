import { Allorder, OrderModel } from "../order.model";



const createaOrder = async (orderProduct: Allorder ) => {
    const result = await OrderModel.create(orderProduct);
    return result;
  };
  const getallorderstFromDataBase = async () => {
    const result = await OrderModel.find();
    return result;
  };

  export const orderaProduct={
    createaOrder,
    getallorderstFromDataBase
  }