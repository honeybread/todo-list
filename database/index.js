var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

var Cat = mongoose.model('Cat', { name: String });


var TodoSchema = mongoose.Schema({
  todo: String
});

var TodoModel = mongoose.model('TodoModel', TodoSchema);

module.exports.TodoModel = TodoModel;
