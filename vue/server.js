const express = require('express');
//const leaflet = require('leaflet');

const app = express();

app.use('/', express.static(__dirname));

app.use('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000);