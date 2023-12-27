import { Schema, model } from "mongoose";

export interface ICounter {
    _id: string;
    count: number;
}

const counterSchema = new Schema<ICounter>(
    {
        _id: {
            type: String,
        },
        count: {
            type: Number,
            default: 1,
        },
    },
    { _id: false }
);

export const Counter = model("Counter", counterSchema);
