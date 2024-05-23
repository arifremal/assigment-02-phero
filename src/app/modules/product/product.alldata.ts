import { ProductModel } from '../product.model';
import { Product } from './product.interface';

const createProductForDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getallproductFromDataBase = async () => {
  const result = await ProductModel.find();
  return result;
};
const getallaSingleProductFromDataBase = async (_id:string) => {
  const result = await ProductModel.findOne({_id});
  return result;
};

export const ProductDatas = {
  createProductForDB,
  getallproductFromDataBase,
  getallaSingleProductFromDataBase
};
