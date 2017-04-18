import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

const TodoItem = (props) => {

    let { text, key } = props;

    let deleteIt = (e) => {
    let newArray = todos.splice(e.target.key,1);
    if (newArray.length < 1) {
        deleteItems([{text: 'add a todo ^', isntDone: false}]);
    }
    deleteItems(todos);
    console.log(e);
}

    return (
        <li>
            <div className='.active'>{text}</div>
            <button className="done-btn" type="submit" onClick={() => {deleteIt(key)}} key={key}>+</button>
        </li>
    )
}

export default TodoItem;