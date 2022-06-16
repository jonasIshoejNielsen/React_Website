import React, {Component} from 'react';
import '../../styles/FoodText.css';

class FoodText extends Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        event.preventDefault();
        this.props.setValue(event.target.value);
    }

    render() {
        if(!this.props.confirm) {
            return  <div className="foodInputWrapper">
                        <textarea className="foodInput"
                                  onChange={this.handleInput}
                                  value={this.props.value}/>
                    </div>
        } else {
            return  <div className="foodInputWrapper">
                        <textarea className="foodInput"
                                  onChange={this.handleInput}
                                  value={this.props.value}
                                  disabled={true}/>
                    </div>
        }
    }
}

export default FoodText;