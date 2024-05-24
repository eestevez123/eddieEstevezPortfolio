import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

import "./AboutPage.css";
import "react-loading-skeleton/dist/skeleton.css";

import uwlogo from "../images/aboutMePage/uwlogo.png";

import babyPic from "../images/aboutMePage/eddieAsBaby.svg";
import adultPic from "../images/aboutMePage/eddieAsAdult.svg";
import funFact from "../images/aboutMePage/eddieOnStool.svg";

import compEng from "../images/aboutMePage/computerEngineering.svg";
import compSci from "../images/aboutMePage/computerScience.svg";
import digStud from "../images/aboutMePage/digitalStudies.svg";

const eddieResumePDF = process.env.PUBLIC_URL + "/eddieResume.pdf";

/**
 * Component representing the About Me page.
 * This component renders the About Me page with detailed information about Eddie Estevez.
 *
 * @component
 * @param {Object} props - The props object containing the title for the Hero component.
 * @param {string} props.title - The title to be displayed in the Hero component.
 * @returns {JSX.Element} JSX element representing the About Me page.
 */
function AboutPage(props) {
  const [babyPicLoading, setBabyPicLoading] = useState(true);
  const [adultPicLoading, setAdultPicLoading] = useState(true);
  const [funPicLoading, setFunPicLoading] = useState(true);

  return (
    <div>
      <Helmet>
        <title>About Me | Eddie Estevez</title>
        <meta
          name="description"
          content="Hello World! I'm Eddie! It's nice to meet you!"
        />
        <meta property="og:title" content="About Me | Eddie Estevez" />
        <meta
          property="og:description"
          content="Hello World! I'm Eddie! It's nice to meet you!"
        />
      </Helmet>
      <Hero id="hereOnHomePage" title={props.title} />
      <div className="container">
        <div className="top-section">
          <div className="left">
            <h2 className="about__heading">
              I'm Eddie! It's nice to meet you!
            </h2>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <h4 className="mt-3">My tech origin story</h4>
                <p>
                  My fascination with technology began in the 4th grade. I
                  finally convinced my dad it was time to get a{" "}<a href="https://www.samsclub.com/p/dell-inspiron-530s-desktop-1-8ghz-250gb-19-lcd/185042" target="_blank" rel="noopener noreferrer">desktop computer</a>
                  {" "}for the family. I quickly assumed the role of the family tech
                  expect, learning how to troubleshoot and repair the computer,
                  as well any gadget connected to it.
                </p>
                <p>
                  In middle school, I delved into smartphone customization with{" "}
                  <a href="https://en.wikipedia.org/wiki/LG_Optimus_L9" target="_blank" rel="noopener noreferrer">my first LG Android device</a>, experimenting with custom
                  operating systems. High school exposed me to formal computer
                  science education, where I learned Python, Java, and the
                  foundations of software engineering, including Scrum and Agile
                  methodologies.
                </p>
                <p>
                  In 2017, I was fortunate enough to land my very first
                  internship as a recent high school graduate within
                  Northwestern Mutual. This pivotal experience catapulted me
                  into the professional world, cementing my passion for
                  leveraging technology to solve real-world challenges.
                </p>
              </div>
              <div className="col-md-6 mt-4">
                {babyPicLoading ? (
                  <>
                    <Skeleton
                      className="img-fluid aboutImage d-block m-auto"
                      width={300}
                    />
                  </>
                ) : (
                  <></>
                )}
                <img
                  src={babyPic}
                  alt="Baby Eddie"
                  className={`img-fluid aboutImage d-block m-auto ${
                    babyPicLoading ? "hidden" : ""
                  }`}
                  onLoad={() => {
                    setBabyPicLoading(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light mt-4">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 order-md-2">
              <h4 className="mt-3">Where my story is right now</h4>
              <p>
                In May 2021, I graduated from the University of Wisconsin –
                Madison with a double major in Computer Science and Computer
                Engineering, along with a certificate in Digital Studies. This
                education complemented my passion for front-end software
                development with rigorous coursework and practical experience.{" "}
              </p>
              <p>
                I have had the incredible opportunity to intern at Northwestern
                Mutual and BlackRock. Additionally, I designed a website for a
                local Madison business, La Cosecha Tortilleria Company, showcasing
                my ability to apply my skills in real-world projects.{" "}
              </p>
              <p>
                Since September 2021, I have been a full-time software developer
                at Sentry Insurance, where I continue to grow and apply my
                expertise in software development.{" "}
              </p>

              <p>
                {" "}
                Outside of tech, I enjoy running, reading, and savoring good
                coffee. I am proud to own and collect a vast assortment of
                coffee-making devices, each contributing to my appreciation of
                this delightful beverage and hobby.
              </p>
              <div className="text-center">
                <a
                  className="btn btn-primary mb-4"
                  role="button"
                  href={eddieResumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
              </div>
            </div>
            <div className="col-md-6 order-md-1 mb-3 overflow-hidden">
              {adultPicLoading ? (
                <>
                  <Skeleton
                    className="img-fluid aboutImage d-block m-auto"
                    width={300}
                  />
                </>
              ) : (
                <></>
              )}
              <img
                src={adultPic}
                alt="Adult Eddie"
                className={`img-fluid aboutImage d-block m-auto ${
                  adultPicLoading ? "hidden" : ""
                }`}
                onLoad={() => {
                  setAdultPicLoading(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="top-section">
          <div className="left">
            <h2 className="about__heading">Education</h2>

            <div className="row justify-content-center align-items-center text-center">
              <div className="col-12">
                <h6>University of Wisconsin-Madison</h6>
                <h6 className="fw-light">Class of 2021</h6>
                <img
                  className="img-fluid m-auto uwLogo"
                  src={uwlogo}
                  alt="TODO"
                />
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-sm-4">
                  <h6>B.S. in Computer Engineering</h6>
                  <img
                    className="img-fluid educationIcon my-4"
                    src={compEng}
                    alt="Software Development Icon"
                  />
                  <p>
                    In my Computer Engineering studies, I delved into the
                    design, development, analysis, and manufacturing of computer
                    hardware and low-level software.
                  </p>
                  <p>
                    I started with binary basics and progressed to using
                    Verilog, a hardware description language, to develop my own
                    16-bit MIPS microprocessor.
                  </p>
                </div>
                <div className="col-sm-4">
                  <h6>B.S. in Computer Science</h6>
                  <img
                    className="img-fluid educationIcon my-4"
                    src={compSci}
                    alt="Software Development Icon"
                  />
                  <p>
                    My coursework covered the
                    theory behind computer science algorithms, the efficiencies
                    of data structures and sorting algorithms, and various
                    applications such as machine learning, website development,
                    and operating systems.
                  </p>
                </div>
                <div className="col-sm-4">
                  <h6>Certificate in Digital Studies</h6>
                  <img
                    className="img-fluid educationIcon my-4"
                    src={digStud}
                    alt="Software Development Icon"
                  />
                  <p>
                    I studied how the internet and everything digital affects
                    culture, as well as how to best use modern tools to marry
                    form and function within digital media, whether it be a
                    website, video, podcast, etc.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light pt-3 pb-4 mt-3">
        <div className="container">
          <h2 className="about__heading mb-3">Fun Facts</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 order-md-2 fs-6">
              <h5>
              😂 Meme Mastery at UW-Madison
              </h5>
              <p>
                I was the admin for the University of Wisconsin-Madison’s meme
                page called{" "}
                <a href="https://www.facebook.com/groups/175526726305977">
                  UW Madison Memes for Milk-Chugging Teens
                </a>
                . This page has been a platform for me to make memes and videos
                for a growing group that currently stands at almost 30k members.
                I was also a contributing member of the UW-Madison Meme Club,
                B.O.I, whose acronym of course stood for Meme Analysis Club.
              </p>
              <h5>🌍 Language Lover Extraordinaire!</h5>
              <p>
                I grew up bilingual, speaking both English and Spanish. In
                College, I picked up two semesters of Italian, and continue to
                learn it today in an effort to be trilingual. Duolingo is a
                great app for that which I use almost daily.
              </p>
              <h5>🏊‍♂️ Splashing into New Skills!</h5>
              <p>
              Guess what? I conquered my lifelong fear and learned to swim in the summer of 2021! 
              After many splashy attempts and a high school swim class, I finally found my comfort in the water. 
              Now I can dive into new adventures, quite literally!
              </p>
            </div>
            <div className="col-md-6 order-md-1 mb-3">
              {funPicLoading ? (
                <>
                  <Skeleton
                    className="img-fluid aboutImage d-block m-auto"
                    width={300}
                  />
                </>
              ) : (
                <></>
              )}
              <img
                src={funFact}
                alt="Eddie On A Stool"
                className={`img-fluid aboutImage d-block m-auto ${
                  funPicLoading ? "hidden" : ""
                }`}
                onLoad={() => {
                  setFunPicLoading(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
