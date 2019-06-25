const express = require('express')
const app = express()
var path = require("path");

app.use(express.static('public'))

app.get('/austin', function(req, res) {
    console.log("hi")
    // res.render("./austin");
    res.sendFile(path.join(__dirname+'/public/austin.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'))

// const path = require('path');
// const app = express();

// // express is not good for production static files, use cdn, or dedicated file server like ngnix, appache
// app.use(express.static(path.join(__dirname, '..', 'build')));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });