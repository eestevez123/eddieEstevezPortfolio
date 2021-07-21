import React, {useState} from 'react';
import ToggleButton from'react-bootstrap/ToggleButton';
import ToggleButtonGroup from'react-bootstrap/ToggleButtonGroup';

import Hero from "../components/Hero"
import Cards from '../components/Cards.js';


import Container from 'react-bootstrap/Container'

import Fade from 'react-reveal/Fade';

function PortfolioPage(props) {




    const sectionArray = [
        { name: 'Websites', value: 0 },
        { name: 'Applications', value: 1 },
        { name: 'Videos', value: 2 },
        { name: 'Sound Edits', value: 3 },
        { name: 'Image Edits', value: 4 },
      ];

    const [sectionValue, setSectionValue] = useState(0);
    const [sectionName, setSectionName] = useState(sectionArray[sectionValue].name);

    function mainButtonClick(e) {
        setSectionValue(e)
        setSectionName(sectionArray[e].name)
    }


    return(<>
            <Hero title={props.title} className="mb-0"/>
            <div className="container text-center">
                <ToggleButtonGroup className="btn-group-justified" name="button" onChange={(e) => mainButtonClick(e)} >
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
            <Container>
            <Fade Slide>
                <h1>{sectionName} </h1>
            </Fade>
            </Container>
            
            <Cards section={sectionValue} />
        </>
    )
} 

export default PortfolioPage;