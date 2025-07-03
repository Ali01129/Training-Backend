const express=require("express");
const router=express.Router();
const {getContact,createContact} = require('../controllers/contactController');

router.route('/').get(getContact).post(createContact);

module.exports=router;