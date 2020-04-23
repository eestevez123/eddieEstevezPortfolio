import React from 'react';
import Image from "react-bootstrap/Image"

import Hero from "../components/Hero"
import Content from "../components/Content";
import eddieEstevez_img from '../images/EddieEstevez.jpg';

function AboutPage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} />
        <Content>
        <Image id="picOfMe_Home" src={eddieEstevez_img} rounded sm={8} />
        <h2>My name is Eduardo Estevez, and I am an optimistic, extroverted individual. 
            I am currently a student at the University of Wisconsin - Madison,  majoring in both Computer 
            Science and Computer Engineering. I love learning in general, as well trying new experiences and 
            exploring cultures. Not only am I a computer enthusiast as well like to stay updated on the latest 
            trends within software development, but I also enjoy photo and video editing.</h2>
        </Content>
        </div>
    )
} 

export default AboutPage;