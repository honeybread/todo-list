var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000;

app.use(express.static(path.join(__dirname, '/../client/dist/')))

app.listen(port, () => {
    console.log("listening to port: ", port);
})