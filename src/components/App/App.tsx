import React, {Component} from 'react';
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import './App.css';
import { nanoid } from 'nanoid'

type AppProps = {
    message?: string;
}

type AppState = {
    todoArray: Array<any>;
}

class App extends Component<AppProps, AppState> {
    state: AppState = { todoArray: []}

    onTodoAdd = (inputValue: string) => {
        let oldState: Array<any> = this.state.todoArray.slice();
        oldState.push({content: inputValue, id: nanoid(), checked: false});
        this.setState({ todoArray: [...oldState] } );
    }

    deleteHandler = (id: string) => {
        let todoIndex = this.state.todoArray.findIndex(item => item.id === id);
        if (todoIndex !== -1) {
            let oldState = this.state.todoArray.slice();
            oldState.splice(todoIndex, 1);
            this.setState( {todoArray: [...oldState]} );
        }
    }

    editHandler = (id: string, newContent: string) => {
        let todoIndex = this.state.todoArray.findIndex(item => item.id === id);
        if (todoIndex !== -1) {
            let oldState = this.state.todoArray.slice();
            oldState[todoIndex].content = newContent;
            this.setState( {todoArray: [...oldState]} );
        }
    }

    checkboxHandler = (isChecked: boolean, id: string) => {
        let todoIndex = this.state.todoArray.findIndex(item => item.id === id);
        if (todoIndex !== -1) {
            let oldState = this.state.todoArray.slice();
            oldState[todoIndex].checked = isChecked;
            this.setState({todoArray: [...oldState]});
        }
    }

    render() {
        return (
            <div className="app">
                <CreateTodo onTodoAdd={ this.onTodoAdd }/>
                <TodoList todosArray={ this.state.todoArray }
                          editHandler={this.editHandler}
                          deleteHandler={this.deleteHandler}
                          checkboxHandler={this.checkboxHandler}/>
            </div>
        )
    }
}

export default App;
