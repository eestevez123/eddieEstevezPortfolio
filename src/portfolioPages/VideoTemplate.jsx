import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";

import {
    Link,
  } from "react-router-dom";


/**
 * Component representing the template for an article in the video section.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.portfolioURL - The portfolio URL for video article information
 * @returns {JSX.Element} JSX element representing the template for an article in the video section.
 */
function VideoTemplate(props) {
    
    let portfolioURL = props.portfolioURL;

    const [isLoadingDone, setIsLoadingDone] = useState(false);

    const [infoObj, setInfoObj] = useState({});
    const [cardObj, setCardObj] = useState({});

    useEffect(() => {
        async function loadData() {
            Promise.all([
                import('../data/pageInfo/videoInfo.json'),
                import('../data/cards/videoCards.json')
              ])
                .then(([infoData, cardsData]) => {
                    let videoInfo = infoData.default;
                    setInfoObj(videoInfo[`${portfolioURL}`])
                    
                    let videoCards = cardsData.default;
                    setCardObj(videoCards[`${portfolioURL}`])

                    setIsLoadingDone(true);
                });
        }
        loadData();
    }, [portfolioURL] )

        return(
            <>
        {(!isLoadingDone)?(<>
            
            <div className="d-flex justify-content-center">
            <div className="row mt-5">
                <div className="col">
                    <div className="spinner-grow text-primary biggerLoadingSpinner" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            </div>
        </div>

            </>) : 
        (<>
            <Helmet>
                <title>{infoObj["PageTitle"]} | Eddie Estevez</title>
                <meta name="description" content={cardObj.desc}/>
                <meta property="og:title" 
                    content={`${infoObj["PageTitle"]} | Eddie Estevez`}
                />
                <meta property="og:description" 
                    content={cardObj.desc}
                />
            </Helmet>
            <div className="container">
                <div className="top-section">
                <Link to ="/mywork">
                    <button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                </Link>
                    <h2 className="about__heading">
                        {infoObj["PageTitle"]}
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col col-sm-8">
                            <div className="ratio ratio-16x9 youtubeVideo">
                            <iframe
                                src={infoObj["videoURL"]}
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
                                {props.portfolioURL === ("a-midlife-crisis-but-in-college")?(<>
                                        <div className="text-center"> <a className="btn btn-primary my-4" role="button" href={"https://designlab.wisc.edu/a-midlife-crisis-but-in-college-by-eddie-estevez/"} target='_blank' rel="noopener noreferrer">Check Out The Digital Salon Page for this video</a></div>
                            </>):(<></>)}
                            </div>
                    </div>
                </div>                
            </div>

            <div className="container">
                <div className="row text-center m-3">
                    <div className="col">
                    <Link to ="/mywork">
                    <   button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                    </Link>
                    </div>
                </div>
            </div>
    </>)} </>
    )
    
} 

export default VideoTemplate;