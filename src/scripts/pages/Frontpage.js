import React from 'react';
import {Link} from 'react-router-dom';
import marktrampLogo from '../../images/Marktramp_logo_reduced.svg';
import MarktrampLogoReduced from '../../scripts/MarktrampLogoReduced';
import '../../styles/FrontPageStyle.css';

const Frontpage = props => (
    <div className="frontPageBackground">
        <div className="frontPageContent">
            <div className="logo">
                <MarktrampLogoReduced />
            </div>
            <div className="text">
                <span className={props.textClassName}>{props.text}</span>
            </div>
            <div className="button">
                <Link to={props.to}>
                    <button className={props.buttonClassName}>{props.buttonText}</button>
                </Link>
            </div>
        </div>
    </div>
);

export default Frontpage;