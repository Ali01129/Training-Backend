const express=require("express");
const router=express.Router();
const {getContact,getContact2} = require('../controllers/contactController');

router.route('/:id').post(getContact);
router.route('/').get(getContact2);

module.exports=router;