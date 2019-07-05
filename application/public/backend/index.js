const express = require('express');
const axios = require('axios');       //for http requests
var mysql = require("mysql");

const app = express();

const port = 4000;

//route for accounts
app.get('/api/accounts', (req, res) => {
  const accounts = [
    {id: 1, accountname: 'account1', password: 'password1', usertype: 'admin'},
    {id: 2, accountname: 'account2', password: 'password2', usertype: 'user'},
    {id: 3, accountname: '', password: '', usertype: 'guest'}
  ]
  console.log("\"/api/accounts\" route success!");

  res.send(accounts);
});

app.listen(port, () => console.log(`Server started on port ${port}!`));
