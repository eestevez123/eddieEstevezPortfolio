import React from 'react';

import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} />
        <Content>
            <h1>Thank you for being interested in contacting me!</h1>
            <h3>LinkedIn: <a href="https://www.linkedin.com/in/eduardo-estevez-a63193144/">Eddie Estevez</a></h3>
            <h3>Email: eestevez@wisc.edu </h3>
        </Content>
        </div>
        )
} 

export default HomePage;