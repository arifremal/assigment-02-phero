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
exports.ProductDatas = void 0;
const product_model_1 = require("../product.model");
const createProductForDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
const getallproductFromDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const getallaSingleProductFromDataBase = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id });
    return result;
});
const updateaproductinDatabase = (_id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.ProductModel.findByIdAndUpdate(_id, productData, { new: true });
});
const deleteaProductFromDataBase = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndDelete({ _id });
    return result;
});
const searchASpecificProduct = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, 'i');
    return yield product_model_1.ProductModel.find({ name: { $regex: regex } });
});
exports.ProductDatas = {
    createProductForDB,
    getallproductFromDataBase,
    getallaSingleProductFromDataBase,
    updateaproductinDatabase,
    deleteaProductFromDataBase,
    searchASpecificProduct,
};
