import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './css/main.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.addTodo  = this.addTodo.bind(this);  
        this.onChange = this.onChange.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
         
        this.state = {
            todos: [
                {
                    text: 'Do Stuff',
                    isntDone: 'active-todo',
                    id: '001'
                },
                {
                    text: 'Benchmark PC',
                    isntDone: 'active-todo',
                    id: '002'
                },
                {
                    text: 'more things',
                    isntDone: 'inactive-todo',
                    id: '003'
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
        todo.push({text: newTodo, isntDone: 'active-todo', id: Date.now().toString()});
        this.setState({todos: todo, text: ''})
    }
    
    onChange(e) {
        this.setState({text: e.target.value})
    }


    deleteItems(e) {
        let array = this.state.todos;
        let index = '';
        array.map((val) => {
            if (val.id === e.target.id) {
                index = array.indexOf(val);
            }
        }); 
        array.splice(index, 1);
        this.setState({ todos: array });
    }

    toggleClass(e) {
        let currentState = document.getElementById(e.target.id).className;
        let currentId = e.target.id;
        let array = this.state.todos;
        let index = '';
        array.map((todo) => {
            if (todo.id === currentId) {
                index = array.indexOf(todo);
            }
        });
        console.log(currentState);
        if (currentState === 'active-todo') {
            array[index].isntDone = 'inactive-todo';
            this.setState({ todos: array });
        } else if (currentState === 'inactive-todo') {
            array[index].isntDone = 'active-todo';
            this.setState({ todos: array });
        }
        
    }

    render() {
        return (
            <div className="app">
                <h1>To Do List</h1>
                <form onSubmit={this.addTodo}>
                <input id="input" type="text" value={this.state.text} placeholder="Add Todo" onChange={this.onChange} />
                </form>
                <TodoList todos={this.state.todos} deleteItems={this.deleteItems} toggleClass={this.toggleClass} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
) 