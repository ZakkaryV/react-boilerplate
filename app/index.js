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
        this.deleteItems = this.deleteItems.bind(this);
         
        this.state = {
            todos: [
                {
                    text: 'Do Stuff',
                    isntDone: true
                },
                {
                    text: 'Benchmark PC',
                    isntDone: true
                },
                {
                    text: 'more things',
                    isntDone: false
                }
            ],
            text: '',
            initKey: -1
        }
    }

    addTodo (e) {
        e.preventDefault();
        let todo = this.state.todos;
        let newTodo = this.state.text;
        todo.push({text: newTodo, isntDone: true})
        this.setState({todos: todo, text: ''})
    }
    
    onChange(e) {
        this.setState({text: e.target.value})
    }


    deleteItems(e) {
        console.log(e.target);
    }

    render() {
        return (
            <div className="app">
                <h1>To Do List</h1>
                <form onSubmit={this.addTodo}>
                <input id="input" type="text" value={this.state.text} placeholder="Add Todo" onChange={this.onChange} />
                </form>
                <TodoList todos={this.state.todos} deleteItems={this.deleteItems} initKey={this.state.initKey} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
) 