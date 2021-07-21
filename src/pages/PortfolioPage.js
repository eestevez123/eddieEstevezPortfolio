import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


import ToggleButton from'react-bootstrap/ToggleButton';
import ToggleButtonGroup from'react-bootstrap/ToggleButtonGroup';

import Hero from "../components/Hero"
import Cards from '../components/Cards.js';


import Container from 'react-bootstrap/Container'
import Template from '../portfolioFiles/pages/Websites/Template';

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

    let { path, url } = useRouteMatch();
    console.log("path", path)
    console.log("url", url)

    function mainButtonClick(e) {
        setSectionValue(e)
        setSectionName(sectionArray[e].name)
    }


    return(<>
            <Hero title={props.title} className="mb-0"/>

            <Route exact path={path}>
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
                    <h1>{sectionName} </h1>
                </Container>
                
                <Cards section={sectionValue} url={url} path={path}/>
            </Route>
            
            <Route path={`${path}/?portfolioURL`}>
                <Template />
            </Route>
        </>
    )
} 

export default PortfolioPage;