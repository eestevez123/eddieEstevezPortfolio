import React, {useState, useEffect} from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


import WebsiteTemplate from "./WebsiteTemplate"
import NotFoundPage from '../../pages/NotFoundPage';
import placeholderImg from "../../images/placeholder.png";


function Template(props) {

    let { portfolioURL } = useParams();

    if (props.sectionValue === 0) {
        return(
            <>
                <WebsiteTemplate portfolioURL={portfolioURL}/>
            </>
        )
    }
} 

export default Template;