import mongoose, { Schema, Document } from 'mongoose';

export interface Allorder extends Document {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

const AllOrderchema: Schema = new Schema({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number },
  quantity: { type: Number },
});

export const OrderModel = mongoose.model<Allorder>('order', AllOrderchema);
