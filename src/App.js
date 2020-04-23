import React from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";

// Pages
import HomePage from"./pages/HomePage"
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';

// Portfolio Pages
import VideoPortfolioPage from './portfolio/VideoPort';
import SoftWareEngineeringPage from './portfolio/SoftwarePort';
import DigitialContentPage from './portfolio/DigitalContentPort';

import ContactPage from './pages/ContactPage'; // We'll just provide info for now, we can fix the API later

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: "Eddie Estevz",
    headerLinks: [
      {title: "Home", path: "/"},
      {title: "About", path: "/about"},
      {title: "Resume", path: "/resume"},
      {title: "Portfolio", path: "/portfolio"},
      {title: "Contact", path: "/contact"},
    ], 
    home: {
      title: "Hey, thanks for stopping by!",
      subTitle: "Hope you enjoy your stay!"
    },
    about: {
      title: "About me",
      
    },
    resume: {
      title: "Resume",
    },
    portfolio: {
      title: "Portfolio",
    },
    contact: {
      title: "Contact",
    },
  }
}

render() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Eddie Estevez</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              
            <Nav className="ml-auto">
              <Link className="nav-link" to ="/">Home</Link>
              <Link className="nav-link" to ="/about">About</Link>
              <Link className="nav-link" to ="/resume">Resume</Link>
              <Link className="nav-link" to ="/portfolio">Portfolio</Link>
              <Link className="nav-link" to ="/contact">Contact</Link>
            </Nav>

            </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>} />
        <Route path="/about" render={()=> <AboutPage title={this.state.about.title} />} />
        <Route path="/resume" render={()=> <ResumePage title={this.state.resume.title} />} />
        <Route path="/portfolio" render={()=> <PortfolioPage title={this.state.portfolio.title} />} />
        <Route path="/contact" render={()=> <ContactPage title={this.state.contact.title} />} />
      <Footer />

      </Container>
    </Router>
  );  
}



}
export default App;
