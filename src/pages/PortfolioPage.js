import React, {useState} from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

import "./PortfolioPage.css";

import Button from'react-bootstrap/Button';
import ButtonGroup from'react-bootstrap/ButtonGroup';

import Hero from "../components/Hero"
import Cards from '../components/Cards.js';



import Template from '../portfolioFiles/pages/Template';

function PortfolioPage(props) {

    const sectionArray = [
        { name: 'Web Development and Design', value: 0 },
        { name: 'Apps and Software', value: 1 },
        { name: 'Video Work', value: 2 },
        { name: 'Sound Work', value: 3 },
        { name: 'Image Work', value: 4 },
      ];

    const [sectionValue, setSectionValue] = useState(0);

    let { path } = useRouteMatch();

    function mainButtonClick(e) {
        let val = e.target.value
        setSectionValue(parseInt(val))
    }


    return(<>
            <Switch>
                <Route exact path={path}>
                    <Hero title={props.title} className="mb-0"/>
                    <div className="container text-center">
                        <ButtonGroup className="btn-group-justified" name="button" onClick={(e) => mainButtonClick(e)} >
                            {sectionArray.map((button, idx) => (
                            <Button
                                key={idx}
                                id={`button-${button.name}`}
                                type="button"
                                className={sectionValue === button.value ? 'active' : ''}
                                variant="outline-primary"
                                value={button.value}
                            >
                                {button.name}
                            </Button>
                            ))}
                        </ButtonGroup>
                    </div>
                    
                    <Cards section={sectionValue} path={path}/>
                </Route>
                
                <Route path={`${path}/:portfolioURL`}>
                    <Template sectionValue={sectionValue} />
                </Route>
            </Switch>
        </>
    )
} 

export default PortfolioPage;