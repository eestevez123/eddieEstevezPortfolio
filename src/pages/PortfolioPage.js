import React, {useState} from 'react';
import ButtonGroup from'react-bootstrap/ButtonGroup';
import Button from'react-bootstrap/Button';
import ToggleButton from'react-bootstrap/ToggleButton';
import ToggleButtonGroup from'react-bootstrap/ToggleButtonGroup';

import Hero from "../components/Hero"
import PortfolioItem from "../components/PortfolioItem";

import Container from 'react-bootstrap/Container'

import Fade from 'react-reveal/Fade';

function PortfolioPage(props) {

    const sectionArray = [
        { name: 'web', value: 0 },
        { name: 'app', value: 1 },
        { name: 'video', value: 2 },
      ];

    const [sectionValue, setSectionValue] = useState(0);
    const [sectionName, setSectionName] = useState(sectionArray[sectionValue].name);

    function mainButtonClick(e) {
        setSectionValue(e)
        setSectionName(sectionArray[e].name)
    }

    


    return(<>
            <Hero title={props.title} className="mb-0"/>
            <Container>
            <Fade Slide>
                <h1>So far I've made...</h1>
                <h2>{sectionName}</h2>
            </Fade>
            </Container>
            <div className="container">
                <ToggleButtonGroup name="button" onChange={(e) => mainButtonClick(e)} >
                    {sectionArray.map((button, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`button-${button.name}`}
                        type="button"
                        variant="outline-primary"
                        name="button"
                        value={button.value}
                    >
                        {button.name}
                    </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            
        </>
    )
} 

export default PortfolioPage;