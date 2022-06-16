import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import PropTypes from 'prop-types';
import tiles from '../const/TilesInfo';
import '../../styles/App.css';
import SurveyTile from "./SurveyTile";
import Artists from "../artists/Artists";
import Food from "../foodAndMoney/Food";
import About from "../about/About";
import Money from "../foodAndMoney/Money";
import Rating from "../rating/Rating";
import Logo from "./Logo";
import {Link} from "react-router-dom";

let payload = {
    name: "",
    gender: "",
    age: "",
    artists: "",
    grades: {
        toilet: "",
        festival: "",
        nature: ""
    },
    money: "",
    food: ""
};

const questionReferences = ["artist", "rating", "money", "food", "about"];

class Survey extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            isValidated: false,
        };
        this.toConfirmPage = this.toConfirmPage.bind(this);
        this.toSurveyPage = this.toSurveyPage.bind(this);
        this.getData = this.getData.bind(this);
        this.postData = this.postData.bind(this);
    }

    async postData() {
        return await fetch('https://syst-api.azurewebsites.net/marktramp/survey',
            {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(payload)})
            .then(data => this.toEndPage(data));
    }

    toConfirmPage() {
        let isValidated = true;
        let moveToRef = "top";
        for(let i = questionReferences.length-1; i >= 0; i--){
            let response = this.refs[questionReferences[i]].validate();
            if(!response) {
                isValidated = false;
                moveToRef = questionReferences[i] + "Parent";
            }
        }
        this.setState({isValidated: isValidated});
        const node = ReactDOM.findDOMNode(this.refs[moveToRef]);
        window.scrollTo({
            top: node.offsetTop,
            behavior: "smooth"
        });
    }

    toSurveyPage() {
        this.setState({isValidated: false});
        window.scrollTo({
            top: ReactDOM.findDOMNode(this.refs.top).offsetTop,
            behavior: "smooth"
        });
    }

    toEndPage(data) {
        if(data.status === 200)  this.context.router.history.push("/end");
        else alert("Netværksfejl!");
    }

    getData(position, obj) {
        payload[position] = obj;
    }

    getButtonTile(){
        if(!this.state.isValidated) {
            return  <div className='bottomTile'><button className="btn btn-primary" onClick={this.toConfirmPage}>Videre</button></div>
        }
        else return <div className='bottomTile'>
                        <button className="btn btn-secondary" onClick={this.toSurveyPage}>Rediger</button>
                        <button className="btn btn-success" onClick={this.postData}>Send</button>
                    </div>
    }

    render() {
        return (
            <div>
                <Link to={"/"} ref="top"><Logo /></Link>
                <SurveyTile info={tiles['intro']} isValidated={this.state.isValidated}/>
                <SurveyTile info={tiles['artist']} ref="artistParent" content={<Artists  getData={this.getData}  ref="artist" isValidated={this.state.isValidated}/>} isValidated={this.state.isValidated}/>
                <SurveyTile info={tiles['rating']} ref="ratingParent" content={<Rating   getData={this.getData}  ref="rating" isValidated={this.state.isValidated}/>} isValidated={this.state.isValidated}/>
                <SurveyTile info={tiles['money']}  ref="moneyParent"  content={<Money    getData={this.getData}  ref="money"  isValidated={this.state.isValidated}/>} isValidated={this.state.isValidated}/>
                <SurveyTile info={tiles['food']}   ref="foodParent"   content={<Food     getData={this.getData}  ref="food"   isValidated={this.state.isValidated}/>} isValidated={this.state.isValidated}/>
                <SurveyTile info={tiles['about']}  ref="aboutParent"  content={<About    getData={this.getData}  ref="about"  isValidated={this.state.isValidated}/>} isValidated={this.state.isValidated}/>
                {this.getButtonTile()}
            </div>
        );
    }
}

export default Survey;
