import { Counter } from "../models/main";

export const counter = async (id, count = 1) => {
    return Counter.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $inc: {
                count,
            },
        },
        {
            new: true,
            upsert: true,
        }
    );
};
