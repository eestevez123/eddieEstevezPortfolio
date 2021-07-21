import React, {useState} from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";


function PortfolioCard(props) {

    let path = props.path

    return(
        <>
        <div className="card text-center">
            <div className="overflow">
                <img src={props.src} alt={props.alt} className="card-img-top"/>
            </div>
        
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
                {props.desc}
            </p>
            <Link to={`${path}/${props.href}`}>
                <button type="button" className="btn btn-outline-primary">More Info</button>
            </Link>
        </div>
        </div>
        </>
    );
}

export default PortfolioCard