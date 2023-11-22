const express = require('express');
const router = express.Router();
const fs = require('fs');
// variables
//const dataPath = require('../data/data.json');
const dataPath = require('../data/data.json')

 // Get all users
router.get("/users", (req, res) => {
    fs.readFile(typeof dataPath, "utf8", (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});

// Create user
router.post("/create", (req, res) => {
    let person = fs.readFileSync(dataPath,"utf-8");
    let user = JSON.parse(person);
    user.person.push(user);
    const write = fs.writeFileSync(dataPath, JSON.stringify(user),"utf-8");
    console.log(write);
});

// Delete user 
router.delete("/delete", (req, res) => {
    
})

module.exports = router