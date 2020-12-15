import React from 'react';
import blackLineRect from "../images/blackLineRect.svg";
import Image from "react-bootstrap/Image"

import { Frame } from "framer"
import { motion } from "framer-motion"

import Hero from "../components/Hero";
import DraggableObject from "../components/DraggableObject";

const InteractiveDiv = () => (
    <Frame id="interactiveDivHomePage">
        <DraggableObject objID = "greenCircleHomePage"
        isImage={false}
        width={150}
        height={150}
        borderRadius = "100%"
        backgroundColor="#21eaaf"
        />
        <DraggableObject objID = "blueCircleHomePage"
        isImage={false}
        width={150}
        height={150}
        borderRadius = "100%"
        backgroundColor="#2196f3"
        />
        <DraggableObject objID = "purpleCircleHomePage"
        isImage={false}
        width={150}
        height={150}
        borderRadius = "100%"
        backgroundColor="#672fd9"
        />

        <DraggableObject objID = "blueRectangeHomePage"
        isImage={false}
        width={200}
        height={150}
        borderRadius = {0}
        backgroundColor="#2196f3"
        />
        <DraggableObject objID = "greenRectangeHomePage"
        isImage={false}
        width={200}
        height={150}
        borderRadius = {0}
        backgroundColor="#21eaaf"
        />


        <DraggableObject objID = "blackLineRectHomePage"
        isImage={true} 
        imageObj={blackLineRect}
        width={150}
        height={150}
        />
        <DraggableObject objID = "blackLineRectHomePage2"
        isImage={true} 
        imageObj={blackLineRect}
        width={150}
        height={150}
        />
    </Frame>
)

function HomePage(props) {

    return(
        <div>
        <Hero id="hereOnHomePage" title={props.title} subTitle={props.subTitle} />
        <InteractiveDiv/>
        </div>
        )
} 

export default HomePage;