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
const getallaSingleProductFromDataBase = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};
const updateaproductinDatabase = async (_id: string, productData: any) => {
  return await ProductModel.findByIdAndUpdate(_id, productData, { new: true });
};

const deleteaProductFromDataBase = async (_id: string) => {
  const result = await ProductModel.findByIdAndDelete({ _id });
  return result;
};

const searchASpecificProduct = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  return await ProductModel.find({ name: { $regex: regex } });
};

export const ProductDatas = {
  createProductForDB,
  getallproductFromDataBase,
  getallaSingleProductFromDataBase,
  updateaproductinDatabase,
  deleteaProductFromDataBase,
  searchASpecificProduct,
};
