import React, {Component} from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

type AppProps = {
    todosArray: Array<any>;
    deleteHandler: (id: string) => void;
    editHandler: (id: string, newContent: string) => void;
    checkboxHandler: (bool: boolean, id: string) => void;
}

type AppState = {
    message?: string;
}

class TodoList extends Component<AppProps, AppState> {

    markAllBtnHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        alert("Yee, body!");
    }

    handleCheckbox = (bool: boolean, id: string) => {

    }

    handleDelete = (id: string) => {
        this.props.deleteHandler(id);
    }

    handleEdit = (id: string, newContent: string ) => {
        this.props.editHandler(id, newContent);
    }

    render() {
        return (
            this.props.todosArray.length === 0 ? null :

            <ul className="todo-list" >
                { this.props.todosArray.map((item) =>
                    <TodoListItem extraClass={item.checked ? "checked" : ''}
                                  content={item.content}
                                  handleEdit={this.handleEdit}
                                  handleDelete={this.handleDelete}
                                  handleCheckbox={this.handleCheckbox}
                                  key={item.id}
                                  id={item.id}
                    /> )}

                <button onClick={this.markAllBtnHandler}>fulfil all</button>
            </ul>
        )
    }
}

export default TodoList;
