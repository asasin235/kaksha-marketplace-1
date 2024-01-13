// product.model.ts

import mongoose, { Schema, model, Document } from "mongoose";
import AutoIncrement from "mongoose-sequence";

import { ICategory } from "./category";

interface IOtherImageUrl {
    url: string;
    description?: string;
}

export interface IProduct extends Document {
    productId: number;
    productName: string;
    price: number;
    category: ICategory["_id"];
    imageUrl: string;
    otherImageUrl: IOtherImageUrl;
    metadata: object;
    classes: object;
    isDeleted: boolean;
    organization: string;
    description: string;
}

const productSchema = new Schema<IProduct>(
    {
        productId: {
            type: Number,
            unique: true,
        },
        productName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        otherImageUrl: {
            url: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: false,
            },
        },
        classes: {
            type: Object,
            required: false,
        },
        metadata: {
            type: Object,
            required: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        organization: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

productSchema.plugin(AutoIncrement, { inc_field: "productId" });

export const Product = model<IProduct>("Product", productSchema);
