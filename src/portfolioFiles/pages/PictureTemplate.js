import React, {useState, useEffect} from "react";
import Gallery from 'react-grid-gallery';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


import {imageInfo} from "../pageInfo/imageInfo.js"


function PictureTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = imageInfo.find(o => o.id === portfolioURL);
    console.log("infoObj",infoObj)
    let imageList = infoObj.images
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
                            <div style={{
                                display: "block",
                                minHeight: "1px",
                                width: "100%",
                                border: "1px solid #ddd",
                                overflow: "auto"}}
                            >
                            <Gallery
                                images={imageList}
                                enableImageSelection={false}
                                backdropClosesModal={true}
                            />
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

export default PictureTemplate;