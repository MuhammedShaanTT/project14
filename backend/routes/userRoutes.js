const express = require('express');
const router = express.Router();
const { getAllUsers, addUser } = require('../controllers/userController');

// GET all users
router.get('/', getAllUsers);

// POST new user
router.post('/', addUser);

module.exports = router;
