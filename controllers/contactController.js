const Contact = require('../model/contactModel');

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContact=async(req,res)=>{
    try{
        const contacts=await Contact.find();
        res.status(200).json(contacts);
    }
    catch(err){
        res.json({error:err,msg:"no contact available"});
    }
}

//@desc create a contact
//@route POST /api/contacts/
//@access public
const createContact=async(req,res)=>{
    try{
        const {name,email,phone}=req.body;
        if(!name||!email||!phone){
            res.status(400);
            throw new Error("All fields are required");
        }
        const contact=await Contact.create({
            name,
            email,
            phone
    })
        res.status(201).json({msg:"contact created sucessfully"});
    }
    catch(err){
        res.json({error:err,msg:"contect was not created"});
    }
}


module.exports = {getContact,createContact}