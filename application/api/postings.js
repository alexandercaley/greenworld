const mysql = require("mysql");
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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
    var {id, location, postType, postStatus, picture} = req.body;
    console.log(id, postType, postStatus, picture)

    let query = "INSERT INTO postings (location, postType, postStatus, picture) VALUES (?,?,?,?)"

    connection.query(query, [location, postType, postStatus, picture],
        function (err, result) {
            if (err) {
                console.log(err);
                res.send('Error');
            }
            else {
                res.send('Success');
            }
        });
});

module.exports = router;