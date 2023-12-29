const Product=require(".../models/Product");

exports.DeleteProductData=async(req,res)=>{
    try{
        const {id}=req.body;
        const product=await Product.findByIdAndUpdate(id,{isDeleted:true})
        res.status(200).json({
            message:"Deleted Successfully"
        })
    }
    catch(err){
        console.log(err);
    }
}
