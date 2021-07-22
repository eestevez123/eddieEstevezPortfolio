import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


import placeholderImg from "../../images/placeholder.png";

import {appInfo} from "../pageInfo/appInfo.js"


function ApplicationTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = appInfo.find(o => o.id === portfolioURL);
    let CarouselImages = infoObj.CarouselImages

    const [showCarousel, setshowCarousel] = useState(false)

    useEffect(() => {
        if (Object.keys(infoObj.CarouselImages).length === 0) {
            setshowCarousel(false)
        } else {
            setshowCarousel(true)
        }
    }, [infoObj.CarouselImages])







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
                            <img className="portfolioCoverImage img-flud d-block m-auto" src={infoObj.CoverPic} alt="cover" />
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-6">
                            <h4 className="mt-3">
                                Background
                            </h4>
                            <p>
                               {infoObj["Background"]}
                            </p>

                        </div>

                    </div>
                </div>
            </div>
                            
            <div className="container-fluid bg-light mt-4">
                <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h4 className="mt-3">
                                    What I Did
                                </h4>
                                <p>
                                {infoObj["WhatIDid"]}
                                </p>

                            </div>
                            <div className="col-sm-6 ">
                                <h4 className="mt-3">
                                    What I Learned
                                </h4>
                                <p>
                                {infoObj["WhatILearned"]}
                                </p>

                            </div>

                    </div>
                </div>                
            </div>

            {showCarousel
            ? <> 
            <div className="container">
                <Carousel fade>

                    {CarouselImages.map((picObj, idx) => (
                        <Carousel.Item id={idx}>
                            <img
                                className="d-block w-100 carouselImage"
                                src={picObj.src}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{picObj.label}</h3>
                                <p>{picObj.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}

                </Carousel>
            </div>
            </>
            : <></>}
    </>
    )
    
} 

export default ApplicationTemplate;