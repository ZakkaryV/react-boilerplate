import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import TodoList from './TodoList';
import './css/main.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.addTodo  = this.addTodo.bind(this);  
        this.onChange = this.onChange.bind(this);
        this.printItems   = this.printItems.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
         
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
        this.setState({todos: todo, text: ''})
    }
    
    onChange(e) {
        this.setState({text: e.target.value})
    }

    printItems(e) {
        e.preventDefault();
        let todoItems = this.state.todos.map((a) => {
            return <li key={a.key}>
                    <div className='.active'>{a.text}</div>
                    <button className="done-btn" type="submit" value={a.key}>+</button>
                    </li>
        });
    }

    deleteItems(e) {
        e.preventDefault();
        console.log(this.state);
        
    }


    render() {
        return (
            <div className="app">
                <h1>To Do List</h1>
                <form onSubmit={this.addTodo}>
                <input id="input" type="text" value={this.state.text} placeholder="Add Todo" onChange={this.onChange} />
                </form>
                <TodoList todos={this.state.todos} printItems={this.printItems} deleteItems={this.deleteItems} whichItem={0} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
) 