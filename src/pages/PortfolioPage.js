import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import { motion } from "framer-motion"

import Hero from "../components/Hero"
import Content from "../components/Content";
import PortfolioItem from "../components/PortfolioItem";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function PortfolioPage(props) {

    // const history = useHistory();
    // const handleOnClick = useCallback((title) => history.push("/portfolio/"+title), [history]);


    return(<>
            <Hero title={props.title} className="mb-0"/>
            <Content>
            <Fade Slide>
                <h1>So far I've made...</h1>
            </Fade>
                <PortfolioItem  Title="Websites" buttonColor="#21eaaf"/> 
                <PortfolioItem  Title="Applications" buttonColor="#672fd9"/>
                <PortfolioItem  Title="Videos" buttonColor="#2196f3"/>
            
            {/* <Fade left>
                <h1 id="subTextPortfolio2">I've also gotten pretty good at using the Adobe Creative Apps!</h1>
            </Fade>
            <Slide bottom>
            <Container id ="adobeAppContainer">
            <Row id="adobeAppContainerRow">
            
                <Col onClick={()=>handleOnClick("Photoshop")} className="adobeAppContainerCol PhotoShop"><motion.div whileHover={{ scale: 1.2 }}>PhotoShop</motion.div></Col>
                <Col onClick={()=>handleOnClick("Premire")}className="adobeAppContainerCol Premiere"><motion.div whileHover={{ scale: 1.2 }}>Premire Pro</motion.div></Col>
                <Col onClick={()=>handleOnClick("Aftereffects")} className="adobeAppContainerCol AfterE"><motion.div whileHover={{ scale: 1.2 }}>After Effects</motion.div></Col>
                <Col onClick={()=>handleOnClick("Audition")}className="adobeAppContainerCol Audition"><motion.div whileHover={{ scale: 1.2 }}>Audtion</motion.div></Col>
            </Row>
            </Container>
            </Slide> */}

            </Content>
        </>
    )
} 

export default PortfolioPage;