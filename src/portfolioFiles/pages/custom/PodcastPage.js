import React from "react";
import ReactSoundcloud from 'react-soundcloud-embedded'

import { Link } from "react-router-dom";

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
                    <div className="row justify-content-center">
                        <div className="col-8 m-5">
                            <ReactSoundcloud url="https://soundcloud.com/eduardo-estevez-771666676/podcast-about-relationships" visual={false}/>
                        </div>
                    </div>
                </div>
            </div>
                            
            <div className="container-fluid bg-light mt-4 pb-5">
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

            <div className="container mt-5">
                <div className="row text-center mt-5">
                    <div className="col mt-5">
                    <Link to ="/mywork">
                    <   button type="button" className="btn btn-outline-primary mt-5">Go Back</button>
                    </Link>
                    </div>
                </div>
            </div>
    </>
    )
    
} 

export default PodcastPage;