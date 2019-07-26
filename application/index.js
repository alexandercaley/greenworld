const express = require('express')
const app = express()
const aboutus = require('./api/aboutus.js');
const postings = require('./api/postings.js');
const userauth = require('./api/userauth.js');
const path = require('path');

app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api/postings', postings);

// hitting this route will bring us to aboutus page
app.use('/aboutus', aboutus);

app.use('/userauth', aboutus);

// this will be the homepage.
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'))
