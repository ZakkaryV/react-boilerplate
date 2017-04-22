import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

const TodoItem = (props) => {

    let { text, deleteItems, key } = props;

    return (
        <li className="active-todo-item">
            <div className='.active'>- {text}</div>
            <button className="done-btn" type="submit" onClick={deleteItems} >+</button>
        </li>
    )
}

export default TodoItem;