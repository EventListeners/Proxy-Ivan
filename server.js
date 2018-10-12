require ('newrelic');
const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var compression = require('compression');

var server = express();
server.use(compression())
// server.use(bodyParser.json());
// server.use(express.urlencoded({extended: true}));

server.use(express.static(path.join(__dirname, './'), { maxAge: '30 days' }));
server.use('/artists/:id', express.static(path.join(__dirname, './'), { maxAge: '30 days' }));
server.use(cors());

// Albums & Player
server.get('/artists/albums/:artistID', (req, res) => {
  res.redirect('http://18.222.129.198' + req.url);
});

// Related Artists
server.get('/artists/relatedArtists/:id', (req, res) => {
  res.redirect('http://18.225.6.15' + req.url)
});

// Popular Songs
server.get('/artist/:id', (req, res) => {
   res.redirect('http://54.219.167.235' + req.url);
});

// Header
server.get('/api/artists/header/:id', (req, res) => {
   res.redirect('http://54.183.178.125' + req.url);
});

let port = process.env.port || 3456;
server.listen(port, console.log('Listening on:', port));