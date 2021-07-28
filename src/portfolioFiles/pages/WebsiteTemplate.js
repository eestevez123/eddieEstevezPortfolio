import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import Carousel from 'react-bootstrap/Carousel'
import OnImagesLoaded from 'react-on-images-loaded';
import Skeleton from 'react-loading-skeleton';

import {
    Link,
  } from "react-router-dom";

import {websiteInfo} from "../pageInfo/websiteInfo.js"
import {websiteCards} from "../cards/website"


function WebsiteTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = websiteInfo.find(o => o.id === portfolioURL);
    let cardObj = websiteCards.find(o => o.href === portfolioURL);
    let CarouselImages = infoObj.CarouselImages;
    const carouselImageLength = Object.keys(infoObj.CarouselImages).length;

    const [isLoadingCover, setIsLoadingCover] = useState(true);
    const [isLoadingCarousel, setIsLoadingCarousel] = useState(true);
    const [showCarousel, setshowCarousel] = useState(false)
    const [showCarouselControls, setshowCarouselControlers] = useState(true)

    useEffect(() => {
        if (carouselImageLength === 0) {
            setshowCarousel(false)
        } else if (carouselImageLength.length === 1) { 
            setshowCarouselControlers(false)
            setshowCarousel(true)
        } else  {
            setshowCarousel(true)
        }
    }, [carouselImageLength])

        return(
        <>
            <Helmet>
                <title>{infoObj["PageTitle"]} | Eddie Estevez</title>
                <meta name="description" content={cardObj.desc}/>
            </Helmet>
            <div className="container">

                <Link to ="/mywork">
                    <button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                </Link>

                <h2 className="about__heading">
                    {infoObj["PageTitle"] || <Skeleton/>}
                </h2>
            </div>

                <div className="container-fluid bg-light mt-4">
                    <div className="container">
                        <div className="row pt-0">
                            <div className="col">
                                <div className="overflow">
                                    {isLoadingCover?(<><Skeleton height={300}/></>):(<></>)}
                                    <img onLoad={()=>{
                                        setIsLoadingCover(false)
                                    }}
                                    className={`portfolioCoverImage img-fluid d-block m-auto ${isLoadingCover?"hidden":""}`} src={infoObj.CoverPic} alt="cover"/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h4 className="mt-3">
                                    Background
                                </h4>
                                <p>
                                {infoObj["Background"]}
                                </p>
                                {(infoObj.Background2) ?<>
                                <p>
                                {infoObj["Background2"]}
                                </p>
                                </>:<></>}

                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-6">
                                    <h4 className="mt-3">
                                        What I Did
                                    </h4>
                                    <p>
                                    {infoObj["WhatIDid"]}
                                    </p>

                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-6">
                                    <h4 className="mt-3">
                                        What I Learned
                                    </h4>
                                    <p>
                                    {infoObj["WhatILearned"]}
                                    </p>

                                </div>
                            </div>
                            {props.portfolioURL === ("la-cosecha-tortilla")?(<>
                                        <div className="text-center"> <a className="btn btn-primary my-4" role="button" href={"https://lacosechatortillas.com/"} target='_blank' rel="noopener noreferrer">Check Out The Website</a></div>
                            </>):(<></>)}
                            {props.portfolioURL === ("JUST")?(<>
                                        <div className="text-center"> <a className="btn btn-primary my-4" role="button" href={"https://justjournal.org/"} target='_blank' rel="noopener noreferrer">Check Out The Website</a></div>
                            </>):(<></>)}
                            {props.portfolioURL === ("NCJS")?(<>
                                        <div className="text-center"> <a className="btn btn-primary my-4" role="button" href={"https://ncjs.us/"} target='_blank' rel="noopener noreferrer">Check Out The Website</a></div>
                            </>):(<></>)}
                            {props.portfolioURL === ("freesound-website-redesign")?(<>
                                        <div className="text-center"> <a className="btn btn-primary my-4" role="button" href={"https://freesound.org/"} target='_blank' rel="noopener noreferrer">Check Out The Original Website</a></div>
                            </>):(<></>)}
                            {props.portfolioURL === ("university-of-wisconsin-arboretum-website-redesign")?(<>
                                        <div className="row justify-content-center text-center">
                                            <div className="col-sm-3"> 
                                                <a className="btn btn-primary my-4" role="button" href={"https://arboretum.wisc.edu/"} target='_blank' rel="noopener noreferrer">
                                                    Check Out The Original Website
                                                </a>
                                            </div>
                                            <div className="col-sm-3"> 
                                                <a className="btn btn-primary my-4" role="button" href={"https://lujainaj.wixsite.com/arboretum"} target='_blank' rel="noopener noreferrer">
                                                    Check Out The Redesigned Website
                                                </a>
                                            </div>
                                        </div>
                            </>):(<></>)}
                        </div>
                    </div>   

            {showCarousel
            ? <> 
            <div className="container mt-5">
                {(isLoadingCarousel)?(
                    <div className="row text-center">
                        <div className="col">
                            <Skeleton height={500}/>
                        </div>
                    </div>
               ):(<></>)}
            <OnImagesLoaded
                onLoaded={() => {setIsLoadingCarousel(false)}}
                onTimeout={() => {setIsLoadingCarousel(false)}}
                timeout={7000}
            >
            <Carousel fade controls={showCarouselControls} interval={null} className={`${isLoadingCarousel?("hidden"):("")}`}>

                    {CarouselImages.map((picObj, idx) => (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100 carouselImage rounded-top"
                                src={picObj.src}
                                alt="slide"
                            />
                            <Carousel.Caption className={`carouselCaptions rounded-bottom`}>
                                <h3>{picObj.label}</h3>
                                <p>{picObj.desc}</p>
                                <h6 className="fw-light">{idx+1} of {carouselImageLength}</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

            </OnImagesLoaded>
            </div>
            </>
            : <></>}


            {props.portfolioURL === ("custom-implicit-bias-test")?(<>
            <ImplicitBiasTest/>
            </>):(<></>)}

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

function ImplicitBiasTest() {
    return(
        <div className="container-fluid bg-light pb-5">
                <div className="container">
                    <div className="row text-center justify-content-center">
                        <div className="col col-sm-6">
                            <h4 className="mt-3">
                                Video Explanations For Survey
                            </h4>
                            <p>
                                For the survey, I created an Introduction video to welcome the taker of the survey, as well as a video explaining the results of the survey and what they mean
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col col-sm-6">
                            <h4>Introduction Video</h4>
                                <div className="ratio ratio-16x9 youtubeVideo">
                                    <iframe
                                        src="https://www.youtube-nocookie.com/embed/Rt14x7_5C5o"
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    >
                                    </iframe>
                            </div>
                        </div>
                        <div className="col col-sm-6">
                            <h4>Results Video</h4>
                                <div className="ratio ratio-16x9 youtubeVideo">
                                    <iframe
                                        src="https://www.youtube-nocookie.com/embed/3Z7cNFscLgQ"
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
    )
}

export default WebsiteTemplate;