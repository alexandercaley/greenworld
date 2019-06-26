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
    res.sendFile(path.join(__dirname+'/public/aboutMe/gerry.html'));
});

app.get('/jesus', function(req, res) {
	res.sendFile(path.join(__dirname+'/public/aboutMe/jesus.html'))
})

app.get('/audrey', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/aboutMe/audrey.html'))
});

app.get('/alexander', function(req, res) {
	res.sendFile(path.join(__dirname+'/public/aboutMe/alexander.html'))
})

app.listen(3000, () => console.log('Server running on port 3000'))
