import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import { motion } from "framer-motion"
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Slide from 'react-reveal/Slide';

function PortfolioItem(props) {
    const history = useHistory();
    const handleOnClick = useCallback((title) => history.push("/portfolio/"+title), [history]);


    return(<Slide left>
    <Row className="porfolioBlock">
        
        <div 
         className="portfolioTitle">{props.Title}</div>
        <motion.div
        className="portfolioButton"
        whileHover={{ scale: 1.1 }}
        style={{
            width: 300,
            height: "auto",
            borderRadius: 14,
            backgroundColor: props.buttonColor,
            cursor: "pointer"
        }}
        onClick={() => handleOnClick(props.Title)}
        >
            <Link to={"/portfolio/"+props.Title}>Learn More</Link>
            
        </motion.div>
    </Row>
    </Slide>)
}

export default PortfolioItem;