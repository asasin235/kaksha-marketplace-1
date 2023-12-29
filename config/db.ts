import mongoose from 'mongoose';

export const connDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database connected : ${conn.connection.host}`);
    } catch(err){
        console.log(err);
        process.exit(1);
    };
};