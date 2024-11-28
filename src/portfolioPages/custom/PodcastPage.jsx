import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

/**
 * Component representing the page where I talk about a podcast project I worked on.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.portfolioURL - The URL of the podcast portfolio item.
 * @returns {JSX.Element} JSX element representing the Podcast page.
 */
function PodcastPage(props) {
  let portfolioURL = props.portfolioURL;

  const [isLoadingDone, setIsLoadingDone] = useState(false);

  const [infoObj, setInfoObj] = useState({});
  const [cardObj, setCardObj] = useState({});

  useEffect(() => {
    async function loadData() {
      Promise.all([
        import("../../data/pageInfo/soundsInfo.json"),
        import("../../data/cards/soundCards.json"),
      ]).then(([infoData, cardsData]) => {
        let soundInfo = infoData.default;
        setInfoObj(soundInfo[`${portfolioURL}`]);

        let soundCards = cardsData.default;
        setCardObj(soundCards[`${portfolioURL}`]);

        setIsLoadingDone(true);
      });
    }
    loadData();
  }, [portfolioURL]);

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
            <div className="top-section">
              <Link to="/mywork">
                <button type="button" className="btn btn-outline-primary m-3">
                  Go Back
                </button>
              </Link>
              <h2 className="about__heading">{infoObj["PageTitle"]}</h2>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 m-5">
                  <ReactPlayer
                    url="https://soundcloud.com/eduardo-estevez-771666676/podcast-about-relationships"
                    controls={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid bg-light mt-4 pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <h4 className="mt-3">Description</h4>
                  <p>{infoObj["Description"]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row text-center mt-5">
              <div className="col mt-5">
                <Link to="/mywork">
                  <button
                    type="button"
                    className="btn btn-outline-primary my-5"
                  >
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

export default PodcastPage;
