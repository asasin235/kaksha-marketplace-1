import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connDB } from "./config/db";
import AdminRouter from './routes/admin';
import UserRouter from './routes/user';

const app = express();
const port = 3000;

// TODO: Connect DB
connDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/admin", AdminRouter);
app.use("/api", UserRouter);
/*
// Path: server.ts
read_user
kaksha-live
 */
