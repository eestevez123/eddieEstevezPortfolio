import React, {useState, useEffect} from "react";
import axios from 'axios';

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

const api = axios.create({
    baseURL: `https://eddie-estevez-portfolio-api.herokuapp.com/`
  })


function Template(props) {
    const [doneLoading, setDoneLoading] = useState(false)
    const [cardURLs, setCardURLs] = useState({})
    
    
    useEffect(() => {
        let source = axios.CancelToken.source()

        async function loadData() {
        try {
            const res = await api.get("/cardURLs", {cancelToken: source.token})
            setCardURLs(res.data)
            setDoneLoading(true)

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
    },[])

    let { portfolioURL } = useParams();

    if (doneLoading) {
        if (! cardURLs.validWorkURLs.includes(portfolioURL)) {
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