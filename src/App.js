import React from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import eddieEstevezLogo from './images/EddieLogoWithBack.svg';

import Footer from "./components/Footer";
import './App.css';


// Pages
import HomePage from"./pages/HomePage"
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

// Portfolio Pages
import VideoPortfolioPage from './portfolio/VideoPort';
import WebsitePort from './portfolio/WebsitePort';
import ApplicationsPort from './portfolio/ApplicationsPort';

import ContactPage from './pages/ContactPage'; // We'll just provide info for now, we can fix the API later
import { Image } from 'react-bootstrap';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: "Eddie Estevz",
    headerLinks: [
      {title: "About", path: "/about"},
      {title: "Portfolio", path: "/portfolio"},
      {title: "Contact", path: "/contact"},
    ], 
    home: {
      title: "Hey guys, Eddie here",
    },
    about: {
      title: "Me, myself, and I",
      
    },
    portfolio: {
      title: "My Work",
    },
    contact: {
      title: "Contact Info",
    }
  }
}

render() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand id="pageLogo" href="/" className="align-items-center">
              <Image id="eddieMainLogo" className="img-responsive navbar-left" src={eddieEstevezLogo} alt="Eddie Estevez Logo"/>
              <div>eddie estevez</div>
            </Navbar.Brand>
            

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">

            <Nav className="ml-auto">
              <Link className="nav-link" to ="/about">About Me</Link>
              <Link className="nav-link" to ="/portfolio">My Work</Link>
              <Link className="nav-link" to ="/contact">Let's Connect</Link>
            </Nav>

            </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title}/>} />
        <Route path="/about" render={()=> <AboutPage title={this.state.about.title} />} />
        <Route path="/portfolio" exact render={()=> <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/portfolio/Videos" render={()=> <VideoPortfolioPage title="Videos" />} />
          <Route path="/portfolio/Websites" render={()=> <WebsitePort title="Websites" />} />
          <Route path="/portfolio/Applications" render={()=> <ApplicationsPort title="Applications"/>} />
        <Route path="/contact" render={()=> <ContactPage title={this.state.contact.title}/>} />


        
      <Footer />

      </Container>
    </Router>
  );  
}



}
export default App;
