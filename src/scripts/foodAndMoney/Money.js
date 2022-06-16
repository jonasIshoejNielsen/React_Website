import React, {Component} from 'react'
import TextTile from "./TextTile";
import Suggestions from "./Suggestions";
import MoneyInput from "./MoneyInput";

const suggestions = "(Mad, drikke, toillet, bad, transport mm.)";

class Money extends Component {
    constructor() {
        super();
        this.state = {
            warning: "",
            value: ""
        };
        this.setValue = this.setValue.bind(this);
    }

    validate() {
        if (this.state.value === "") {
            this.setState({warning : "Skal udfyldes!"});
            return false;
        } else if (this.containsLetters()) {
            this.setState({warning: "Du må kun skrive tal!"});
            return false;
        } else if (this.state.value < -1) {
            this.setState({warning: "Du kan ikke have mindre end 0 kr med!"});
            return false;
        }
        this.setState({warning: ""});
        this.props.getData("money", this.state.value);
        return true;
    }

    containsLetters() {
        return /\D/.test(this.state.value);
    }

    setValue(value) {
        this.setState({value: value.trim()})
    }

    getInput() {
        if(!this.props.isValidated) {
            return  <MoneyInput setValue={this.setValue} value={this.state.value} disabled={false}/>
        } else {
            return  <MoneyInput setValue={this.setValue} value={this.state.value} disabled={true}/>
        }
    }

    render() {
        if(!this.props.isValidated) {
            return <TextTile suggestions={<Suggestions suggestions={suggestions}/>} warning={this.state.warning} input={this.getInput()}/>
        } else {
            return <TextTile warning={this.state.warning} input={this.getInput()}/>
        }
    }
}

export default Money;