const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Connecting to database
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

// Postings into database from post form
router.post("/", upload.single("imageFile"), function(req, res, next) {
  console.log("POST!!!!");
  console.log(req.file);
  console.log(req.body);
  let {
    latitude,
    longitude,
    street,
    city,
    zipcode,
    state,
    issueType,
    description,
    user_id
  } = req.body;
  let { imageFile } = req.file;
    let image = JSON.stringify(imageFile);
  let query =
    "INSERT INTO postings (user_id, latitude, longitude, street, city, zipcode, state, issueType, imageFile, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    query,
    [
      user_id,
      latitude,
      longitude,
      street,
      city,
      zipcode,
      state,
      zipcode,
      issueType,
      image,
      description
    ],
    function(err, result) {
      if (err) {
        console.log(err);
        res.send("Error");
      } else {
        console.log("success");
        res.send("SUCCESS");
      }
    }
  );
});

module.exports = router;
