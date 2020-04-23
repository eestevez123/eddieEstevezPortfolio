import React from 'react';
import Image from "react-bootstrap/Image"

import Hero from "../components/Hero"
import Content from "../components/Content";

import VideoLink from '../images/Video.png';
import SoftwareLink from '../images/Software.png';
import DigitalLink from '../images/Digital.png';

import Row from 'react-bootstrap/Row';

function PortfolioPage(props) {

    return(<>
            <Hero title={props.title} className="mb-0"/>
            <Content>
                <h4 className="ml-3 mt-3">Go ahead and click on one of the following buttons to check out what I've made so far!</h4>
                <Row><Image src={VideoLink} rounded className="mx-auto logoLink"/></Row>
                <Row><Image src={SoftwareLink} rounded className="mx-auto logoLink" /></Row>
                <Row><Image src={DigitalLink} rounded className="mx-auto logoLink" /></Row>
            </Content>
        </>
    )
} 

export default PortfolioPage;