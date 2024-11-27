
const fs = require('fs').promises;
const filePath = './database.json';
const {readData, writeData} = require('../utils/file');

//function to create user
async function createUser(req, res){
    try {
       
      //read file contents  
      const data = await readData();
      //check length on users object and minus 1 
      const lastUser = data.users[data.users.length - 1];
      //check if lastUser exists.  If not, default to 1
      const nextId = lastUser ? lastUser.id + 1 : 1;

      //create a new user object to save in database.json
      const newUser = {
        id: nextId,
        username: req.body.username,
        first_name: req.body.first_name,
        email: req.body.email,
      }

      //push adds to users object
      data.users.push(newUser);

      //writes the changes to the file
      await writeData(data);

      res.status(200).json('User added successfully!');

    } catch (error) {

      res.status(500).json('Internal Server Error.');
      console.log(error);
    }
} 

//function to edit user
async function editUser(req, res){
    try {
        
    } catch (error) {
        
    }
} 

//function to delete user
async function deleteUser(req, res){
    try {
        
    } catch (error) {
        
    }
} 


module.exports = {
    createUser,
    editUser,
    deleteUser,
}
