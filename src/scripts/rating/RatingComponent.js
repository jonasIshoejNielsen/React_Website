import React, {Component} from 'react';
import QuestionIcon from "../questionIcon/QuestionIcon";
import RatingButton from "./RatingButton";
import '../../styles/artist.css';

class RatingComponent extends Component {
    constructor() {
        super();
        this.state = {
            activeComponent: -1,
        };
        this.validateSelection = this.validateSelection.bind(this);
    }

    validateSelection(componentNumber) {
        if(this.state.activeComponent === componentNumber) this.setState({activeComponent: -1});
        else this.setState({activeComponent: componentNumber});
    }

    getNumber() {
        return this.state.activeComponent;
    }

    getButtons() {
        if(!this.props.isValidated) {
            let buttons = [];
            for(let i = 1; i <= 5; i++) {
                buttons.push(<RatingButton key={i}
                                           number={i}
                                           activeComponent={this.state.activeComponent}
                                           validateSelection={this.validateSelection}
                                           confirm={false}/>);
            }
            buttons.push(<div className="rowLine" key="6"></div>);
            return buttons;
        } else {
            let active = this.state.activeComponent;
            return <RatingButton key={active}
                                 number={active}
                                 activeComponent={active}
                                 validateSelection={this.validateSelection}
                                 confirm={true}/>;
        }
    }

    render () {
        return (
            <div className="ratingComponentRow">
                <div className="ico"><QuestionIcon label={this.props.label} icon={this.props.icon}/></div>
                {this.getButtons()}
            </div>
        );
    }
}

export default RatingComponent;
