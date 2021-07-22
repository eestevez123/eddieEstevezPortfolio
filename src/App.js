import React from 'react';
import {BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import eddieEstevezLogo from './images/EddieLogoWithBack.svg';

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';


// Pages
import HomePage from"./pages/HomePage"
import AboutPage from './pages/AboutPage';
import MyWorkPage from './pages/PortfolioPage';
import NotFoundPage from './pages/NotFoundPage';


import ContactPage from './pages/ContactPage'; // We'll just provide info for now, we can fix the API later
import { Image } from 'react-bootstrap';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: "Eddie Estevz",
    home: {
      title: "Hey guys, Eddie here",
      subTitle: "Software developer, designer, content creator, and coffee lover"
    },
    about: {
      title: "Hello World!",
      
    },
    portfolio: {
      title: "My Work",
    },
    contact: {
      title: "Contact Info",
    },
  }
}

render() {
  return (
    <BrowserRouter>
    <Container className="p-0 pageContainer" fluid={true}>
      <Container className="px-0 pt-0 contentWrap" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand id="pageLogo" href="/" className="align-items-center ms-2">
              <Image id="eddieMainLogo" className="img-responsive navbar-left" src={eddieEstevezLogo} alt="Eddie Estevez Logo"/>
              <div>eddie estevez</div>
            </Navbar.Brand>
            

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />


            <Navbar.Collapse id="navbar-toggle" className="text-center">

            <Nav className="ms-auto">
              <Link className="nav-link" to ="/aboutme">About Me</Link>
              <Link className="nav-link" to ="/mywork">My Work</Link>
              <Link className="nav-link" to ="/letsconnect">Let's Connect</Link>
            </Nav>

            </Navbar.Collapse>
        </Navbar>
        <ScrollToTop />


        
        <Switch>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>} />
          <Route path="/aboutme"  render={()=> <AboutPage title={this.state.about.title} />} />
          <Route path="/mywork" render={()=> <MyWorkPage title={this.state.portfolio.title} />} />
          <Route path="/letsconnect"   render={()=> <ContactPage title={this.state.contact.title}/>} />


          <Route path="/404" component={NotFoundPage} />
          <Redirect path="*" to="/404" />
        </Switch>

        
      <Footer />

      </Container>
      </Container>
    </BrowserRouter>
  );  
}



}
export default App;
