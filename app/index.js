import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import TodoList from './TodoList';
require('./css/main.css');


// e.targetID

class App extends Component {
    constructor(props) {
        super(props);

        this.addTodo  = this.addTodo.bind(this);  
        this.onChange = this.onChange.bind(this);
        this.deleteItem   = this.deleteItem.bind(this);
        this.printItems   = this.printItems.bind(this);
         
        this.state = {
            todos: [
                {
                    text: 'Do Stuff',
                    isntDone: true,
                    key: 0
                },
                {
                    text: 'Benchmark PC',
                    isntDone: true,
                    key: 1
                },
                {
                    text: 'more things',
                    isntDone: false,
                    key: 2
                }
            ],
            text: ''
        }
    }

    addTodo (e) {
        e.preventDefault();
        let todo = this.state.todos;
        let newTodo = this.state.text;
        let newKey = todo[todo.length -1].key + 1;
        todo.push({text: newTodo, isntDone: true, key: newKey})
        this.setState({todos: todo})
    }
    
    onChange(e) {
        this.setState({text: e.target.value})
    }

    deleteItem(a) {
        a.preventDefault();
        let oldTodos = this.state.todos;
        let newTodos = this.state.todos.splice(a.target.value, 1);
        this.setState({todos: oldTodos});
        console.log(oldTodos);
    }


    printItems(e) {
        e.preventDefault();
        let todoItems = this.state.todos.map((a) => {
            return <li key={a.key}>
                    <div className='.active'>{a.text}</div>
                    <button className="done-btn" type="submit" onClick={this.deleteItem} value={a.key}>+</button>
                    </li>
        });
    }


    render() {
        return (
            <div className="app">
                <h1>To Do List</h1>
                <form onSubmit={this.addTodo}>
                <input id="input" type="text" value={this.state.text} placeholder="Add Todo" onChange={this.onChange} />
                </form>
                <TodoList todos={this.state.todos} printItems={this.printItems}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
) 