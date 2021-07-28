import React from "react";
import {Helmet} from "react-helmet-async";
import { Link } from "react-router-dom";

import {soundInfo} from "../pageInfo/soundInfo.js"
import {soundCards} from "../cards/sounds"

function SoundTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    
    let infoObj = soundInfo.find(o => o.id === portfolioURL);
    let cardObj = soundCards.find(o => o.href === portfolioURL);

        return(
        <>
            <Helmet>
                <title>{infoObj["PageTitle"]} | Eddie Estevez</title>
                <meta name="description" content={cardObj.desc}/>
                <meta property="og:title" 
                    content={`${infoObj["PageTitle"]} | Eddie Estevez`}
                />
                <meta property="og:description" 
                    content={cardObj.desc}
                />
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
                        <div className="col-8">
                            <div className="ratio ratio-16x9 youtubeVideo">
                            <iframe
                                src={infoObj["soundURL"]}
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

            <div className="container mt-5">
                <div className="row text-center m-3">
                    <div className="col mt-5">
                    <Link to ="/mywork">
                    <   button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                    </Link>
                    </div>
                </div>
            </div>
    </>
    )
    
} 

export default SoundTemplate;