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
}


router.get('/', function (req, res) {
    connection.query("SELECT * FROM VerticalPrototype.postings", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;