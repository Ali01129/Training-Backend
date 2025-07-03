const mongoose=require('mongoose');
const dotenv=require('dotenv');

const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected")
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;