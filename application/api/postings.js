const mysql = require("mysql");
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

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

router.post('/', function (req, res) {
    console.log("POST!!!!")
    var jsondata = req.body;
    var values = [];

    for (var i = 0; i < jsondata.length; i++) {
        values.push([jsondata[i].id, jsondata[i].location, jsondata[i].postType, jsondata[i].postStatus, jsondata[i].picture]);
    }

    connection.query('INSERT INTO members (id, location, postType, postStatus, picture) VALUES ?', [values],
        function (err, result) {
            if (err) {
                res.send('Error');
            }
            else {
                res.send('Success');
            }
        });
});

module.exports = router;
