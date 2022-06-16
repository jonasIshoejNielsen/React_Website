import React, {Component} from 'react'
import AboutInput from './AboutInput';
import AlertBox from "../alert/AlertBox";

class About extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            gender: "M",
            warning:""
        };

        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleGender = this.handleGender.bind(this);
    }

    handleName(event) {
        event.preventDefault();
        this.setState({name: event.target.value});
    }

    handleAge(event) {
        event.preventDefault();
        this.setState({age: event.target.value.trim()});
    }

    handleGender(event) {
        this.setState({gender: event.target.value})
    }

    validate() {
        if(!this.validateName())    return false;
        if(!this.validateAge())     return false;
        if(!this.validateGender())  return false;
        this.setState({warning: ""});
        this.props.getData("name", this.state.name);
        this.props.getData("gender", this.state.gender);
        this.props.getData("age", this.state.age);
        return true;
    }

    validateName() {
        if (this.state.name.trim() === "") {
            this.setState({warning: "Du mangler at udfylde dit navn!"});
            return false;
        } else if (this.containsNumber()) {
            this.setState({warning: "Dit navn kan ikke indeholde tal!"});
            return false;
        }
        return true;
    }

    validateAge() {
        let age = this.state.age.trim();
        if(age === "") {
            this.setState({warning : "Du mangler at udfylde din alder"});
            return false;
        } else if (this.containsLetters()) {
            this.setState({warning : "Din alder er ikke et tal"});
            return false;
        } else if(age < 15 || age > 120 ) {
            this.setState({warning : "Din alder skal være mellem 15 og 120 år"});
            return false;
        }
        return true;
    }

    validateGender() {
        if(this.state.gender === "") {
            this.setState({warning : "Vælg køn"});
            return false;
        }
        return true;
    }

    containsNumber() {
        return /\d/.test(this.state.name);
    }

    containsLetters() {
        return /\D/.test(this.state.age);
    }

    radioInputs(value) {
        if(this.state.gender === value) {
            return <input type="radio" name="gender" value={value} checked onChange={this.handleGender}/>
        } else {
            return <input type="radio" name="gender" value={value} onChange={this.handleGender}/>
        }
    }

    getGender() {
        if(this.state.gender === "M") return "Mand";
        return "Kvinde";
    }

    render() {
        if(!this.props.isValidated) {
            return  <div className="block">
                        <AboutInput label='Navn:' handle={this.handleName} value = {this.state.name} disabled={false}/>
                        <AboutInput label='Alder: (15+)' handle={this.handleAge} value = {this.state.age} disabled={false}/>
                        <div className="radioBoxWrapper">
                            <div className="radioBoxTitle">Mand</div>{this.radioInputs("M")}
                            <div className="radioBoxTitle">Kvinde</div>{this.radioInputs("F")}
                        </div>
                        <AlertBox title={this.state.warning}/>
                    </div>
        } else {
            return  <div>
                        <AboutInput label='Navn:' handle={this.handleName} value={this.state.name} disabled={true}/>
                        <AboutInput label='Alder:' handle={this.handleAge} value={this.state.age} disabled={true}/>
                        <AboutInput label='Køn:' handle={this.handleGender} value={this.getGender()} disabled={true}/>
                    </div>

        }
    }
}

export default About;
