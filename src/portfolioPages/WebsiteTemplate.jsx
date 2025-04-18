import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "react-bootstrap/Carousel";
import OnImagesLoaded from "react-on-images-loaded";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./css/Carousel.css";

import { Link } from "react-router";

/**
 * Component representing the template for an article in the website section.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.portfolioURL - The portfolio URL for website article information
 * @returns {JSX.Element} JSX element representing the template for an article in the website section.
 */
function WebsiteTemplate(props) {
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
        import("../data/pageInfo/websiteInfo.json"),
        import("../data/cards/websiteCards.json"),
      ]).then(([infoData, cardsData]) => {
        let websiteInfo = infoData.default;
        setInfoObj(websiteInfo[`${portfolioURL}`]);

        let websiteCards = cardsData.default;
        setCardObj(websiteCards[`${portfolioURL}`]);

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
              {props.portfolioURL === "personal-site" ? (
                <>
                  <div className="text-center">
                    <a href="https://github.com/eestevez123/eddieEstevezPortfolio" target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-primary my-4" type="button">
                        Github Repository
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="col-sm-6">
                <h4 className="mt-3">Background</h4>
                <p>{infoObj["Background"]}</p>
                {infoObj.Background2 ? (
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
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <h4 className="mt-3">What I Learned</h4>
                  <p>{infoObj["WhatILearned"]}</p>
                </div>
              </div>
              {props.portfolioURL === "la-cosecha-tortilla" ? (
                <>
                  <div className="text-center">
                    {" "}
                    <a
                      className="btn btn-primary my-4"
                      role="button"
                      href={"https://lacosechatortillas.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Out The Website
                    </a>
                  </div>
                </>
              ) : (
                <></>
              )}
              {props.portfolioURL === "JUST" ? (
                <>
                  <div className="text-center">
                    {" "}
                    <a
                      className="btn btn-primary my-4"
                      role="button"
                      href={"https://justjournal.org/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Out The Website
                    </a>
                  </div>
                </>
              ) : (
                <></>
              )}
              {props.portfolioURL === "NCJS" ? (
                <>
                  <div className="text-center">
                    {" "}
                    <a
                      className="btn btn-primary my-4"
                      role="button"
                      href={"https://ncjs.us/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check Out The Currently Website (now known as International Collegiate Journal of Science)
                    </a>
                  </div>
                </>
              ) : (
                <></>
              )}
              {props.portfolioURL === "freesound-website-redesign" ? (
                <>
                  <div className="text-center">
                    {" "}
                    <a
                      className="btn btn-primary my-4"
                      role="button"
                      href={"https://web.archive.org/web/20210212075403/https://freesound.org/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check out the original design
                    </a>
                  </div>
                  <div className="text-center">
                    {" "}
                    <a
                      className="btn btn-primary my-4"
                      role="button"
                      href={"https://freesound.org/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check out the current website (might look familiar 😉)
                    </a>
                  </div>
                </>
              ) : (
                <></>
              )}
              {props.portfolioURL ===
              "university-of-wisconsin-arboretum-website-redesign" ? (
                <>
                  <div className="row justify-content-center text-center">
                    <div className="col-sm-3">
                      <a
                        className="btn btn-primary my-4"
                        role="button"
                        href={"https://arboretum.wisc.edu/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check Out The Original Website
                      </a>
                    </div>
                    <div className="col-sm-3">
                      <a
                        className="btn btn-primary my-4"
                        role="button"
                        href={"https://lujainaj.wixsite.com/arboretum"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check Out The Redesigned Website
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>

          {showCarousel ? (
            <>
              <div className="container mt-5 carousel-container">
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

          {props.portfolioURL === "custom-implicit-bias-test" ? (
            <>
              <ImplicitBiasTest />
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
 * Component representing the template used for the article talking about the Implicit Bias Test project
 *
 * @component
 * @returns {JSX.Element} JSX element representing the component.
 */
function ImplicitBiasTest() {
  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col col-sm-6">
            <h4 className="mt-3">Video Explanations For The Survey</h4>
            <p>
              For the survey, I created an Introduction video to welcome the
              taker of the survey, as well as a video explaining the results of
              the survey and what they mean
            </p>
          </div>
        </div>
        <div className="row text-center gy-5">
          <div className="col-12 col-md-6">
            <h4>Introduction Video</h4>
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Rt14x7_5C5o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="co-12 col-md-6">
            <h4>Results Video</h4>
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/3Z7cNFscLgQ"
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

export default WebsiteTemplate;
