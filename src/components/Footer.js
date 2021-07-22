import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function Footer() {

    return(
        <footer className="footer">
            <Container fluid={true} >
                <Row className="border-top justify-content-between p-3 text-sm-center align-items-center">
                    <Col className="justify-content-start" md={3} sm={12}>
                    © 2021 - Eddie Estevez
                    </Col>
                    <Col className="justify-content-end" md={3} sm={12}>
                        Designed and Developed by Eddie Estevez
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;