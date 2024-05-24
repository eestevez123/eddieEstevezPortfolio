import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "react-bootstrap/Carousel";
import OnImagesLoaded from "react-on-images-loaded";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

import "./css/Carousel.css";

import { Link } from "react-router-dom";

/**
 * Component representing the template for an application article.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.portfolioURL - The URL of the application portfolio item.
 * @returns {JSX.Element} JSX element representing the template for an article in the application section.
 */
function ApplicationTemplate(props) {
  let portfolioURL = props.portfolioURL;

  const [isLoadingDone, setIsLoadingDone] = useState(false);

  const [infoObj, setInfoObj] = useState({});
  const [cardObj, setCardObj] = useState({});
  const [CarouselImages, setCarouselImages] = useState([]);

  const [isLoadingCover, setIsLoadingCover] = useState(true);
  const [isLoadingCarousel, setIsLoadingCarousel] = useState(true);
  const [showCarousel, setshowCarousel] = useState(false);
  const [showCarouselControls, setshowCarouselControlers] = useState(true);

  useEffect(() => {
    async function loadData() {
      Promise.all([
        import("../data/pageInfo/appInfo.json"),
        import("../data/cards/appCards.json"),
      ]).then(([infoData, cardsData]) => {
        let appInfo = infoData.default;
        setInfoObj(appInfo[`${portfolioURL}`]);

        let appCards = cardsData.default;
        setCardObj(appCards[`${portfolioURL}`]);

        setIsLoadingDone(true);
      });
    }
    loadData();
  }, [portfolioURL]);

  useEffect(() => {
    if (isLoadingDone) setCarouselImages(infoObj.CarouselImages);
  }, [infoObj, isLoadingDone]);

  useEffect(() => {
    const carouselImageLength = CarouselImages.length;
    if (carouselImageLength === 0) {
      setshowCarousel(false);
    } else if (carouselImageLength.length === 1) {
      setshowCarouselControlers(false);
      setshowCarousel(true);
    } else {
      setshowCarousel(true);
    }
  }, [CarouselImages]);

  return (
    <>
      {!isLoadingDone ? (
        <>
          <div className="d-flex justify-content-center">
            <div className="row mt-5">
              <div className="col">
                <div
                  className="spinner-grow text-primary biggerLoadingSpinner"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Helmet>
            <title>{infoObj["PageTitle"]} | Eddie Estevez</title>
            <meta name="description" content={cardObj.desc} />
            <meta
              property="og:title"
              content={`${infoObj["PageTitle"]} | Eddie Estevez`}
            />
            <meta property="og:description" content={cardObj.desc} />
          </Helmet>
          <div className="container">
            <Link to="/mywork">
              <button type="button" className="btn btn-outline-primary m-3">
                Go Back
              </button>
            </Link>

            <h2 className="about__heading">
              {infoObj["PageTitle"] || <Skeleton />}
            </h2>
          </div>

          <div className="container-fluid bg-light mt-4">
            <div className="container">
              <div className="row pt-0">
                <div className="col">
                  <div className="overflow">
                    {isLoadingCover ? (
                      <>
                        <Skeleton height={300} />
                      </>
                    ) : (
                      <></>
                    )}
                    <img
                      onLoad={() => {
                        setIsLoadingCover(false);
                      }}
                      className={`portfolioCoverImage img-fluid d-block m-auto ${isLoadingCover ? "hidden" : ""}`}
                      src={infoObj.CoverPic}
                      alt="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <h4 className="mt-3">Background</h4>
                <p>{infoObj["Background"]}</p>
                {"Background2" in infoObj ? (
                  <>
                    <p>{infoObj["Background2"]}</p>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <h4 className="mt-3">What I Did</h4>
                  <p>{infoObj["WhatIDid"]}</p>

                  {infoObj.WhatIDid_moreParagraphs ? (
                    <>
                      {infoObj.WhatIDid_moreParagraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <h4 className="mt-3">What I Learned</h4>
                  <p>{infoObj["WhatILearned"]}</p>
                </div>
              </div>
            </div>
          </div>

          {showCarousel ? (
            <>
              <div className="container mt-5">
                {isLoadingCarousel ? (
                  <div className="row text-center">
                    <div className="col">
                      <Skeleton height={500} />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <OnImagesLoaded
                  onLoaded={() => {
                    setIsLoadingCarousel(false);
                  }}
                  onTimeout={() => {
                    setIsLoadingCarousel(false);
                  }}
                  timeout={7000}
                >
                  <Carousel
                    controls={showCarouselControls}
                    interval={null}
                    className={`${isLoadingCarousel ? "hidden" : ""} carousel` }
                  >
                    {CarouselImages.map((picObj, idx) => (
                      <Carousel.Item key={idx} className="carousel-item">
                        <div className="carousel-image-container">
                          <img
                            className="d-block w-100 carousel-image rounded-top"
                            src={picObj.src}
                            alt="slide"
                          />
                        </div>

                        <Carousel.Caption
                          className={`carouselCaptions rounded-bottom`}
                        >
                          <h3>{picObj.label}</h3>
                          <p>{picObj.desc}</p>
                          <h6 className="fw-light">
                            {idx + 1} of {CarouselImages.length}
                          </h6>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </OnImagesLoaded>
              </div>
            </>
          ) : (
            <></>
          )}

          {props.portfolioURL === "workout-application" ? (
            <>
              <WorkoutApp />
            </>
          ) : (
            <></>
          )}

          {props.portfolioURL === "ti-tiva-launchpad-games" ? (
            <>
              <TivaLaunchGames />
            </>
          ) : (
            <></>
          )}

          <div className="container">
            <div className="row text-center m-3">
              <div className="col">
                <Link to="/mywork">
                  <button type="button" className="btn btn-outline-primary m-3">
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/**
 * Component representing a demo video and UI testing for the Workout App.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the Workout App details.
 */
function WorkoutApp() {
  return (
    <div className="container-fluid bg-light pb-5 mt-5">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col col-sm-6">
            <h4 className="mt-3">Demo Video</h4>
            <p>
            My teammate, Nick Stoffel, produced a YouTube video showcasing the functionality of the Workout App.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-sm-8">
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/-C8gSs5AIPw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <div className="col col-sm-6">
            <h4 className="mt-5">Automated UI Testing Video</h4>
            <p>
            I successfully created a video demonstrating basic automated UI testing using Espresso.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-sm-8">
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dENFLDzxfic"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Component representing demo videos for Tiva Launchpad Games.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the Tiva Launchpad Games details.
 */
function TivaLaunchGames() {
  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col col-sm-6">
            <h4 className="mt-3">Demo Videos</h4>
            <p>
              Please check out the demo videos I have created for these games!
            </p>
          </div>
        </div>
        <div className="row text-center gy-5">
          <div className="col-12 col-md-6">
            <h4>ECE 210 Game: Bucky @ Space</h4>
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/LaCYWZf_8K8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4>ECE 353 Game: Help Me Get To Target!</h4>
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/TPqzMM9-WxI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationTemplate;
