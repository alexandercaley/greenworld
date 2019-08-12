const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

let connection;
if (!connection) {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "csc648_team6"
  });

  connection.connect(err => {
    if (!err) console.log("Connected to the MySQL server!");
    else
      console.log(
        "Connection failed \n Error: " + JSON.stringify(err, undefined, 2)
      );
  });
}

router.get("/", function(req, res) {
  connection.query("SELECT * FROM postings", function(err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});


router.post("/", function(req, res) {
  console.log("POST!!!!");
  var {
    users_id,
    street,
    city,
    state,
    zipcode,
    description,
    picture,
    status,
    date_witnessed,
    topic,
    long,
    lat
  } = req.body;
  console.log(
    users_id,
    street,
    city,
    state,
    zipcode,
    description,
    picture,
    status,
    date_witnessed,
    topic,
    long,
    lat
  );

  // let query =
  //   "INSERT INTO postings (street, city, state, zipcode, description, picture, status, topic, long, lat) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

  // connection.query(
  //   query,
  //   [
  //     users_id,
  //     street,
  //     city,
  //     state,
  //     zipcode,
  //     description,
  //     picture,
  //     status,
  //     date_witnessed,
  //     topic,
  //     long,
  //     lat
  //   ],
  //   function(err, result) {
  //     if (err) {
  //       console.log(err);
  //       res.send("Error");
  //     } else {
  //       console.log("success");
  //       res.send("Success");
  //     }
  //   }
  // );
});

module.exports = router;
