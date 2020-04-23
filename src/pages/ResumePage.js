import React from 'react';

import Hero from "../components/Hero"
import Content from "../components/Content";

function ResumePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} />
        <Content>
        <h2>All you have to do is click <a href="http://pages.cs.wisc.edu/~estevez-jr/resume/Eddie_Resume.pdf">here</a>.</h2>
        </Content>
        </div>
    )
} 

export default ResumePage;