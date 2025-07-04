const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add username"]
    },
    email:{
        type:String,
        required:[true,"Please add email"],
        unique:[true,"User with this email already present"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
},{
    timestamp:true,
})

module.exports=mongoose.model("user",userSchema);