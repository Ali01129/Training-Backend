const express=require("express");
const router=express.Router();
const {getContact,createContact,getContactbyID,updateContact,deleteContact} = require('../controllers/contactController');
const validateToken=require("../middleware/validateTokenHandler");

router.route('/').get(getContact);
router.post('/',validateToken,createContact);
router.route('/:id').get(getContactbyID).put(updateContact).delete(deleteContact);

module.exports=router;