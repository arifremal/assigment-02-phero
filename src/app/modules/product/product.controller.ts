import { Request, Response } from 'express';
import { ProductDatas } from './product.alldata';


const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
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

const getallProducts = async(req:Request,res:Response)=>{
    try{

        const result = await ProductDatas.getallproductFromDataBase()
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
          });





    }catch(err){
        console.log(err)
    }
}
const getallasingleProduct = async(req:Request,res:Response)=>{
    try{
        const {productId}= req.params

        const result = await ProductDatas.getallaSingleProductFromDataBase(productId)
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
          });





    }catch(err){
        console.log(err)
    }
}






export const ProductContollers = {
  createProduct,getallProducts,getallasingleProduct
};
