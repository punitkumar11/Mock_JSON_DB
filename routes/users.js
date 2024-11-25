const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

//parse incoming json to native js object
router.use(express.json());

//takes url encoded strings and decode them for use
router.use(express.urlencoded({extended: true}));

//define home routes
router.get('/home', (req,res) =>{
    res.render('home');

});
//define a route that adds a user
router.post("/users", userController.createUser);

//exports the router objects
module.exports = router;