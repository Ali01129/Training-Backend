//@desc get all contacts by id
//@route GET /api/contacts/:id
//@access public

const getContact=(req,res)=>{
    const {name,email,password}=req.body;
    if(!name||!email||!password){
        res.status(404);
        throw new Error("all fields are required")
    }
    res.json({message:`what the hell is this and id is ${req.params.id}`,name:name,email:email,password:password});

}

//@desc get all contacts
//@route GET /api/contacts
//@access public


const getContact2=(req,res)=>{
    res.status(200).json({name:"Ali"});
}

module.exports = {getContact,getContact2}