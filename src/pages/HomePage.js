import React from 'react';


import Hero from "../components/Hero";
import Content from "../components/Content";

function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} />
        <Content>
        </Content>
        </div>
        )
} 

export default HomePage;