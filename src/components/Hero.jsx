import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function Hero(props) {
    
    return(
        <div className="bg-transparent jumbotron-fluid p-0 mb-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="fw-bolder">{props.title}</h1>}
                        { props.subTitle && <h3 className="fw-light">{props.subTitle}</h3>}                      
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero