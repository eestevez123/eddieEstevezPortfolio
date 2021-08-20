import React, {useState, useEffect} from 'react';
import {useSpring, animated as a , config} from 'react-spring';
import {Helmet} from "react-helmet-async";
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

import "./PortfolioPage.css";

import Button from'react-bootstrap/Button';
import ButtonGroup from'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import Hero from "../components/Hero"
import Cards from '../components/Cards';



import Template from '../portfolioPages/Template';

function PortfolioPage(props) {

    const windowWidth = useWindowWidth();
    const [isScreenLarge, setIsScreenLarge] = useState(true)
    // breakpoint at 992px coming down from large screens
    // large and up --> buttons
    // medium and below --> dropdown
    // default --> true, will render out buttons if no parameter is passed

    useEffect(()=> {
        if (windowWidth >= 992) {
            setIsScreenLarge(true)
        } else {
            setIsScreenLarge(false) 
        }
    }, [windowWidth])

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

    function dropDownClick(e) {
        let val = e.target.value
        setSectionValue(parseInt(val))
    }

    const springProps = useSpring({
        to: {opacity: 1, y:0},
        from: {opacity: 0, y:50},
        config: config.default ,
        reset: true
    })


    return(<>
            <Helmet>
                <title>My Work | Eddie Estevez</title>
                <meta name="description" content="You can find some of my work that I have done throughout the past couple years, from web development and software engineering, to video and sound production."/>
                <meta property="og:title" 
                    content="My Work | Eddie Estevez"
                />
                <meta property="og:description" 
                    content="You can find some of my work that I have done throughout the past couple years, from web development and software engineering, to video and sound production."
                />
            </Helmet>
            <Switch>
                <Route exact path={path}>
                    <Hero title={props.title} className="mb-0"/>
                    <div className="container text-center">
                    {(isScreenLarge)?(<>
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
                    </>):(<>
                        <DropdownButton id="dropdown-item-button" title={sectionArray[sectionValue].name}>
                            {sectionArray.map((button, idx) => (
                                <Dropdown.Item
                                    as="button"
                                    key={idx}
                                    id={`button-${button.name}`}
                                    type="button"
                                    className={sectionValue === button.value ? 'active' : ''}
                                    variant="outline-primary"
                                    value={button.value}
                                    onClick={(e) => dropDownClick(e)}
                                >
                                    {button.name}
                                </Dropdown.Item>
                                ))}
                        </DropdownButton>
                    </>)}
                    </div>
                    
                    <Cards section={sectionValue} path={path}/>
                </Route>
                
                <Route path={`${path}/:portfolioURL`}>
                    <a.div style={springProps}>
                        <Template sectionValue={sectionValue} />
                    </a.div>
                </Route>
            </Switch>
        </>
    )
}

// Hook for checking what the current window size is 
function useWindowWidth() {

    const [windowWidth, setWindowWidth] = useState(1000)
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowWidth(window.innerWidth,
        );
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowWidth;
  }

export default PortfolioPage;