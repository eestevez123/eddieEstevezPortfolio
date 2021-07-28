import React from "react";
import {Helmet} from "react-helmet";

import {
    Link,
  } from "react-router-dom";

import {videoInfo} from "../pageInfo/videoInfo.js"
import {videoCards} from "../cards/videos"

function ApplicationTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = videoInfo.find(o => o.id === portfolioURL);
    let cardObj = videoCards.find(o => o.href === portfolioURL);

        return(
        <>
            <Helmet>
                <title>{infoObj["PageTitle"]} | Eddie Estevez</title>
                <meta name="description" content={cardObj.desc}/>
            </Helmet>
            <div className="container">
                <div className="top-section">
                <Link to ="/mywork">
                    <button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                </Link>
                    <h2 className="about__heading">
                        {infoObj["PageTitle"]}
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col col-sm-8">
                            <div className="ratio ratio-16x9 youtubeVideo">
                            <iframe
                                src={infoObj["videoURL"]}
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            >
                            </iframe>
                            </div>
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

            <div className="container">
                <div className="row text-center m-3">
                    <div className="col">
                    <Link to ="/mywork">
                    <   button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                    </Link>
                    </div>
                </div>
            </div>
    </>
    )
    
} 

export default ApplicationTemplate;