import React, { Componenet } from 'react';
import ReactDOM from 'react-dom';
import './index';
import TodoItem from './TodoItem';

const TodoList = (props) => {

    const { todos, deleteItems } = props;

    let todoItems = todos.map((a) => {
        return <TodoItem text={a.text} />
    });

        return (
            <div className="active-todos">
                {todoItems}
            </div>
    )
};

export default TodoList;