import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";


/**
 * Functional component representing a hero section with title and subtitle.
 * This component renders a hero section with optional title and subtitle.
 *
 * @component
 * @param {Object} props - The props object containing data for configuring the hero section.
 * @param {string} [props.title] - The main title for the hero section (optional).
 * @param {string} [props.subTitle] - The subtitle for the hero section (optional).
 * @returns {JSX.Element} JSX element representing the hero section.
 */
function Hero({title, subTitle}) {
    
    return(
        <div className="bg-transparent jumbotron-fluid p-0 mb-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        { title && <h1 className="fw-bolder">{title}</h1>}
                        { subTitle && <h3 className="fw-light">{subTitle}</h3>}                      
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero