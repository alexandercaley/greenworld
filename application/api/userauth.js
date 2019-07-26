const mysql = require("mysql");
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//this loads the .env file in
//we need this for secret information that we don't want on our github
require("dotenv").config();

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
//   const queryCheck = "SELECT * FROM users WHERE username = ? AND email = ?";
  const queryCheck = "SELECT * FROM users WHERE username = ? AND email = ?";
  connection.query(queryCheck, [req.body.username, req.body.email], function(
    error,
    result
  ) {
    if (result.length != 0)
      return res.status(404).json({ error: "user already exists" });

    if (!req.body.password)
      return res.status(401).json({ error: "you need a password" });

    if (req.body.password.length <= 2)
      return res
        .status(401)
        .json({ error: "password length must be greater than 5" });

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        // let queryInsert =
        //   "INSERT INTO users (username, email, password, firstname, lastname) VALUES (?,?,?,'x','x')";
        let queryInsert =
        "INSERT INTO users (username, password, firstname, lastname) VALUES (?,?,?,'x','x')";

        let payload = {
          isLoggedIn: true,
          _id: result._id,
          username: result.username,
        //   email: result.email,
          firstname: result.firstname,
          lastname: result.lastname,
          create_date: result.create_date
        };

        let token = jwt.sign(payload, secretKey, {
          expiresIn: "4h"
        });

        connection.query(
          queryInsert,
          [req.body.username, req.body.email, hash],
          function(error, user) {
            if (error) {
              res.send(error);
            } else {
              res.json({
                message: "successfully signed up",
                token: token,
                bool: true,
                username: req.body.username,
                email: req.body.email
              });
            }
          }
        );
      });
    });
  });
});
