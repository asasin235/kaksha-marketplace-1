"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const db_1 = require("./config/db");
const addProduct_1 = __importDefault(require("./util/adminSideUtils/addProduct"));
const app = express();
const router = express.Router();
const port = 3000;
// TODO: Connect DB
(0, db_1.connDB)();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.get('/', (req, res) => {
    res.send('Hello, world!');
});
router.post('/addProduct', addProduct_1.default);
app.use(router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
/*
// Path: server.ts
read_user
kaksha-live
 */ 
