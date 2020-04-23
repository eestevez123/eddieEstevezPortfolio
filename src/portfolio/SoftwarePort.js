import React from 'react';
import Image from "react-bootstrap/Image"


import Hero from "../components/Hero"
import Content from "../components/Content";

import LIS_500 from '../images/lis500.png';
import ThisWebSite from '../images/reactPortfolio.png';


function SoftwarePort(props) {
        return(<>
                <Hero title={props.title} className="mb-0"/>
                <Content id="software">
                <h3 className="mt-5">An Implicit Bias Test</h3>
                <Image id="lis500_pic" src={LIS_500} rounded className="mx-auto" />
                <h5><a href="http://pedro-ingrid-clare-eddie.raroyston.org/">Link</a></h5>
                <h5> This website was created for LIS 500. The assignment was to work with 3 other students in the class
                    to create a survery that was similar to the Harvard Implicit Bias Test. My partners and I 
                    came up with the questions within the survey, how the results would be calculated, the design the website, as well
                    as the backend in order to keep track of the overall results of survery takers. </h5>

                <h3 className="mt-5">This Website</h3>
                <Image id="thisSite_pic" src={ThisWebSite} rounded className="mx-auto" />
                <h5>This Website was built in scratch by me. This React Web application heavily uses the advantages of having react, such 
                    as state management, as well as the Node JS, including all the packages available on the Node Package Manager.
                </h5>
                </Content>
        </>
        )
} 

export default SoftwarePort;