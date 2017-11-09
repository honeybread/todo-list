var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000;
var router = express.Router();
// var user = require('/user')

app.use(express.static(path.join(__dirname, '/../client/dist/')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/', function(req, res){
    console.log("came to post / ", req.body.params.newTodo);
    res.send(req.body.params.newTodo);
})

app.listen(port, () => {
    console.log("listening to port: ", port);
})