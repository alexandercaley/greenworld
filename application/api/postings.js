const mysql = require("mysql");
const express = require('express');
const router = express.Router();

let connection;
if (!connection) {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'VerticalPrototype'
    });

    connection.connect((err) => {
      if (!err)
      console.log('Connected to the MySQL server!');
      else
      console.log('Connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
    });
}


router.get('/', function (req, res) {
    connection.query("SELECT * FROM VerticalPrototype.postings", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
