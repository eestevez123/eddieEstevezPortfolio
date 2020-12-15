import React from 'react';
import Image from "react-bootstrap/Image"


import Hero from "../components/Hero"
import Content from "../components/Content";

import LIS_500 from '../images/lis500.png';
import ThisWebSite from '../images/reactPortfolio.png';


function WebsitePorts(props) {
        return(<>
                <Hero title={props.title} className="mb-0"/>
                <Content id="software">
                <h3 className="mt-5">An Implicit Bias Test</h3>
                <Image id="lis500_pic" src={LIS_500} rounded className="mx-auto" />
                <h5> This website was created for LIS 500. The assignment was to work with 3 other students in the
                     class to create a survey that was similar to the Harvard Implicit Bias Test. My partners and I came up with the questions within 
                     the survey, how the results would be calculated, the design the website, as well as the backend in order to keep track of the overall 
                     results of survey takers.</h5>

                <h3 className="mt-5">This Website</h3>
                <Image id="thisSite_pic" src={ThisWebSite} rounded className="mx-auto" />
                <h5>This website was built from the ground-up using React. The advantage of building out your own website is that it allows you to 
                    fine-tune how you want your content to be displayed as well as allows you to install packages from anywhere and anyone.
                </h5>
                </Content>
        </>
        )
} 

export default WebsitePorts;