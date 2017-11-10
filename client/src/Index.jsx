import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.jsx'
import axios from 'axios';
// import { lchmod } from 'fs';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            newTodo: '',
            allTodos:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitNewTodo = this.submitNewTodo.bind(this);
        this.updateNewTodo = this.updateNewTodo.bind(this);
        this.fetchAllTodos = this.fetchAllTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.deleteTodoInDB = this.deleteTodoInDB.bind(this);
        this.fetchAllTodos();
    }


    updateNewTodo(){
        axios.post('/', {params:{ newTodo: this.state.newTodo}})
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    fetchAllTodos(){
        var that = this;
        axios.get('/todos')
        .then(function(res){
            that.setState({allTodos: res.data});
        })
        .catch(function(err){
            console.log(err);
        })
    }

    handleInputChange(e){  
        this.setState({newTodo: e.target.value});
    }

    submitNewTodo(e){
        e.preventDefault();
        this.inputForm.value= "";
        this.updateNewTodo();
        this.fetchAllTodos();
        
    }

    deleteTodoInDB(todoID){
        var that = this;
        axios.delete('/todos/' + (todoID))
        .then(function(res){
            console.log(res);
            console.log("deleted the id",todoID);
            that.fetchAllTodos();
        })
        .catch(function(err){
            console.error(err);
        })
    }

    deleteTodo(e, todoID){
        console.log("came to delete todo", todoID)
        e.preventDefault();
        this.deleteTodoInDB(todoID);
    }

    render(){
        return(
        <div> 
            <div>
                <form onSubmit={this.submitNewTodo}>
                    <div>
                        <label>Enter Todo:   
                            <input id="enter-todo" type="text" onChange={this.handleInputChange} ref={(element)=>{this.inputForm = element}}/>
                        </label>
                        <input id="submit" type="submit" value="Submit"/>
                    </div>
                    
                </form>
            </div>
            <TodoList allTodos={this.state.allTodos.slice().reverse()} onDelete={this.deleteTodo}/>
        </div>);
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
