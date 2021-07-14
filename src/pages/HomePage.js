import React from 'react';

import Hero from "../components/Hero";
import InteractiveShapes from "../components/InteractiveShapes";

import Slide from 'react-reveal/Slide';

function HomePage(props) {

    return(
        <div>
        <Hero id="hereOnHomePage" title={props.title}/>
        <Slide bottom>
            <InteractiveShapes id="interactiveShapes"/>
        </Slide>
        </div>
        )
} 

export default HomePage;