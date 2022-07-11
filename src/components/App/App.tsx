import React, {Component} from 'react';
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import './App.css';
import { nanoid } from 'nanoid'

type AppState = {
    todoArray: Array<any>;
    isMarked: boolean;
}

class App extends Component<{}, AppState> {
    state: AppState = { todoArray: [], isMarked: false}

    deleteMarkedHandler = (removeArray: Array<string>) => {
        let oldState: Array<any> = this.state.todoArray.slice();

        removeArray.forEach(elem => {
            let willRemove = oldState.findIndex(item => item === elem);
            if (willRemove !== -1) {
                oldState.splice(willRemove, 1);
            }
        })
        this.setState({ todoArray: [...oldState] });
    }

    markAllBtnHandler = () => {
        let oldState: Array<any> = this.state.todoArray.slice();
        if (this.state.isMarked) {
            oldState.map(item => item.checked = false);
        } else {
            oldState.map(item => item.checked = true);
        }
        let isMarked = this.state.isMarked;
        this.setState({ todoArray: [...oldState], isMarked: !isMarked } );
    }

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
                          markAllBtnHandler={this.markAllBtnHandler}
                          editHandler={this.editHandler}
                          deleteHandler={this.deleteHandler}
                          checkboxHandler={this.checkboxHandler}
                          deleteMarkedHandler={this.deleteMarkedHandler}
                />

            </div>
        )
    }
}

export default App;
