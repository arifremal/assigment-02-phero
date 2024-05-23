"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const VariantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const InventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
const productSchema = new mongoose_1.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String },
    description: { type: String },
    category: { type: String },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true },
    isDeleted: { type: Boolean, default: false },
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
