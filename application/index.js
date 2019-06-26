const express = require('express')
const app = express()
var path = require("path");

app.use(express.static('public'))

app.get('/austin', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/aboutMe/austin.html'));
});

app.get('/han', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/aboutMe/han.html'));
});

app.get('/Gerry', function(req, res) {
    res.sendFile(path.join(__dirname+'/assets/images/gerry.jpg '));
});
app.listen(3000, () => console.log('Server running on port 3000'))