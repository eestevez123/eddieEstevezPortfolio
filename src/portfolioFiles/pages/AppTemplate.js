import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'
import OnImagesLoaded from 'react-on-images-loaded';
import Skeleton from 'react-loading-skeleton';


import {
    Link,
  } from "react-router-dom";


import {appInfo} from "../pageInfo/appInfo.js"


function ApplicationTemplate(props) {
    
    let portfolioURL = props.portfolioURL;
    let infoObj = appInfo.find(o => o.id === portfolioURL);
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
                                {("Background2" in infoObj) ?<>
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
                        <Carousel.Item id={idx}>
                            <img
                                className="d-block w-100 carouselImage"
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

            {props.portfolioURL === ("workout-application")?(<><WorkoutApp/></>):(<></>)}

            {props.portfolioURL === ("ti-tiva-launchpad-games")?(<><TivaLaunchGames/></>):(<></>)}



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

function WorkoutApp() {
    return(
        <div className="container-fluid bg-light pb-5 mt-5">
        <div className="container">
            <div className="row text-center justify-content-center">
                <div className="col col-sm-6">
                    <h4 className="mt-3">
                        Demo Video
                    </h4>
                    <p>
                       My team member Nick Stoffel created a YouTube Video demoing the Workout App
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-sm-8">
                        <div class="ratio ratio-16x9 youtubeVideo">
                            <iframe
                                src="https://youtube.com/embed/-C8gSs5AIPw"
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            >
                            </iframe>
                    </div>
                </div>
            </div>
            <div className="row text-center justify-content-center">
                <div className="col col-sm-6">
                    <h4 className="mt-5">
                        Automated UI Testing Video
                    </h4>
                    <p>
                       I was able to create a video showing some basic automated UI testing via Espresso
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-sm-8">
                        <div class="ratio ratio-16x9 youtubeVideo">
                            <iframe
                                src="https://youtube.com/embed/dENFLDzxfic"
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            >
                            </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

function TivaLaunchGames() {
    return(
        <div className="container-fluid bg-light pb-5">
                <div className="container">
                    <div className="row text-center justify-content-center">
                        <div className="col col-sm-6">
                            <h4 className="mt-3">
                                Demo Videos
                            </h4>
                            <p>
                                Please check out the demo videos I have created for these games!
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col col-sm-6">
                            <h4>ECE 210 Game: Bucky @ Space</h4>
                                <div class="ratio ratio-16x9 youtubeVideo">
                                    <iframe
                                        src="https://youtube.com/embed/LaCYWZf_8K8"
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                    >
                                    </iframe>
                            </div>
                        </div>
                        <div className="col col-sm-6">
                            <h4>ECE 353 Game: Help Me Get To Target!</h4>
                                <div class="ratio ratio-16x9 youtubeVideo">
                                    <iframe
                                        src="https://youtube.com/embed/TPqzMM9-WxI"
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                    >
                                    </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ApplicationTemplate;