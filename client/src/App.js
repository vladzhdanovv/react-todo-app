import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import config from './config';

import TodosList from './Components/TodosList'
import AddTodo from './Containers/AddTodo'

class App extends Component {
    constructor(props) {
        super(props);

        this.showModal = this.showModal.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.state = {
            showModal: false,
            todos: [],
        }
    }

    showModal() {
        this.setState({
            showModal: true
        })
    }

    addTodo(title, description) {
        const {todos}= this.state;
        todos.push({
            title,
            description
        });

        this.setState({
            todos,
            showModal: false
        })
    }

    componentDidMount() {
        axios.get(`${config.url}/fetchTodos`)
            .then((result) => {
                console.log(result.data);
                this.setState({
                    todos: result.data
                })
            })
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={this.showModal}>Add Todo</button>
                </div>
                <TodosList todos={this.state.todos}/>
                <AddTodo onChangeFunction={this.addTodo} show={this.state.showModal}/>
            </div>
        );
    }
}

export default App;
