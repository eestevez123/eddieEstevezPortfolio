import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from 'axios';
import CONFIG from "../config";

const api = axios.create({
    baseURL: CONFIG.API_ENDPOINT
  })

function SoundTemplate(props) {
    
    let portfolioURL = props.portfolioURL;

    const [isAxiosDone, setIsAxiosDone] = useState(false);

    const [infoObj, setInfoObj] = useState({});
    const [cardObj, setCardObj] = useState({});

    useEffect(() => {
        let source = axios.CancelToken.source()

        async function loadData() {
            try {
                const infoRes = await api.get("/soundsInfo", {cancelToken: source.token})
                const cardRes = await api.get("/soundCards", {cancelToken: source.token})
    
                const websiteInfo = infoRes.data
                const websiteCards = cardRes.data
    
                setInfoObj(websiteInfo[`${portfolioURL}`])
                setCardObj(websiteCards[`${portfolioURL}`])
    
                setIsAxiosDone(true)
            } catch(err) {
                if(!axios.isCancel(err)) {
                    console.log(err)
                    alert("Let Eddie know that his API could not fetch the requested data")
                }
                if(axios.isCancel(err)) console.log("axios async call cancelled")
            }
        }
        loadData()
        return () => {
            source.cancel()
        }
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
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="ratio ratio-16x9 youtubeVideo">
                            <iframe
                                src={infoObj["soundURL"]}
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
                            
            <div className="container-fluid bg-light mt-4">
                <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h4 className="mt-3">
                                    Description
                                </h4>
                                <p>
                                {infoObj["Description"]}
                                </p>

                            </div>
                    </div>
                </div>                
            </div>

            <div className="container mt-5">
                <div className="row text-center m-3">
                    <div className="col mt-5">
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

export default SoundTemplate;