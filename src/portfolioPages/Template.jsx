import React, {useState, useEffect} from "react";

import {
    useParams,
    Redirect
  } from "react-router-dom";

// Template Pages
import WebsiteTemplate from "./WebsiteTemplate";
import AppTemplate from "./AppTemplate";
import VideoTemplate from "./VideoTemplate";
import SoundTemplate from "./SoundTemplate";
import PictureTemplate from "./PictureTemplate";

// Custom Pages
import PodcastPage from "./custom/PodcastPage";
import VidGallery from "./custom/VidGallery";


function Template(props) {
    const [doneLoading, setDoneLoading] = useState(false)
    const [cardURLs, setCardURLs] = useState({})
    
    
    useEffect(() => {
        async function loadData() {            
            import('../data/cardURLs.json').then(data => {
                setCardURLs(data.default);
                setDoneLoading(true)
            });
        }
        loadData()
    },[])

    let { portfolioURL } = useParams();

    if (doneLoading) {
        if (!cardURLs.validWorkURLs.includes(portfolioURL)) {
            return (<>
            <Redirect to="/404" />
            </>)
        }
    
    
        if (cardURLs.websiteURLs.includes(portfolioURL)) {
            // Websites
            return(
                <>
                    <WebsiteTemplate key={portfolioURL} portfolioURL={portfolioURL}/>
                </>
            )
        } else if (cardURLs.appURLs.includes(portfolioURL)) {
            return (
                <>
                    <AppTemplate key={portfolioURL}  portfolioURL={portfolioURL}/>
                </>
            )
        } else if (cardURLs.videoURLs.includes(portfolioURL)) {
    
            if (cardURLs.vidGalleryURLs.includes(portfolioURL)) return (<><VidGallery  key={portfolioURL} portfolioURL={portfolioURL}/></>)
            else {
                return (<><VideoTemplate key={portfolioURL} portfolioURL={portfolioURL}/></>)
            }
    
        } else if (cardURLs.soundURLs.includes(portfolioURL)) {
            
            if (portfolioURL === "podcast-about-relationships") return (<><PodcastPage  key={portfolioURL} portfolioURL={portfolioURL}/></>)
            else {
                return (<><SoundTemplate key={portfolioURL} portfolioURL={portfolioURL}/></>)
            }
        } else if (cardURLs.imageURLs.includes(portfolioURL)) {
            return (
                <>
                    <PictureTemplate key={portfolioURL}  portfolioURL={portfolioURL}/>
                </>
            )
        } else {
            return (<>
                <Redirect to="/404" />
                </>)
        }
    } else {
        return(
            <div className="d-flex justify-content-center">
                <div className="row mt-5">
                    <div className="col">
                        <div className="spinner-grow text-primary biggerLoadingSpinner" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    
} 

export default Template;