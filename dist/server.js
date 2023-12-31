"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const editProductdata_1 = __importDefault(require("./util/adminSideUtils/editProductdata"));
const app = express();
const router = express.Router();
const port = 3000;
// TODO: Connect DB
router.get('/', (req, res) => {
    res.send('Hello, world!');
});
router.post('/updateProduct', editProductdata_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
/*
// Path: server.ts
read_user
kaksha-live
 */ 
