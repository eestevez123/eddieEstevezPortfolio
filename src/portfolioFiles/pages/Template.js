import React from "react";


import {
    useParams,
    Redirect
  } from "react-router-dom";


// URL validation
import {websiteURLs, appURLs, videoURLs, soundURLs, imageURLs, validWorkURLs, vidGalleryURLs} from "../cards/urlValid.js"


import WebsiteTemplate from "./WebsiteTemplate";
import AppTemplate from "./AppTemplate";
import VideoTemplate from "./VideoTemplate";
import SoundTemplate from "./SoundTemplate";
import PictureTemplate from "./PictureTemplate";

// Custom Pages
import PodcastPage from "./custom/PodcastPage";
import VidGallery from "./custom/VidGallery";



function Template(props) {

    let { portfolioURL } = useParams();

    if (! validWorkURLs.includes(portfolioURL)) {
        return (<>
        <Redirect to="/404" />
        </>)
    }


    if (websiteURLs.includes(portfolioURL)) {
        // Websites
        return(
            <>
                <WebsiteTemplate key={portfolioURL} portfolioURL={portfolioURL}/>
            </>
        )
    } else if (appURLs.includes(portfolioURL)) {
        return (
            <>
                <AppTemplate key={portfolioURL}  portfolioURL={portfolioURL}/>
            </>
        )
    } else if (videoURLs.includes(portfolioURL)) {

        if (vidGalleryURLs.includes(portfolioURL)) return (<><VidGallery  key={portfolioURL} portfolioURL={portfolioURL}/></>)
        else {
            return (<><VideoTemplate key={portfolioURL} portfolioURL={portfolioURL}/></>)
        }

    } else if (soundURLs.includes(portfolioURL)) {
        
        if (portfolioURL === "podcast-about-relationships") return (<><PodcastPage  key={portfolioURL} portfolioURL={portfolioURL}/></>)
        else {
            return (<><SoundTemplate key={portfolioURL} portfolioURL={portfolioURL}/></>)
        }
    } else if (imageURLs.includes(portfolioURL)) {
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
} 

export default Template;