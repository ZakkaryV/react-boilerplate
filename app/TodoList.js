import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    toggleClass(e) {
        console.log('test');
    }

    render() {

        let todoItems = this.props.todos.map((todo) => {
            return <TodoItem text={todo.text} id={todo.id} deleteItems={this.props.deleteItems} />
        });
        
        return (
            <div className="active-todos">
               {todoItems}
            </div>
        )
    }
};

export default TodoList;