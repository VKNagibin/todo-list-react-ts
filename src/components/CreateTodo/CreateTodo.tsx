import React, {Component} from 'react';
import InputText from "../InputText/InputText";
import './CreateTodo.css';

type AppProps = {
    onTodoAdd: (prop: string) => void;
}

type AppState = {
    value: string;
}

class CreateTodo extends Component<AppProps, AppState> {
    state: AppState = { value: ''};

    onInputChange = (inputValue: string): void => {
        this.setState( { value: inputValue } )
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if ( this.state.value.trim() !== '') {
            this.props.onTodoAdd(this.state.value);
        }
        this.setState({value: ''});
    }

    render() {
        return (
            <form className="create-todo-form">
                <InputText placeholder="What to do?" value={this.state.value} onInputChange={this.onInputChange} />
                <button className="btn" onClick={this.handleClick}>
                    create
                </button>
            </form>
        )
    }
}

export default CreateTodo;
