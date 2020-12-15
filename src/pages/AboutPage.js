import React from 'react';

import Hero from "../components/Hero"
import Content from "../components/Content";
import ImageLoad from "../components/ImageLoad"
import eddieEstevez_img from '../images/EddieEstevez.png';

import Row from 'react-bootstrap/Row';

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
        <Row>
        <ImageLoad id="picOfMe_Home" src={eddieEstevez_img} className="mx-auto" onLoad={this.handleImageLoading.bind(this)}/>
        {this.state.imageLoadDone}
        </Row>
        <Content>
        <h3 className="bodyText">My name is Eddie Estevez, and I am an optimistic, extroverted individual. I am currently a Senior at the University of Wisconsin - Madison, majoring in both Computer Science and Computer Engineering, as well as pursuing a certificate within Digital Studies. I love learning in general, as well trying new experiences and exploring cultures. I’m a computer enthusiast who likes to stay updated on the latest trends within software development, but I also enjoy photo and video editing, and just creating digital things in general.

</h3>
        </Content>
        </div>
    )
    }
} 

export default AboutPage;