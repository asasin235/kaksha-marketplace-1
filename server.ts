const express = require('express')
const app = express();
const router = express.Router();
const port = 3000;
const admin_routes = require("./routes/admin")

// TODO: Connect DB
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/admin",admin_routes);
/*
// Path: server.ts
read_user
kaksha-live
 */
