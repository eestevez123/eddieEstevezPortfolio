import React from "react";
import {Helmet} from "react-helmet-async";
import { Link } from "react-router-dom";

import {videoInfo} from "../../pageInfo/videoInfo.js"
import {videoCards} from "../../cards/videos"

function VidGallery(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = videoInfo.find(o => o.id === portfolioURL);
    let cardObj = videoCards.find(o => o.href === portfolioURL);

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
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="mt-5 mb-5">
                            {infoObj["Description"]}
                        </p>
                    </div>
                </div>
            </div>


            {infoObj["sections"].map((sectionObj, idx) => (
                <div key={idx} className={`container-fluid py-3 ${(idx % 2 === 0)?("bg-light"):("")}`}>
                    <div className="container">
                        <h2>{sectionObj.sectionTitle}</h2>
                        <p>{sectionObj.sectionDesc}</p>
                        <div className= "row row-cols-1 row-cols-md-2 gx-5">
                            {sectionObj["videoURLs"].map((videoObj) => (
                                <div className="col text-center mb-5" key={videoObj.videoID}>
                                    <h4>{videoObj.title}</h4>
                                    <p>{videoObj.desc}</p>
                                    <div className="ratio ratio-16x9 youtubeVideo">
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${videoObj.videoID}`}
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                        >
                                        </iframe>
                                    </div>
                                </div>
                                )
                            )}
                    </div>
                </div>  
                </div>
                ) 
            )}



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

export default VidGallery;