const express = require('express');
const ejs = require('ejs');
const userRoute = require('./routes/users.js');
require('dotenv').config();

//app objects is a new instance of express
const app = express();
const PORT = process.env.PORT || 8080;

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//middleware to use static files
app.use(express.static('public'));

//express router file
app.use(userRoute);

//starting the server
app.listen(PORT, ()=>{

    console.log(`Connected to port ${PORT}`);

});