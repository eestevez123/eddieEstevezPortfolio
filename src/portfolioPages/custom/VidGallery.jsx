import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from 'axios';

const api = axios.create({
    baseURL: `https://eddie-estevez-portfolio-api.herokuapp.com/`
  })

function VidGallery(props) {
    
    let portfolioURL = props.portfolioURL;

    const [isAxiosDone, setIsAxiosDone] = useState(false);

    const [infoObj, setInfoObj] = useState({});
    const [cardObj, setCardObj] = useState({});

    useEffect(() => {
        async function loadData() {
            const infoRes = await api.get("/videoInfo")
            const cardRes = await api.get("/videoCards")

            const websiteInfo = infoRes.data
            const websiteCards = cardRes.data

            setInfoObj(websiteInfo[`${portfolioURL}`])
            setCardObj(websiteCards[`${portfolioURL}`])

            setIsAxiosDone(true)
        }
        loadData()
    }, [portfolioURL] )
    

        return(
        <>
            {(!isAxiosDone)?(<>
                <div className="d-flex justify-content-center">
            <div className="row mt-5">
                <div className="col">
                    <div className="spinner-grow text-primary biggerLoadingSpinner" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            </div>
        </div>
            
            </>):(
                <>
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
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="mt-5 mb-5">
                            {infoObj["Description"]}
                        </p>
                        {props.portfolioURL === ("videos-for-uw-madison-memes-for-milk-chugging-teens")?(<>
                                        <div className="text-center"> <a className="btn btn-primary mb-5" role="button" href={"https://www.facebook.com/groups/175526726305977"} target='_blank' rel="noopener noreferrer">Check Out the UW-Madison Memes for Milk-Chugging Teens Facebook Page</a></div>
                            </>):(<></>)}
                    </div>
                </div>
            </div>


            {infoObj["sections"].map((sectionObj, idx) => (
                <div key={idx} className={`container-fluid py-3 ${(idx % 2 === 0)?("bg-light"):("")}`}>
                    <div className="container">
                        <h2>{sectionObj.sectionTitle}</h2>
                        <p>{sectionObj.sectionDesc}</p>
                        <div className= "row row-cols-1 row-cols-md-2 gx-5">
                            {sectionObj["videoURLs"].map((videoObj) => (
                                <div className="col text-center mb-5" key={videoObj.videoID}>
                                    <h4>{videoObj.title}</h4>
                                    <p>{videoObj.desc}</p>
                                    <div className="ratio ratio-16x9 youtubeVideo">
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${videoObj.videoID}`}
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                        >
                                        </iframe>
                                    </div>
                                </div>
                                )
                            )}
                    </div>
                </div>  
                </div>
                ) 
            )}



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
            )}
    </>
    )
    
} 

export default VidGallery;