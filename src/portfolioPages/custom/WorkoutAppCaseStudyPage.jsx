import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import "./caseStudies.css";
import "react-loading-skeleton/dist/skeleton.css";

import CoverPic from "../../images/caseStudies/workoutapp_background.jpg";
import WorkoutPersona from "../../images/caseStudies/workoutPersona.png";
import ScreenFlow from "../../images/caseStudies/screenFlow.png";

/**
 * Component representing the Workout App Case Study page
 *
 * @component
 * @param {Object} props - Component props
 * @returns {JSX.Element} JSX element representing the Workout App Case Study page
 */
function WorkoutAppCaseStudyPage(props) {
  const [isLoadingCover, setIsLoadingCover] = useState(true);

  return (
    <>
      <Helmet>
        <title> Routine Builder Case Study| Eddie Estevez</title>
        <meta
          name="description"
          content={
            "A Case Study for the Workout Application I and 5 others builts for UW-Madison's CS 506 course."
          }
        />
        <meta
          property="og:title"
          content={`Routine Builder Case Study | Eddie Estevez`}
        />
        <meta
          property="og:description"
          content="A Case Study for the Workout Application I and 5 others builts for UW-Madison's CS 506 course."
        />
      </Helmet>
      <div className="container">
        <div className="top-section">
          <Link to="/mywork">
            <button type="button" className="btn btn-outline-primary m-3">
              Go Back
            </button>
          </Link>
          <h2 className="about__heading">{"Routine Builder Case Study"}</h2>
        </div>
      </div>

      <div className="container-fluid bg-light mt-4">
        <div className="container">
          <div className="row pt-0">
            <div className="col">
              <div className="overflow">
                {isLoadingCover ? (
                  <>
                    <Skeleton height={300} />
                  </>
                ) : (
                  <></>
                )}
                <img
                  onLoad={() => {
                    setIsLoadingCover(false);
                  }}
                  className={`portfolioCoverImage img-fluid d-block m-auto ${isLoadingCover ? "hidden" : ""}`}
                  src={CoverPic}
                  alt="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-sm-4">
            <h3>Timeline</h3>
            <p>Fall Semester of 2020</p>
            <p>(September to December - 12 weeks)</p>
          </div>
          <div className="col-sm-4">
            <h3>My Role</h3>
            <p>UI/UX Designer Assistant</p>
            <p>Software Developer</p>
            <p>Software Tester</p>
          </div>
          <div className="col-sm-4">
            <h3>My Team</h3>
            <p>5 other classmates:</p>
            <p>Andrew Harron, Justin Peret, Nick Stoffel,</p>
            <p>Rohit Potineni, Taylor Schroeder</p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light mt-4 py-5 pt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>The Problem</h2>
              <h3 className="fw-bold my-5 mb-3">
                There doesn't seem to be a workout tracker app with automatic
                planning with a simple yet attractive UI (also this class
                requires us to build out an app).
              </h3>
              <p>
                Within the fall semester of my senior year (Fall 2020), I took a
                class called CS 506: Software Engineering. This class focused on
                how to efficiently engineer software within a team, including
                proper version control and documentation. Near the beginning of
                the semester, each student submitted a project proposal and then
                pitched their idea to form a team of 5-6 people to build it out.
              </p>
              <p>
                I joined a group of 5 others to build out a workout tracking
                application that would later be called Routine Builder. This app
                was to be cross-platform between iOS and Android, and solve the
                problem of the seemingly lack of a workout app with an intuitive
                attractive UI and UX that included automatic workout planning
                depending on the users goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2>The Solution</h2>
            <h3 className="fw-bold my-5 mb-3">
              Let's Design and Develop a workout tracking app!
            </h3>
            <p>
              {" "}
              The class was well structured where we had the opportunity to
              appropriately design the application to solve the problem at hand
              effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light mt-4 py-5  pt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>The Competition</h2>
              <h3 className="fw-bold my-5 mb-3">
                An Estimated 320,000 health and fitness apps within the Apple
                App Store (2018)
              </h3>
              <p>
                In order to stand out from the crowd, we would need to cater to
                a niche, a young adult who isn't looking for too many features
                from their workout application. They would like it to look and
                feel great while suggesting workout plans automatically. They
                would not need any more features that would clutter the
                interface and overwhelm them when it came to working out.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2>The Persona</h2>
            <h3 className="fw-bold my-5 mb-3">Meet Bob Clarckson</h3>
            <img
              src={WorkoutPersona}
              alt="Workout Persona"
              className="img-fluid"
            />
            <p>
              {" "}
              The persona created is the average young male adult living in
              Madison. As you can see, I and the team had some fun creating the
              persona, giving him interesting traits.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light mt-4 py-5  pt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>The Design</h2>

              <h3 className="fw-bold my-5 mb-3">
                Draw IO Screen Flow Draw.io{" "}
              </h3>
              <img
                src={ScreenFlow}
                alt="John - Persona"
                className="img-fluid my-3 notebookSketch mx-auto d-block"
              />
              <h3 className="fw-bold my-5 mb-3">
                The Google Drawings Basic App Wireframe{" "}
              </h3>
              <img
                src={
                  "https://res.cloudinary.com/eestevez/image/upload/v1627777204/myWorkPage/app/workout2.png"
                }
                alt="John - Persona"
                className="img-fluid my-3 notebookSketch mx-auto d-block"
              />

              <h3 className="fw-bold my-5 mb-3">
                The Better Looking Figma Wireframe
              </h3>
              <img
                src={
                  "https://res.cloudinary.com/eestevez/image/upload/v1627777204/myWorkPage/app/workout1.png"
                }
                alt="John - Persona"
                className="img-fluid my-3 notebookSketch mx-auto d-block"
              />

              <h3 className="fw-bold my-5 mb-3">Feedback From Another Team</h3>
              <p>
                Within the class, we were to get feedback from another team on
                the design and functionality of the application. Feedback
                including the resizing of some text and certain elements, and
                mainly code issues from cases we weren't able to cover within
                the MVP.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2>The Deliverables</h2>
            <h3 className="fw-bold my-5 mb-3">
              A Fully Functioning React Native Application!
            </h3>
          </div>
        </div>
        <WorkoutApp />
      </div>

      <div className="container-fluid bg-light mt-4 py-5  pt-4">
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h2>The Outcomes</h2>
              <h3 className="fw-bold my-5 mb-3">
                A better sense of app development
              </h3>
              <p>
                This experience gave me the opportunity to be able to design an
                effective mobile application who's goal was to have a simple and
                attractive UI, and then fully build it out with the help of
                team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <h2>Thank You For Reading!</h2>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row text-center mt-5">
          <div className="col mt-5">
            <Link to="/mywork">
              <button type="button" className="btn btn-outline-primary my-5">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function WorkoutApp() {
  return (
    <div className="container-fluid bg-light pb-5 mt-5">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col col-sm-6">
            <h4 className="mt-3">Demo Video</h4>
            <p>
              My team member Nick Stoffel created a YouTube Video demoing the
              Workout App
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-sm-8">
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/-C8gSs5AIPw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <div className="col col-sm-6">
            <h4 className="mt-5">Automated UI Testing Video</h4>
            <p>
              I was able to create a video showing some basic automated UI
              testing via Espresso
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-sm-8">
            <div className="ratio ratio-16x9 youtubeVideo">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dENFLDzxfic"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutAppCaseStudyPage;
