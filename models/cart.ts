import { Schema, model} from 'mongoose';

export interface ICartItem {
  productId: string;
  quantity: number;
  price: number;
  productName : string;
  productImage: string;
}

export interface ICart extends Document {
  user_id: string;
  data: ICartItem[];
}

const cartSchema = new Schema<ICart>(
  {
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
    data: {
      type: [
        {
          productId: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          productName: {   
            type: String,
            required: true,
          },
          productImage: {
            type: Number,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const Cart = model<ICart>('Cart', cartSchema);
