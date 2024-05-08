import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";


/**
 * Functional component representing the footer section of the website.
 * This component renders a footer with copyright information and credits.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the footer section.
 */
function Footer() {

    // Get the current year dynamically for copyright
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <Container fluid={true} >
                <Row className="border-top justify-content-between p-3 text-center align-items-center">
                    <Col className="justify-content-start" md={4} sm={12}>
                    © {currentYear} - Eddie Estevez
                    </Col>
                    <Col className="justify-content-end" md={4} sm={12}>
                        Designed and Developed by Eddie Estevez
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;