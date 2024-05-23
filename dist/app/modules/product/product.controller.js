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
exports.ProductContollers = void 0;
const product_alldata_1 = require("./product.alldata");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: productData } = req.body;
        const result = yield product_alldata_1.ProductDatas.createProductForDB(productData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getallProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_alldata_1.ProductDatas.getallproductFromDataBase();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getallasingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_alldata_1.ProductDatas.getallaSingleProductFromDataBase(productId);
        res.status(200).json({
            success: true,
            message: 'A single product fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const updateaProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const result = yield product_alldata_1.ProductDatas.updateaproductinDatabase(productId, productData);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleaProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_alldata_1.ProductDatas.deleteaProductFromDataBase(productId);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const searchAItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        if (!searchTerm) {
            return res.status(400).json({
                success: false,
                message: 'Search term is required',
            });
        }
        const result = yield product_alldata_1.ProductDatas.searchASpecificProduct(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.ProductContollers = {
    createProduct,
    getallProducts,
    getallasingleProduct,
    updateaProduct,
    deleaProduct,
    searchAItem,
};
