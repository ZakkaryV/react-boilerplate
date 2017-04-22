import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.toggleClass = this.toggleClass.bind(this);

    }

    toggleClass(e) {
        console.log(e.target.className);
    }

    render() {



        return (
            <li className="active-todo-item">
                <div className='.active'>- {this.props.text}</div>
            <button className="done-btn" type="submit" id={this.props.id} onClick={this.toggleClass} >+</button>
            <button className="delete-btn" type="submit" id={this.props.id} onClick={this.props.deleteItems} >+</button>
        </li>
        )
    }
}

export default TodoItem;