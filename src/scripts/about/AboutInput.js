import React from 'react';

const AboutInput = props => (
    <div className="inputWrapper">
        <div className="title">{props.label}</div>
        <div className="input">
            <input id="age" onChange={props.handle} value={props.value} disabled={props.disabled}/>
        </div>
    </div>
);

export default AboutInput;