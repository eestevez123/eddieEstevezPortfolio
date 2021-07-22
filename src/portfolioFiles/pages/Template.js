import React, {useState, useEffect} from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


import WebsiteTemplate from "./WebsiteTemplate";
import AppTemplate from "./AppTemplate";
import VideoTemplate from "./VideoTemplate";
import SoundTemplate from "./SoundTemplate";
import PictureTemplate from "./PictureTemplate";

// Custom Pages
import PodcastPage from "./custom/PodcastPage";

import NotFoundPage from '../../pages/NotFoundPage';
import placeholderImg from "../../images/placeholder.png";



function Template(props) {

    let { portfolioURL } = useParams();

    if (props.sectionValue === 0) {
        // Websites
        return(
            <>
                <WebsiteTemplate portfolioURL={portfolioURL}/>
            </>
        )
    } else if (props.sectionValue === 1) {
        // Applications
        return (
            <>
                <AppTemplate portfolioURL={portfolioURL}/>
            </>
        )
    } else if (props.sectionValue === 2) {
        // Videos
        return (
            <>
                <VideoTemplate portfolioURL={portfolioURL}/>
            </>
        )
    } else if (props.sectionValue === 3) {
        // Sounds
        if (portfolioURL === "podcast-about-relationships") {
            return (<><PodcastPage portfolioURL={portfolioURL}/></>)
        } else {
            return (<><SoundTemplate portfolioURL={portfolioURL}/></>)
        }
    } else if (props.sectionValue === 4) {
        // Photos
        return (<><PictureTemplate portfolioURL={portfolioURL}/></>)
    } else {
        return (<><NotFoundPage /></>)
    }
} 

export default Template;