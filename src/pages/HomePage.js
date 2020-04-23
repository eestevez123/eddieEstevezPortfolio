import React from 'react';
import backgroundPicture from "../images/HomePageBackground.png";
import Image from "react-bootstrap/Image"

import Hero from "../components/Hero";

function HomePage(props) {

    return(
        <div>
        <Hero id="hereOnHomePage" title={props.title} subTitle={props.subTitle} />
        <Image id="homepageBackground" src={backgroundPicture} rounded className="mx-auto" />
        </div>
        )
} 

export default HomePage;