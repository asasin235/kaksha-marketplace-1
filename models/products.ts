import mongoose, { Schema, model, connection } from "mongoose";

const AutoIncrement = require('mongoose-sequence')(mongoose);


export interface IProduct {
    productId: number;
    productName: string;
    price: number;
    category: string;
    metadata: object;
    classes:object;
    isDeleted: boolean;
}

const productSchema = new Schema<IProduct>(
    {
        productId: {
            type: Number,
            required: true,
            unique: true
        },
        productName: {
            type: String,
            required: true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        classes:{
            type:Object,
            required:false
        },
        metadata: {
            type: Object,
            required: false
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },

    }
);

productSchema.plugin(AutoIncrement, { inc_field: 'productId' });

export const Product = model("Product", productSchema);