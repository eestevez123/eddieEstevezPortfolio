import React, { useState } from "react";
import { useSpring, animated as a, config } from "react-spring";
import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";

import "./PortfolioPage.css";

import Hero from "../components/Hero";
import WorkNav from "../components/WorkNav";
import Cards from "../components/Cards";

import Template from "../portfolioPages/Template";

/**
 * Component representing the portfolio page with work sections.
 * This component displays sections of work and allows navigation between them.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Title for the portfolio page.
 * @returns {JSX.Element} JSX element representing the PortfolioPage.
 */
function PortfolioPage(props) {
  // const sectionArray = [
  //     { name: 'Web Development and Design', value: 0 },
  //     { name: 'Apps and Software', value: 1 },
  //     { name: 'Video Work', value: 2 },
  //     { name: 'Sound Work', value: 3 }
  //   ];

  const [sectionValue, setSectionValue] = useState(0);

  const mainButtonClick = (e) => {
    let val = e.target.value;
    setSectionValue(parseInt(val));
  };

  const springProps = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 50 },
    config: config.default,
    reset: true,
  });

  return (
    <>
      <Helmet>
        <title>My Work | Eddie Estevez</title>
        <meta
          name="description"
          content="You can find some of my work that I have done throughout the past couple years, from web development and software engineering, to video and sound production."
        />
        <meta property="og:title" content="My Work | Eddie Estevez" />
        <meta
          property="og:description"
          content="You can find some of my work that I have done throughout the past couple years, from web development and software engineering, to video and sound production."
        />
      </Helmet>
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          index
          element={
            <>
              <Hero title={props.title} className="mb-0" />
              <WorkNav section={sectionValue} updateHandler={mainButtonClick} />
              <Cards section={sectionValue} path="/mywork"/>
            </>
          }
        />
        <Route
          path=':portfolioURL'
          element={
            <a.div style={springProps}>
              <Template sectionValue={sectionValue} />
            </a.div>
          }
        />
      </Routes>

    </>
  );
}

export default PortfolioPage;
