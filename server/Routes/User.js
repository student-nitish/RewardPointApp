// routes/userRoutes.js
const express = require('express');
const { getAllUsers,createUser,claimPointsByUser } = require('../controller/User');

const router = express.Router();

router.get('/getUserDetails', getAllUsers);
router.post('/createUser', createUser);
router.post('/claim', claimPointsByUser);
module.exports = router;
