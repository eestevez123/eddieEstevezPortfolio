import React from 'react';
import Image from "react-bootstrap/Image"

import Hero from "../components/Hero"
import Content from "../components/Content";
import eddieEstevez_img from '../images/EddieEstevez.png';

import Row from 'react-bootstrap/Row';

function AboutPage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} className="mb-0"/>
        <Row>
        <Image id="picOfMe_Home" src={eddieEstevez_img} rounded className="mx-auto" />
        </Row>
        <Content>
        <h3>My name is Eddie Estevez, and I am an optimistic, extroverted individual. 
            I am currently a student at the University of Wisconsin - Madison,  majoring in both Computer 
            Science and Computer Engineering. I love learning in general, as well trying new experiences and 
            exploring cultures. Not only am I a computer enthusiast as well like to stay updated on the latest 
            trends within software development, but I also enjoy photo and video editing.</h3>
        </Content>
        </div>
    )
} 

export default AboutPage;