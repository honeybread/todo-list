import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.jsx'
import axios from 'axios';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            newTodo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
        this.updateTodos = this.updateTodos.bind(this);
    }


    updateTodos(){
        axios.post('/', {params:{ newTodo: this.state.newTodo}})
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    handleChange(e){  
        this.setState({newTodo: e.target.value});
        
    }

    submitTodo(e){
        e.preventDefault();
        this.inputForm.value= "";
        alert("Submit clicked");
        this.updateTodos();
        
    }

    componentDidUpdate(){
        console.log("Handling change " + this.state.newTodo );
    }

    render(){
        return(
        <div> 
            <form onSubmit={this.submitTodo}>
                <div>
                    <label>Enter Todo:   
                        <input id="enter-todo" type="text" onChange={this.handleChange} ref={(element)=>{this.inputForm = element}}/>
                    </label>
                </div>
                <div>
                    <input id="submit" type="submit" value="Submit"/>
                </div>
                
            </form>
            
        </div>);
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
