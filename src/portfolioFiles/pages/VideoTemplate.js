import React, {useState, useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


import placeholderImg from "../../images/placeholder.png";

import {videoInfo} from "../pageInfo/videoInfo.js"


function ApplicationTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = videoInfo.find(o => o.id === portfolioURL);

        return(
        <>
            <div className="container">
                <div className="top-section">
                <Link to ="/mywork">
                    <button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                </Link>
                    <h2 className="about__heading">
                        {infoObj["PageTitle"]}
                    </h2>
                    <div className="row">
                        <div className="col">
                            <div class="ratio ratio-16x9 youtubeVideo">
                            <iframe
                                src={infoObj["videoURL"]}
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            >
                            </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                            
            <div className="container-fluid bg-light mt-4">
                <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h4 className="mt-3">
                                    Description
                                </h4>
                                <p>
                                {infoObj["Description"]}
                                </p>

                            </div>
                    </div>
                </div>                
            </div>
    </>
    )
    
} 

export default ApplicationTemplate;