import React from "react";
import Gallery from 'react-grid-gallery';
import {Helmet} from "react-helmet-async";

import {
    Link,
  } from "react-router-dom";


import {imageInfo} from "../pageInfo/imageInfo.js"
import {imageCards} from "../cards/images"

function PictureTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = imageInfo.find(o => o.id === portfolioURL);
    let imageList = infoObj.images
    let cardObj = imageCards.find(o => o.href === portfolioURL);

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
                    <div className="row">
                        <div className="col">
                            <div className="rounded" style={{
                                display: "block",
                                minHeight: "1px",
                                width: "100%",
                                border: "2px solid #ddd",
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

export default PictureTemplate;