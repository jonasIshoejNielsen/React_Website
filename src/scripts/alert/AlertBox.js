import React from "react";

const AlertBox = props => (
    <div className={(props.title === "") ? 'warning hide':' warning display'}>
        <strong>Skal udfyldes! </strong>
        {props.title}
    </div>
);

export default AlertBox;