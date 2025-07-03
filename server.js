const express=require("express");
const dotenv=require("dotenv").config();

const app=express();

const prot=process.env.PORT||5000;

app.listen(prot,()=>{
    console.log(`Server running on port ${prot}`);
})