const express=require('express');
const app = express();
const router=express.Router()
const mongoose = require('mongoose') ;
const port = 3000;
// TODO: Connect DB
const url="url with username pass" ;
mongoose.connect(url).then((res)=>console.log("db connected"));
  

router.get('/',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*
// Path: server.ts
read_user
kaksha-live
 */
