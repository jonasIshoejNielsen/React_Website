import React, {Component} from 'react';
import '../../styles/MoneyInput.css';

class MoneyInput extends Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        event.preventDefault();
        this.props.setValue(event.target.value);
    }

    render() {
        return(
            <div className="moneyInputWrapper">
                <input className="moneyInput"
                       onChange={this.handleInput}
                       value={this.props.value}
                       disabled={this.props.disabled}
                />
                <div className="kr">kr.</div>
            </div>
        )
    }
}

export default MoneyInput;