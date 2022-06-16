import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import '../../styles/QuestionIcon.css';

const QuestionIcon = props => (
    <div className="questionIcon">
        <FontAwesomeIcon icon={props.icon} className="iconBig"/>
        <div className="iconLabel">{props.label}</div>
    </div>
);

export default QuestionIcon;
