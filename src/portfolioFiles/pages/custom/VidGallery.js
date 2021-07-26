import React, {useState, useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import {videoInfo} from "../../pageInfo/videoInfo.js"


function VidGallery(props) {
    
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
                <div className={`container-fluid py-3 ${(idx % 2 === 0)?("bg-light"):("")}`}>
                    <div className="container">
                        <h2>{sectionObj.sectionTitle}</h2>
                        <p>{sectionObj.sectionDesc}</p>
                        <div className= "row row-cols-1 row-cols-md-2 gx-5">
                            {sectionObj["videoURLs"].map((videoObj) => (
                                <div className="col text-center mb-5" key={videoObj.videoID}>
                                    <h4>{videoObj.title}</h4>
                                    <p>{videoObj.desc}</p>
                                    <div class="ratio ratio-16x9 youtubeVideo">
                                        <iframe
                                            src={`https://youtube.com/embed/${videoObj.videoID}`}
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen
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