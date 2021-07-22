import React, {useState, useEffect} from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
  } from "react-router-dom";


// URL validation
import {websiteURLs, appURLs, videoURLs, soundURLs, imageURLs, validWorkURLs} from "../cards/urlValid.js"


import WebsiteTemplate from "./WebsiteTemplate";
import AppTemplate from "./AppTemplate";
import VideoTemplate from "./VideoTemplate";
import SoundTemplate from "./SoundTemplate";
import PictureTemplate from "./PictureTemplate";

// Custom Pages
import PodcastPage from "./custom/PodcastPage";

import NotFoundPage from '../../pages/NotFoundPage';



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
                <WebsiteTemplate portfolioURL={portfolioURL}/>
            </>
        )
    } else if (appURLs.includes(portfolioURL)) {
        return (
            <>
                <AppTemplate portfolioURL={portfolioURL}/>
            </>
        )
    } else if (videoURLs.includes(portfolioURL)) {
        return (
            <>
                <VideoTemplate portfolioURL={portfolioURL}/>
            </>
        )
    } else if (soundURLs.includes(portfolioURL)) {
        
        if (portfolioURL === "podcast-about-relationships") {
            return (<><PodcastPage portfolioURL={portfolioURL}/></>)
        } else {
            return (<><SoundTemplate portfolioURL={portfolioURL}/></>)
        }
    } else if (imageURLs.includes(portfolioURL)) {
        return (
            <>
                <PictureTemplate portfolioURL={portfolioURL}/>
            </>
        )
    } else {
        return (<>
            <Redirect to="/404" />
            </>)
    }
} 

export default Template;