
const express = require('express');
const router=express.Router();

const {getHistory} =require("../controller/History");

router.get('/getAllHistory', getHistory);

module.exports=router;