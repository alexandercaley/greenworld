const express = require('express')
const app = express()
var path = require("path");
const aboutus = require('./api/aboutus.js');

app.use(express.static(path.join(__dirname, '/client/build')));

// hitting this route will bring us to aboutus page
app.use('/aboutus', aboutus);

// this will be the homepage.
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'))
