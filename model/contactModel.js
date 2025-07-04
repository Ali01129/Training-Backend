const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user id is required"]
    },
    name:{
        type:String,
        required:[true,"Please add contact name"]
    },
    email:{
        type:String,
        required:[true,"Please add contact email address"]
    },
    phone:{
        type:String,
        required:[true,"Please add contact Phone number"]
    }
},
{
    timestamps:true,
});

module.exports = mongoose.model('Contact',contactSchema);