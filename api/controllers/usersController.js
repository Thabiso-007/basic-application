const fs = require('fs');

//const dataPath = require('../data/data.json')

const users = {
    getAllUsers: async (req, res) => {
        await fs.readFile('../data/data.json', "utf8", (err, data) => {
            if (err) {
                throw err;
            }
    
            res.send(JSON.parse(data));
        });
    },

    getAUser: async (req, res) => {},    

    postAUser: async (req, res) => {
        let person = fs.readFileSync('../data/data.json',"utf-8");
        let user = JSON.parse(person);
        user.person.push(user);
        await fs.writeFileSync('../data/data.json', JSON.stringify(user),"utf-8");
    },

    updateUser: async (req, res) => {},

    deleteAUser: async (req, res) => {}
}

module.exports = {  users}