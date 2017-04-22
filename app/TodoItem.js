import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class TodoItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className="active-todo-item">
                <div className='.active'>- {this.props.text}</div>
            <button className="done-btn" type="submit" id={this.props.id} onClick={this.props.deleteItems} >+</button>
        </li>
        )
    }
}

export default TodoItem;