const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//this loads the .env file in
//we need this for secret information that we don't want on our github


let connection;
if (!connection) {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "VerticalPrototype"
  });

  connection.connect(err => {
    if (!err) console.log("Connected to the MySQL server!");
    else
      console.log(
        "Connection failed \n Error: " + JSON.stringify(err, undefined, 2)
      );
  });
}

router.post("/register", function(req, res) {
  console.log("hi");
  console.log(req.body);
  let { username, email, password } = req.body;
  console.log(username);
  //   const queryCheck = "SELECT * FROM users WHERE username = ? AND email = ?";
  const queryCheck = "SELECT * FROM users WHERE username = ? ";
  connection.query(queryCheck, [username], function(
    error,
    result
  ) {
    if (error || result == undefined) {
      console.log('error')
      return res.status(405).json({ error: "ERR_INSERT_UNDEFINED" });;
    }
    
    console.log("line 47");
    if ( result.length != 0)
      return res.status(404).json({ error: "ERR_USER_ALREADY_EXISTS" });
    console.log("line 49");
    if (!req.body.password)
      return res.status(401).json({ error: "ERR_NO_PASSWORD" });
    console.log("line 52");
    if (password.length <= 2 && password)
      return res
        .status(401)
        .json({ error: "password length must be greater than 5" });
    console.log("line 57");
    bcrypt.genSalt(10, function(err, salt) {
      if(err) console.log(err);
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        console.log("line 63");
        // let queryInsert =
        //   "INSERT INTO users (username, email, password, firstname, lastname) VALUES (?,?,?,'x','x')";
        let queryInsert =
          "INSERT INTO users (username, password, firstname, lastname) VALUES (?,?,?,?)";

        let payload = {
          isLoggedIn: true,
          _id: result._id,
          username: result.username,
          //   email: result.email,
          firstname: result.firstname,
          lastname: result.lastname,
          create_date: result.create_date
        };
        console.log("78")
        let token = jwt.sign(payload, secretKey, {
          expiresIn: "4h"
        });
        console.log("82")
        connection.query(
          queryInsert,
          [req.body.username, hash, req.body.firstname, req.body.lastname],
          function(error, user) {
            if (error) {
              console.log("89")
              res.send(error);
            } else {
              res.json({
                message: "REGISTER_SUCCESS",
                token: token,
                bool: true,
                username: req.body.username,
                // email: req.body.email
              });
            }
          }
        );
      });
    });
  });
});

module.exports = router;
