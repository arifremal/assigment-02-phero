import { Request, Response } from "express";
import { ProductDatas } from "./product.alldata";

const createProduct = async (req:Request,res:Response)=>{

    try{
        const {product : productData } = req.body;
    const result = await ProductDatas.createProductForDB(productData)
    res.status(200).json({
        success:true,
        message:'Product created successfully!',
        data:result
    })
    } catch(err){
        console.log(err)
    }

}

export const ProductContollers ={
    createProduct


}