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

import {websiteInfo} from "../pageInfo/websiteInfo.js"


function WebsiteTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = websiteInfo.find(o => o.id === portfolioURL);
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

                <Link to ="/mywork">
                    <button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                </Link>

                <h2 className="about__heading">
                    {infoObj["PageTitle"]}
                </h2>
            </div>

                <div className="container-fluid bg-light mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="overflow">
                                <   img className="portfolioCoverImage img-flud d-block m-auto" src={infoObj.CoverPic} alt="cover" />
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="container">
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

            {showCarousel
            ? <> 
            <div className="container mt-5">
                <Carousel fade>

                    {CarouselImages.map((picObj, idx) => (
                        <Carousel.Item id={idx}>
                            <img
                                className="d-block w-100 carouselImage"
                                src={picObj.src}
                                alt="slide"
                            />
                            <Carousel.Caption className="carouselCaptions">
                                <h3>{picObj.label}</h3>
                                <p>{picObj.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}

                </Carousel>
            </div>
            </>
            : <></>}

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

export default WebsiteTemplate;