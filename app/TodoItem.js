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
                <div className={this.props.isntDone} id={this.props.id} onClick={this.props.toggleClass}>- {this.props.text}</div>
            <div className="buttons">
            <button className="done-btn" type="submit" id={this.props.id} onClick={this.props.toggleClass} ></button>
            <button className="delete-btn" type="submit" id={this.props.id} onClick={this.props.deleteItems} ></button>
            </div>
        </li>
        )
    }
}

export default TodoItem;