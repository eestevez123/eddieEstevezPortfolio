import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import "./HomePage.css";
import "react-loading-skeleton/dist/skeleton.css";

import Hero from "../components/Hero";
import { motion } from "framer-motion";
import DraggableObject from "../components/DraggableObject";

import softwareIcon from "../images/homePage/softwareDevIcon.svg";
import designerIcon from "../images/homePage/designerIcon.svg";
import contentIcon from "../images/homePage/contentCreatorIcon.svg";

import workIcon from "../images/homePage/working.svg";
import greetingIcon from "../images/homePage/greetings.svg";

import eddieProfilePic from "../images/homePage/eddieHome.png";
import blackLineRect from "../images/homePage/blackLineRect.svg";

const eddieResumePDF = process.env.PUBLIC_URL + "/eddieResume.pdf";

/**
 * Component representing the Home page.
 * This component renders the Home page with various sections and content.
 *
 * @component
 * @param {Object} props - The props object containing the title and subtitle for the Hero component.
 * @param {string} props.title - The title to be displayed in the Hero component.
 * @param {string} props.subTitle - The subtitle to be displayed in the Hero component.
 * @returns {JSX.Element} JSX element representing the Home page.
 */
function HomePage(props) {
  const [mainEddieImageLoading, setmMinEddieImageLoading] = useState(true);

  return (
    <div>
      <Helmet>
        <title>Eddie Estevez | Computer Nerd</title>
        <meta
          name="description"
          content="Welcome to my personal website! My name is Eddie Estevez, a software developer, designer, content creator, and coffee lover"
        />
        <meta property="og:title" content="Eddie Estevez | Computer Nerd" />
        <meta
          property="og:description"
          content="Welcome to my personal website! My name is Eddie Estevez, a software developer, designer, content creator, and coffee lover"
        />
      </Helmet>

      <Hero id="hereOnHomePage" title={props.title} subTitle={props.subTitle} />

      <div className="container justify-content-center d-flex">
        <div className="row  justify-content-center">
          <div className="col-8 col-sm-12">
            {mainEddieImageLoading ? (
              <>
                <Skeleton height={300} />
              </>
            ) : (
              <></>
            )}
            <motion.img
              src={eddieProfilePic}
              className={`eddieProfile grabbable user-select-none img-fluid ${mainEddieImageLoading ? "hidden" : ""}`}
              alt="A picture of Eddie Estevez"
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 800, bounceDamping: 25 }}
              dragElastic={0.75}
              whileTap={{ cursor: "grabbing" }}
              onLoad={() => {
                setmMinEddieImageLoading(false);
              }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col ">
            <div className="shapeHolder position-relative">
              <DraggableObject
                className="img-fluid"
                innerClassName="rect1 bg-myBlue grabbable position-absolute top-0 start-0"
                isImage={false}
                alt="A draggable blue square"
              />
              <DraggableObject
                className="img-fluid"
                innerClassName="rect2 bg-myPurple grabbable position-absolute"
                isImage={false}
                alt="A draggable purple square"
              />
              <DraggableObject
                className="img-fluid"
                innerClassName="circle1 bg-myGreen grabbable rounded-circle position-absolute"
                isImage={false}
                alt="A draggable green square"
              />
              <DraggableObject
                className="img-fluid"
                innerClassName="blackRect grabbable position-absolute"
                isImage={true}
                src={blackLineRect}
                alt="A draggable square filled in with black lines"
              />
              <DraggableObject
                className="img-fluid"
                innerClassName="blackRect2 grabbable position-absolute"
                isImage={true}
                src={blackLineRect}
                alt="A draggable square filled in with black lines"
              />
              <DraggableObject
                className="img-fluid"
                innerClassName="rect3 bg-myGreen grabbable position-absolute"
                isImage={false}
                alt="A draggable green square"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-myBlue text-white mt-5 p-5">
        <div className="container justify-content-center d-flex">
          <div className="row">
            <div className="col text-center">
              <h2 className="fw-bold">A Little About Me</h2>
              <p className="fs-5">
                I'm a Milwaukee native with a deep appreciation for technology,
                the color blue, and a great cup of coffee.
                <br />
                I thrive on challenges that push me outside my comfort
                zone, especially when fueled by a good cup of coffee.
                <br />
                As a self-proclaimed extrovert, I love engaging in meaningful
                conversations—preferably over a steaming cup of coffee.
                <br />
                Did I mention coffee yet?
              </p>
              <Link to="/aboutme">
                <button type="button" className="btn btn-outline-light">
                  Learn More About Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-myBlue text-white p-5"> </div>

      <div className="container justify-content-center bg-white rounded skillChart">
        <div className="row text-center">
          <div className="col-md-4 border border-top-0 rounded-left">
            <h4 className="fw-bold">Software Developer</h4>
            <img
              className="img-fluid skillIcon my-4"
              src={softwareIcon}
              alt="Software Development Icon"
            />
            <p className="fs-6 mx-2 mt-2">
              As a software engineer, I thrive on blending design and code,
              allowing me to flex both my artistic and analytical muscles.
            </p>

            <div className="row mb-3">
              <div className="col-6">
                <h5 className="font-myBlue fw-bold">Frontend</h5>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>React Native</li>
                  <li>NativeScript</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="col-6">
                <h5 className="font-myBlue fw-bold">Backend</h5>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>NodeJS</li>
                  <li>SQL</li>
                  <li>JUnit</li>
                  <li>Gradle</li>
                  <li>Spring</li>
                  <li>OpenAPI</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 border border-top-0">
            <h4 className="fw-bold mt-4 mt-md-0">Designer</h4>
            <img
              className="img-fluid skillIcon my-4 designerIcon"
              src={designerIcon}
              alt="Designer Icon"
            />
            <p className="fs-6 mx-2 mt-2">
              I consider myself a very visual and imaginative person, so the
              task of coming up with a elegant and useful design is always a fun
              exercise.
            </p>
            <h5 className="font-myBlue fw-bold">Tools</h5>
            <ul>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Adobe Creative Cloud Suite</li>
              <li>Canva</li>
              <li>GIMP</li>
            </ul>
          </div>
          <div className="col-md-4 border border-top-0  rounded-right">
            <h4 className="fw-bold mt-4 mt-md-0">Content Creator</h4>
            <img
              className="img-fluid skillIcon my-4"
              src={contentIcon}
              alt="Content Creator Icon"
            />
            <p className="fs-6 mx-2 mt-2">
              It all began with creating memes for my university's Facebook meme
              page, and I haven't stopped since. Today, I have a passion for
              editing in various forms—whether it's video, photo, or sound—to
              bring creative ideas to life.
            </p>
            <h5 className="font-myBlue fw-bold">Tools</h5>
            <ul>
              <li>Adobe Creative Cloud Suite</li>
              <li>GIMP</li>
              <li>Canon EOS Rebel T6i DSLR</li>
              <li>Sony Alpha ZV-E10</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container content-justify-center text-center align-items-center mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={workIcon}
              alt="Briefcase"
              className="img-fluid workImage m-3"
            />
          </div>

          <div className="col-md-6">
            <p className="fs-5">
              I could go on and say how good my work is, but I think my work can
              speak for itself!
            </p>

            <div className="row justify-content-center g-3 g-lg-0">
              <div className="col-12 col-md-4">
                <Link to="/mywork">
                  <button type="button" className="btn btn-outline-primary">
                    See My Work
                  </button>
                </Link>
              </div>
              <div className="col col-md-4">
                <div className="text-center">
                  <a
                    className="btn btn-outline-primary"
                    role="button"
                    href={eddieResumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-myBlue text-white mt-5 p-5">
        <div className="container content-justify-center text-center align-items-center">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src={greetingIcon}
                alt="Stick Figure Saying Hello"
                className="img-fluid workImage"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="fs-5">
                Don’t be shy! As a people person, I enjoy any opportunity for a
                conversation, even if it’s just a hello.{" "}
              </p>
              <Link to="/letsconnect">
                <button type="button" className="btn btn-outline-light">
                  Talk To Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
