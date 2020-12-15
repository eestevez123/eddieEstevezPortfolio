import React from 'react';

import Hero from "../components/Hero"
import Content from "../components/Content";
import ImageLoad from "../components/ImageLoad"


import eddieEstevez_img from '../images/EddieEstevez.jpg';
import eddieEstevez_frame from '../images/EddieEstevezFrame.png';
import blackLineRect from "../images/blackLineRect.svg"

import Pulse from 'react-reveal/Pulse';
import { Frame } from "framer"
import DraggableObject from "../components/DraggableObject";

class AboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageLoadDone: false
        }
    }

    handleImageLoading() {
        this.setState({
            imageLoadDone: true
        })
    }

    render(){
        return(
        <div>
        <Hero title={this.props.title} subTitle={this.props.subTitle} className="mb-0"/>
        <Frame id="frameEddieAboutMe" className="mx-auto">
                <DraggableObject objID = "eddieBlueFrame"
                    isImage={true} 
                    imageObj={eddieEstevez_frame}
                    width={300}
                    height={"auto"}
                    className="mx-auto"
                />
            <Pulse>
                <ImageLoad id="picOfMe_Home" src={eddieEstevez_img} className="mx-auto" onLoad={this.handleImageLoading.bind(this)}/>
            </Pulse>
            <DraggableObject objID = "blackLineRectAboutPage"
                isImage={true} 
                imageObj={blackLineRect}
                width={300}
                height={300}
            />
        </Frame>
        <Content>
        <h3 className="bodyText">My name is Eddie Estevez, and I am an optimistic, extroverted individual. I am currently a Senior at the University of Wisconsin - Madison, majoring in both Computer Science and Computer Engineering, as well as pursuing a certificate within Digital Studies. I love learning in general, as well trying new experiences and exploring cultures. I’m a computer enthusiast who likes to stay updated on the latest trends within software development, but I also enjoy photo and video editing, and just creating digital things in general.

</h3>
        </Content>
        </div>
    )
    }
} 

export default AboutPage;