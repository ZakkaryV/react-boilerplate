import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index';

class Todo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <TodoItem />
            </div>
        )
    }
}

export default Todo;