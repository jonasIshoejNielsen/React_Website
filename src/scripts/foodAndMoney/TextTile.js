import React from 'react'
import '../../styles/TextTile.css';
import AlertBox from "../alert/AlertBox";

const TextTile = props => (
    <div className="block">
        {props.input}
        <div className="suggestions">
            {props.suggestions}
        </div>
        <AlertBox title={props.warning} />
    </div>
);

export default TextTile;
