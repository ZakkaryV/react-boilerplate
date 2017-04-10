import React, { Componenet } from 'react';
import ReactDOM from 'react-dom';
import './index';

const TodoList = (props) => {
    const { todos } = props;

    let todoItems = todos.map((a) => {
        return <li key={a.key}>
                <div className='.active'>{a.text}</div>
                <button className="done-btn" type="submit" onClick={this.deleteItem} value={a.key}>+</button>
                </li>
    });

        return (
            <div className="active-todos">
                {todoItems}
            </div>
    )
};

export default TodoList;