const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv=require("dotenv").config();

connectDB();
const app=express();

const prot=process.env.PORT||5000;

//for getting data from client
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(prot,()=>{
    console.log(`Server running on http://localhost:${prot}`);
})