import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = (props) => {
    const mappedTodos = props.allTodos.map((todo) =>{
        return(<li key={todo._id}> 
                    <TodoItem todo={todo.todo} todoID={todo._id} onDelete={props.onDelete}/> 
                </li>)
    })

    return(<div><ul> {mappedTodos} </ul></div>);

}

export default TodoList;