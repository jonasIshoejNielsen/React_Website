import React, {Component} from 'react';
import QuestionIcon from "../questionIcon/QuestionIcon";
import '../../styles/survey.css';

class SurveyTile extends Component {
    getQuestionIcon() {
        if(this.props.info.icon) {
            return <QuestionIcon icon={this.props.info.icon} label={this.props.info.label} />
        }
    }

    getTitle() {
        if(!this.props.isValidated || this.props.isValidated === undefined) {
            return this.props.info.title;
        } else {
            return this.props.info.validatedTitle;
        }
    }

    getBody() {
        if(this.props.info.body != "") return <p>{this.props.info.body}</p>
    }

    render() {
        return(
            <div className={'surveyTile ' + this.props.info.className}>
                <div className="body">
                    <div className="blockWrapper">
                        <div className="leftColumn">
                            {this.getQuestionIcon()}
                        </div>
                        <div className="rightColumn">
                            <div className="title"><h1>{this.getTitle()}</h1></div>
                            {this.getBody()}
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyTile;
