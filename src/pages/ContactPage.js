import React from 'react';

import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} />
        <Content className="mb-50">
            <h1 className="mb-10">Thank you for being interested in contacting me!</h1>
            <h3>LinkedIn <div><a href="https://www.linkedin.com/in/eduardo-estevez-a63193144/">Eddie Estevez</a></div></h3>
            <h3>Email <div style={{color: "#007bff"}} >eestevez@wisc.edu </div> </h3>
            <h3>Phone Number <div style={{color: "#007bff"}} > (414) 628-4171 </div> </h3>
        </Content>
        </div>
        )
} 

export default HomePage;
