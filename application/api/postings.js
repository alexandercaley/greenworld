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
        database: 'csc648_team6'
    });

    connection.connect((err) => {
        if (!err)
            console.log('Connected to the MySQL server!');
        else
            console.log('Connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
    });
}

// var connection = mysql.createConnection({
// 	host: "13.56.149.124",

// 	// Your port; if not 3306
// 	port: 3306,

// 	// Your username
// 	user: "testuser",

// 	// Your password
// 	password: "team6",
// 	database: "csc648team6"
// });


// if (!connection) {
//     connection = mysql.createConnection({
//         host: '13.56.149.124',
//         user: 'root',
//         password: 'team6',
//         database: 'csc648team6'
//     });

//     connection.connect((err) => {
//         if (!err)
//             console.log('Connected to the MySQL server!');
//         else
//             console.log('Connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
//     });
// }

router.get('/', function (req, res) {
    connection.query("SELECT * FROM csc648_team6.postings", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});
// router.get('/', function (req, res) {
//     connection.query("SELECT * FROM csc648team6.postings", function (err, result, fields) {
//         if (err) throw err;
//         res.json(result);
//     });
// });

router.post('/', function (req, res) {
    console.log("POST!!!!")
    var {users_registration_id, address, description, picture, status, date_witnessed, topic} = req.body;
    console.log(users_registration_id, address, description, picture, status, date_witnessed, topic)

    let query = "INSERT INTO postings (users_id, street, city, state, zipcode, description, picture, status, date_witnessed, topic, long, lat) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"

    connection.query(query, [users_id, street, city, state, zipcode, description, picture, status, date_witnessed, topic, long, lat],
        function (err, result) {
            if (err) {
                console.log(err);
                res.send('Error');
            }
            else {
                console.log('success');
                res.send('Success');
            }
        });
});

module.exports = router;
