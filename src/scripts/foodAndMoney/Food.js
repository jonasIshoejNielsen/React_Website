import React, {Component} from 'react'
import TextTile from './TextTile';
import Suggestions from './Suggestions';
import FoodText from './FoodText';

const suggestions = "(Veganer, kvalitet, mængde, varieret, pris, bestik mm.)";

class Food extends Component {
    constructor() {
        super();
        this.state = {
            warning: "",
            value: ""
        };
        this.setValue = this.setValue.bind(this);
    }
    
    validate() {
        if(this.state.value === "") {
            this.setState({warning: "Udfyld mad preferencer"});
            return false
        }
        this.setState({warning: ""});
        this.props.getData("food", this.state.value.trim());
        return true;
    }

    setValue(value) {
        this.setState({value: value})
    }

    getInput() {
        if(!this.props.isValidated){
            return <FoodText ref = "input" setValue = {this.setValue} value={this.state.value} confirm={false}/>
        } else {
            return <FoodText ref = "input" setValue = {this.setValue} value={this.state.value} confirm={true}/>
        }
    }

    render() {
        if(!this.props.isValidated) {
            return  <TextTile
                        suggestions = {<Suggestions suggestions = {suggestions}/>}
                        warning = {this.state.warning}
                        input = {this.getInput()}
                    />
        } else {
            return  <TextTile
                        warning = {this.state.warning}
                        input = {this.getInput()}
                    />
        }
    }
}

export default Food
