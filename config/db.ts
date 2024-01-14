import mongoose from 'mongoose';

export const connDB = async() => {
    try{
        const uri = "mongodb+srv://crud_user_2:kaksha_live@marketplace.133lxu1.mongodb.net/?retryWrites=true&w=majority";

        const conn = await mongoose.connect(uri);

        console.log(`Database connected : ${conn.connection.host}`);
    } catch(err){
        console.log(err);
        process.exit(1);
    };
};