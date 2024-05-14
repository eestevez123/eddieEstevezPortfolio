import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HelmetProvider } from "react-helmet-async";
import eddieEstevezLogo from "./images/EddieLogoWithBack.svg";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MyWorkPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";

import NCJSCaseStudyPage from "./portfolioPages/custom/NCJSCaseStudyPage";
import WorkoutAppCaseStudyPage from "./portfolioPages/custom/WorkoutAppCaseStudyPage";

import ContactPage from "./pages/ContactPage"; // We'll just provide info for now, we can fix the API later
import { Image } from "react-bootstrap";

const helmetContext = {};

/**
 * Main application component representing the entire website.
 * Manages routing and renders different pages based on the URL.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Eddie Estevz",
      home: {
        title: "Hey guys, Eddie here!",
        subTitle:
          "Software engineer 👨‍💻 , digital creator 💻, and coffee lover ☕",
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
    };
  }

  /**
   * Render method for the App component.
   * Responsible for rendering the main layout, navigation bar, and routing logic.
   * @returns {JSX.Element} JSX element representing the entire application.
   */
  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Container className="p-0 pageContainer" fluid={true}>
            <Container className="px-0 pt-0 contentWrap" fluid={true}>
              <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Link to="/" className="text-decoration-none">
                  <Navbar.Brand
                    id="pageLogo"
                    className="align-items-center ms-2"
                  >
                    <Image
                      id="eddieMainLogo"
                      className="img-responsive navbar-left"
                      src={eddieEstevezLogo}
                      alt="Eddie Estevez Logo"
                    />
                    <div>eddie estevez</div>
                  </Navbar.Brand>
                </Link>
                <Navbar.Toggle
                  className="border-0"
                  aria-controls="navbar-toggle"
                />

                <Navbar.Collapse id="navbar-toggle" className="text-center">
                  <Nav className="ms-auto">
                    <Link className="nav-link" to="/aboutme">
                      About Me
                    </Link>
                    <Link className="nav-link" to="/mywork">
                      My Work
                    </Link>
                    <Link className="nav-link" to="/letsconnect">
                      Let's Connect
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <ScrollToTop />

              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <HomePage
                      title={this.state.home.title}
                      subTitle={this.state.home.subTitle}
                    />
                  )}
                />
                <Route
                  path="/aboutme"
                  render={() => <AboutPage title={this.state.about.title} />}
                />
                <Route
                  path="/mywork"
                  render={() => (
                    <MyWorkPage title={this.state.portfolio.title} />
                  )}
                />
                <Route
                  path="/letsconnect"
                  render={() => (
                    <ContactPage title={this.state.contact.title} />
                  )}
                />

                <Route
                  path="/ncjs-case-study"
                  render={() => <NCJSCaseStudyPage />}
                />
                <Route
                  path="/workout-app-case-study"
                  render={() => <WorkoutAppCaseStudyPage />}
                />

                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
              </Switch>
              <Footer />
            </Container>
          </Container>
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}
export default App;
