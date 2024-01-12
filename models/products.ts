
import mongoose, { Schema, model, Document } from "mongoose";

const AutoIncrement = require('mongoose-sequence')(mongoose);

export interface IProduct {
    productId: number;
    productName: string;
    price: number;
    category: ICategory; // Reference to Category interface
    metadata: object;
    classes: object;
    isDeleted: boolean;
    organization: string;
    description: string;
    imageUrl: string; // Image URL of string type
    otherImageUrl: {
        url: string;
        description?: string;
    }; // Image URL of object type with optional description
}

export interface ICategory {
    categoryId: number;
    categoryName: string;
}

const categorySchema = new Schema<ICategory>(
    {
        categoryId: {
            type: Number,
            unique: true
        },
        categoryName: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

categorySchema.plugin(AutoIncrement, { inc_field: 'categoryId' });

export const Category = model<ICategory>("Category", categorySchema);

const productSchema = new Schema<IProduct>(
    {
        productId: {
            type: Number,
            unique: true
        },
        productName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        classes: {
            type: Object,
            required: false
        },
        metadata: {
            type: Object,
            required: false
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
        imageUrl: {
            type: String, // Image URL of string type
            required: true,
        },
        otherImageUrl: {
            url: {
                type: String, // Image URL of object type
                required: true,
            },
            description: {
                type: String, // Optional description for the image URL
                required: false,
            },
        },
    },
    {
        timestamps: true,
    }
);

productSchema.plugin(AutoIncrement, { inc_field: 'productId' });

export const Product = model<IProduct>("Product", productSchema);
