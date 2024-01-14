// category.model.ts

import mongoose, { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
    categoryId: number;
    categoryName: string;
}

const categorySchema = new Schema<ICategory>(
    {
        categoryId: {
            type: Number,
            unique: true,
        },
        categoryName: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Category = model<ICategory>("Category", categorySchema);
