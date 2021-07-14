import React, {useState} from "react";


function PortfolioCard(props) {

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
            <a href={props.href} className="btn btn-outline-primary">
                More Info
            </a>
        </div>
        </div>
        </>
    );
}

export default PortfolioCard