import { Product } from "../../models/products";

export const ShowAllProduct=async(req,res)=>{
    try{
        const {categoryName}=req.body;
        const category=await Product.findOne({category:`${categoryName}/`});
        const categoryId=category["categoryId"];
        const response=await Product.find({categoryId:categoryId});

        res.status(200).json({
            message:"Finded Successfully",
            data:response
        })
    }
    catch(err){
        console.log(err);
    }
}