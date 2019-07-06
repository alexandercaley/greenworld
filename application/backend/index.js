const express = require('express');
const axios = require('axios');       //for http requests
var mysql = require("mysql");

const app = express();

const port = 4000;

//Will need this code DO NOT DELETE

// //Used to process post info
// var bodyParser = require('body-parser');
//
// //x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
//
// //parse application/json
// app.use(bodyParser.json());

//Initializes the connection variable to sync with a MySQL database
//Currently local database
var connection = mysql.createConnection({
	host: "localhost",

	//Open port for DataBase on local machine
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "password",

  //DB
	database: "environmentaldb"
});

//route for accounts
app.get('/api/accounts', (req, res) => {
  console.log("\"/api/accounts\" route success!");
  //test data
  const accounts = [
    {id: 1, accountname: 'account1', password: 'password1', usertype: 'admin'},
    {id: 2, accountname: 'account2', password: 'password2', usertype: 'user'},
    {id: 3, accountname: '', password: '', usertype: 'guest'}
  ]

  res.send(accounts);
});

//post account data to database- IN PROGRESS
app.post('/api/accounts', (req, res) => {

});

app.listen(port, () => console.log(`Server started on port ${port}!`));
