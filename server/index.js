var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000;
var router = express.Router();
var todoDB = require('./../database/index.js');



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.post('/', function(req, res){

    var newTodo = new todoDB.TodoModel({todo: req.body.params.newTodo});
    newTodo.save(function(err, newTodo){
        if (err) return console.error(err);
        console.log(newTodo, " saved!");
    })
})


app.get('/todos', function(req, res){

    var allTodos = todoDB.TodoModel.find(function(err, todos){
        if (err) return console.error(err);
        console.log(todos);
        res.send(todos);
    })
})

app.delete('/todos/:id', function(req, res){
  
    todoDB.TodoModel.findByIdAndRemove(req.params.id, function(err){
        if(err) return console.error(err);
    })
    res.sendStatus(200);
})


app.listen(port, () => {
    console.log("listening to port: ", port);
})