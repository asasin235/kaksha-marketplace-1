const express = require('express')
const app = express();
const router = express.Router();
const port = 3000;
// TODO: Connect DB
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
// Path: server.ts
read_user
kaksha-live
 */