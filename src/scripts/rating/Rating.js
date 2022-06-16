import React, { Component } from 'react';
import ToiletIcon from '@fortawesome/fontawesome-free-solid/faBath';
import NatureIcon from '@fortawesome/fontawesome-free-solid/faLeaf';
import SpaceIcon from '@fortawesome/fontawesome-free-solid/faExpand';
import RatingComponent from "./RatingComponent";
import AlertBox from "../alert/AlertBox";

class Rating extends Component {
    constructor() {
        super();
        this.state = {
            warning: ""
        };
    }

    validate() {
        if(!this.validateRatings()) return false;
        this.setState({warning : ""});
        this.getData();
        return true;
    }

    validateRatings() {
        if (this.refs.toilet.getNumber() === -1) {
            this.setState({warning : "Vælg preference for toilet"});
            return false;
        } else if (this.refs.nature.getNumber() === -1) {
            this.setState({warning : "Vælg preference for natur"});
            return false;
        } else if (this.refs.space.getNumber() === -1) {
            this.setState({warning : "Vælg preference for plads"});
            return false;
        }
        return true;
    }

    getData() {
        const obj = {
            toilet: this.refs.toilet.getNumber(),
            nature: this.refs.nature.getNumber(),
            festival: this.refs.space.getNumber()
        };
        this.props.getData("grades", obj);
    }

    getClassName() {
        if(!this.props.isValidated) return "ratingWrapper";
        return "ratingWrapper flex-row";
    }

    render() {
        return (
            <div className="block">
                <div className={this.getClassName()}>
                    <RatingComponent label="Toilet" icon={ToiletIcon} ref="toilet" isValidated={this.props.isValidated}/>
                    <RatingComponent label="Natur" icon={NatureIcon} ref="nature" isValidated={this.props.isValidated}/>
                    <RatingComponent label="Pladsen"  icon={SpaceIcon}  ref="space"  isValidated={this.props.isValidated}/>
                </div>
                <AlertBox title={this.state.warning} />
            </div>
        );
    }
}

export default Rating;
