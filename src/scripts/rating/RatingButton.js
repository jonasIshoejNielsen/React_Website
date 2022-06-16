import React, {Component} from 'react';
import '../../styles/rating.css';

class RatingButton extends Component {
    constructor(props) {
        super();
        this.state = {
            number: props.number
        }
    }

    onClick() {
        this.props.validateSelection(this.state.number);
    }

    getClassName() {
        let styles = "ratingButton";
        if(this.props.confirm) return styles += " confirm";
        if(this.state.number === this.props.activeComponent) return styles += " active";
        return styles;
    }

    render() {
        if(!this.props.confirm) {
            return  <div className={this.getClassName()} onClick={() => this.onClick()}>
                        <div className="ratingNumber">{this.state.number}</div>
                    </div>
        } else {
            return  <div className={this.getClassName()}>
                        <div className="ratingNumber">{this.state.number}</div>
                    </div>
        }
    }
}

export default RatingButton;