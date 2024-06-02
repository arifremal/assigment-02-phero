import { Request, Response } from 'express';
import { ProductDatas } from './product.alldata';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductDatas.createProductForDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
// const createProduct = async (req: Request, res: Response) => {
//   try {
//     const { product: productData } = req.body;
//     const result = await ProductDatas.createProductForDB(productData);
//     res.status(200).json({
//       success: true,
//       message: 'Product created successfully!',
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

const getallProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductDatas.getallproductFromDataBase();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getallasingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result =
      await ProductDatas.getallaSingleProductFromDataBase(productId);
    res.status(200).json({
      success: true,
      message: 'A single product fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateaProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const result = await ProductDatas.updateaproductinDatabase(
      productId,
      productData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleaProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductDatas.deleteaProductFromDataBase(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const searchAItem = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        message: 'Search term is required',
      });
    }

    const result = await ProductDatas.searchASpecificProduct(
      searchTerm as string,
    );
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductContollers = {
  createProduct,
  getallProducts,
  getallasingleProduct,
  updateaProduct,
  deleaProduct,
  searchAItem,
};
