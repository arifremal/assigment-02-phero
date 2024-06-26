import { Schema, model } from 'mongoose';
import { Inventory, Product, Variants } from './product/product.interface';

const VariantSchema = new Schema<Variants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<Product>({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const ProductModel = model<Product>('Product', productSchema);
