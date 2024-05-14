import React, { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/**
 * Component representing the template for an article in the picture section.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.portfolioURL - The URL of the picture portfolio item.
 * @returns {JSX.Element} JSX element representing the template for an article in the picture section.
 */
function PictureTemplate(props) {
  let portfolioURL = props.portfolioURL;

  const [isLoadingDone, setIsLoadingDone] = useState(false);

  const [infoObj, setInfoObj] = useState({});
  const [cardObj, setCardObj] = useState({});

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        Promise.all([
          import("../data/pageInfo/imagesInfo.json"),
          import("../data/cards/imageCards.json"),
        ]).then(([infoData, cardsData]) => {
          let imagesData = infoData.default;
          setInfoObj(imagesData[`${portfolioURL}`]);

          let imagesCards = cardsData.default;
          setCardObj(imagesCards[`${portfolioURL}`]);

          setIsLoadingDone(true);
        });
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
    loadData();
  }, [portfolioURL]);

  useEffect(() => {
    if (isLoadingDone) setImageList(infoObj.images);
  }, [infoObj, isLoadingDone]);
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
              <div className="row">
                <div className="col">
                  <div
                    className="rounded"
                    style={{
                      display: "block",
                      minHeight: "1px",
                      width: "100%",
                      border: "2px solid #ddd",
                      overflow: "auto",
                    }}
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
                  <h4 className="mt-3">Description</h4>
                  <p>{infoObj["Description"]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row text-center m-3">
              <div className="col mt-5">
                <Link to="/mywork">
                  <button type="button" className="btn btn-outline-primary m-3">
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}{" "}
    </>
  );
}

export default PictureTemplate;
