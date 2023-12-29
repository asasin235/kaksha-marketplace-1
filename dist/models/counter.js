"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const mongoose_1 = require("mongoose");
const counterSchema = new mongoose_1.Schema({
    _id: {
        type: String,
    },
    count: {
        type: Number,
        default: 1,
    },
}, { _id: false });
exports.Counter = (0, mongoose_1.model)("Counter", counterSchema);
