import React, {Component} from 'react';
import './TodoListItem.css';

type AppProps = {
    content: string;
    extraClass: string | null;
    isChecked: boolean;
    id: string;
    handleDelete: (id: string) => void;
    handleEdit: (id: string, content: string) => void;
    handleCheckbox: (bool: boolean, id: string) => void;
}

class TodoListItem extends Component<AppProps, {}> {
    deleteHandler = () => {
        this.props.handleDelete(this.props.id);
    }

    editHandler = () => {
        let promptValue = prompt("Edit task");
        if (promptValue !== this.props.content
            && promptValue !== null
            && promptValue.trim() !== '') {
            this.props.handleEdit(this.props.id, promptValue);
        }
    }

    checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            this.props.handleCheckbox(true, this.props.id);
        } else {
            this.props.handleCheckbox(false, this.props.id);
        }
    }

    render() {
        return (
           <li className={`list-item ${this.props.extraClass}`}>
               <input type="checkbox" checked={this.props.isChecked} onChange={this.checkboxHandler}/>
               <p className="todo">{this.props.content}</p>
               <div className="btn-group">
                   <button className="btn" onClick={this.editHandler}>edit</button>
                   <button className="btn" onClick={this.deleteHandler}>delete</button>
               </div>
           </li>
        )
    }
}

export default TodoListItem;