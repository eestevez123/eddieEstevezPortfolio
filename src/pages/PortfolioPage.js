import React from 'react';
import Image from "react-bootstrap/Image"
import {Link} from "react-router-dom";

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
                <h4>Go ahead and click on one of the following buttons to check out what I've made so far!</h4>
                <Row><Link className="nav-link" to ="/portfolio/Video"><Image src={VideoLink} rounded className="logoLink"/></Link></Row>
                <Row><Link className="nav-link" to ="/portfolio/Software"><Image src={SoftwareLink} rounded className="logoLink"/></Link></Row>
                <Row><Link className="nav-link" to ="/portfolio/DigitalContent"><Image src={DigitalLink} rounded className="logoLink"/></Link></Row>
            </Content>
        </>
    )
} 

export default PortfolioPage;