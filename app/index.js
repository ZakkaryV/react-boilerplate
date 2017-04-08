import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const TodoItem = (props) => {
    const { handleClick, todoName } = props;
        return (
            <div>
            <input type="text" placeholder={todoName}></input>
            <button onClick={() => handleClick()}>X</button>
            </div>
        )
    }

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

class AddTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todos: ['Do stuff', 'Benchmark PC', 'more things']
        }

        this.handleClick = this.handleClick.bind(this)
    }
// e.targetID
    handleClick() {
        console.log('clicked')
    }

    render() {
        let display = this.state.todos.map((a) => {
            return <TodoItem todoName={a} handleClick={this.handleClick} />
        });
        return (
            <div>
            To Do List
            {display}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
) 