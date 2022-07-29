import React, {Component} from 'react';
import './InputText.css';

type AppProps = {
    placeholder: string;
    onInputChange: (prop: string) => void;
    value: string;
}

class InputText extends Component<AppProps, {}> {
    handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
        this.props.onInputChange(e.currentTarget.value);
    }

    render() {
        return (
            <input id="input" type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleInput} />
        )
    }
}

export default InputText;