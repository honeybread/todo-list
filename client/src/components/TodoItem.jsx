import React from 'react';


const todoItem = (props) => {
    return(
    <div>
        {props.todo}
        <button id="delete-todo" onClick = {(e) =>{props.onDelete(e, props.todoID)}}>Delete</button>
    </div>)
};

export default todoItem;