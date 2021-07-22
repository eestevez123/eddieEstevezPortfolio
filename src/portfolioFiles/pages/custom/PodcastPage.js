import React, {useState, useEffect} from "react";
import ReactSoundcloud from 'react-soundcloud-embedded'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import {soundInfo} from "../../pageInfo/soundInfo.js"


function PodcastPage(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = soundInfo.find(o => o.id === portfolioURL);
    
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
                            <ReactSoundcloud url="https://soundcloud.com/eduardo-estevez-771666676/podcast-about-relationships" visual={false}/>
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

export default PodcastPage;