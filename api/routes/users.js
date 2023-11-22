const express = require('express');
const router = express.Router();
const fs = require('fs');
// variables
//const dataPath = require('../data/data.json');
const dataPath = require('../data/data.json')

const { users } = require('../controllers/usersController')

 // Get all users
router.get("/users", users.getAllUsers);

// Get all users w
router.get("users/:id", users.getAUser);

// Create user
router.post("/create",users.postAUser);

// Update user
router.put("/:id", users.updateUser);

// Delete user 
router.delete("/:id" )

module.exports = router