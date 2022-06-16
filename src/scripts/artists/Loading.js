import img from '../../images/load.gif';
import React from "react";
const Loading = props => (
    <div className={props.isLoading ? 'loader display': 'loader hide'}><img src={img} alt="loading" />loading</div>
);

export default Loading;