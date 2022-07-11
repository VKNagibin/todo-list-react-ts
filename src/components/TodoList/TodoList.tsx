import React, {Component} from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css';

type AppProps = {
    todosArray: Array<any>;
    deleteHandler: (id: string) => void;
    editHandler: (id: string, newContent: string) => void;
    checkboxHandler: (bool: boolean, id: string) => void;
    markAllBtnHandler: () => void;
    deleteMarkedHandler: (removeArray: Array<string>) => void;
}

class TodoList extends Component<AppProps, {}> {

    deleteMarkedHandler = () => {
        let removeArray = this.props.todosArray.filter(item => item.checked === true);
        this.props.deleteMarkedHandler(removeArray);
    }

    markAllBtnHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        this.props.markAllBtnHandler();
    }

    handleCheckbox = (bool: boolean, id: string) => {
        this.props.checkboxHandler(bool, id);
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
                                  isChecked={item.checked}
                                  content={item.content}
                                  handleEdit={this.handleEdit}
                                  handleDelete={this.handleDelete}
                                  handleCheckbox={this.handleCheckbox}
                                  key={item.id}
                                  id={item.id}
                    /> )}

                <button className="btn" onClick={this.markAllBtnHandler}>fulfil all</button>
                <button className="btn" onClick={this.deleteMarkedHandler}>delete marked</button>
            </ul>
        )
    }
}

export default TodoList;
