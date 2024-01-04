import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connDB } from "./config/db";
import addProduct from "./util/adminSideUtils/addProduct";

const app = express();
const router = express.Router();
const port = 3000;

// TODO: Connect DB
connDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.post('/addProduct', addProduct);

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
// Path: server.ts
read_user
kaksha-live
 */