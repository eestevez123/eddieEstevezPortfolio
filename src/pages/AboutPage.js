import React from 'react';

import Hero from "../components/Hero"
import Content from "../components/Content";


import eddieEstevez_img from '../images/EddieEstevez.jpg';
import eddieEstevez_frame from '../images/EddieEstevezFrame.png';
import blackLineRect from "../images/blackLineRect.svg"

import { Image } from 'react-bootstrap';
import { Frame } from "framer"
import DraggableObject from "../components/DraggableObject";

class AboutPage extends React.Component {


    render(){
        return(
        <div>
        <Hero title={this.props.title} subTitle={this.props.subTitle} className="mb-0"/>
        <Frame id="frameEddieAboutMe" className="mx-avuto">
                <DraggableObject objID = "eddieBlueFrame"
                    isImage={true} 
                    imageObj={eddieEstevez_frame}
                    width={300}
                    height={"auto"}
                    className="mx-auto"
                />
                <Image id="picOfMe_Home" imgAlt="Picture of me, Eddie Estevez" src={eddieEstevez_img} className="mx-auto"/>
            <DraggableObject objID = "blackLineRectAboutPage"
                isImage={true} 
                imageObj={blackLineRect}
                width={300}
                height={300}
            />
        </Frame>
        <Content>
        <h3 className="bodyText">TODO</h3>
        </Content>
        </div>
    )
    }
} 

export default AboutPage;