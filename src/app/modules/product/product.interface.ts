import { Schema, model, connect } from 'mongoose';

export type Inventory = {
  quantity: number;
  inStock: boolean;
};
export type Variants = {
  type: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  email: string;
  price: string;
  description: string;
  category: string;
  tags: string[];
  variants: Variants[];
  inventory: Inventory;
};
