import React, {useState} from 'react';
import Skeleton from 'react-loading-skeleton';

import {Helmet} from "react-helmet-async";
import Hero from "../components/Hero";

import "./AboutPage.css"
import 'react-loading-skeleton/dist/skeleton.css'

import uwlogo from "../images/aboutMePage/uwlogo.png";

import babyPic from "../images/aboutMePage/eddieAsBaby.svg";
import adultPic from "../images/aboutMePage/eddieAsAdult.svg";
import funFact from "../images/aboutMePage/eddieOnStool.svg";

import compEng from "../images/aboutMePage/computerEngineering.svg";
import compSci from "../images/aboutMePage/computerScience.svg";
import digStud from "../images/aboutMePage/digitalStudies.svg";

const  eddieResumePDF = process.env.PUBLIC_URL + '/eddieResume.pdf';


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

    const [babyPicLoading, setBabyPicLoading] = useState(true)
    const [adultPicLoading, setAdultPicLoading] = useState(true)
    const [funPicLoading, setFunPicLoading] = useState(true)

        return(
        <div>
            <Helmet>
                <title>About Me | Eddie Estevez</title>
                <meta name="description" content="Hello World! I'm Eddie! It's nice to meet you!"/>
                <meta property="og:title" content="About Me | Eddie Estevez"/>
                <meta property="og:description" 
                content="Hello World! I'm Eddie! It's nice to meet you!" 
                />
            </Helmet>
            <Hero id="hereOnHomePage" title={props.title}/>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <h2 className="about__heading">I'm Eddie! It's nice to meet you!</h2>

                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <h4 className="mt-3">My Origin Story</h4>
                                <p>
                                Born and raised in Milwaukee, Wisconsin, I’ve grown up to be someone who really appreciates technology, the color blue, 
                                and a good cup of coffee. Just this past May (2021) I graduated from the University of Wisconsin – Madison, with 
                                degrees in both Computer Engineering and Computer Science, as well as a certificate (also known as a minor) in
                                Digital Studies. Within my time as a university student, I also took classes that peaked my interests outside of my
                                degrees, such as Spanish and Italian classes, Choir, Theater, more.
                                </p>
                                <p>
                                My love for tech started when my dad brought home our very first computer. Ten-year-old me promptly elected myself as the
                                tech guru of the family. In middle school, I got my first smartphone, an LG android device that I almost immediately 
                                started tinkering with, such as installing custom operating systems and more. In high school, I was able to take my first
                                computer science courses, learning Python and Java, and what software engineering was, specifically with scrum and agile thinking.
                                I was fortunate enough to have learned enough to land my very first internship as a high school graduate in the summer of 2017 
                                at the Fortune 500 financial services company, Northwestern Mutual.
                                </p>

                            </div>
                            <div className="col-md-6 mt-4">
                                {(babyPicLoading)?(<><Skeleton className="img-fluid aboutImage d-block m-auto" width={300} /></>):(<></>)}
                                <img src={babyPic} alt="Baby Eddie" className={`img-fluid aboutImage d-block m-auto ${(babyPicLoading)?("hidden"):("")}`} onLoad={() => {setBabyPicLoading(false)}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light mt-4">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 order-md-2">
                            <h4 className="mt-3">Where My Story Is Right Now</h4>
                            <p>
                            I am a new graduate from the University of Wisconsin – Madison, having graduated with a B.S in Computer Engineering and a BMAJ 
                            (secondary major) in Computer Science, as well as with a certificate/minor in Digital Studies. As a visual-focused person, I enjoy front-end development 
                            for websites and apps, as well as creating digital media for social apps, such as YouTube. I have had incredible opportunities of working 
                            within Northwestern Mutual and BlackRock as an intern, as well as embarking on freelance work developing the website for a local business 
                            in Madison, WI, La Cosecha Tortilla Company. Outside of tech, I enjoy running, reading, and I really appreciate good coffee, proudly owning 
                            a vast assortment of devices to make it.
                            </p>
                                <div className="text-center">
                                        <a className="btn btn-primary mb-4" role="button" href={eddieResumePDF} target='_blank' rel="noopener noreferrer">My Resume</a>
                                </div>
                        </div>
                        <div className="col-md-6 order-md-1 mb-3 overflow-hidden">
                        {(adultPicLoading)?(<><Skeleton className="img-fluid aboutImage d-block m-auto" width={300} /></>):(<></>)}
                                <img src={adultPic} alt="Baby Eddie" className={`img-fluid aboutImage d-block m-auto ${(adultPicLoading)?("hidden"):("")}`} onLoad={() => {setAdultPicLoading(false)}} />
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
                                <img className="img-fluid m-auto uwLogo" src={uwlogo} alt="TODO"/>
                            
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-sm-4">
                            
                            <h6>B.S in Computer Engineering</h6>
                            <img className="img-fluid educationIcon my-4" src={compEng} alt="Software Development Icon"/>
                            <p>
                            I studied the design, development, analysis, and manufacture of computer hardware and low-level software. I started with learning binary to using a hardware description language called Verilog to develop my own 16-bit MIPS Microprocessor. In the middle, I learned the necessary electrical engineering to understand embedded systems as well as signal processing.
                                </p> </div>
                            <div className="col-sm-4">
                            <h6>BMAJ in Computer Science</h6>
                            <img className="img-fluid educationIcon my-4" src={compSci } alt="Software Development Icon"/>
                                <p>
                                I studied the theory, application, and engineering behind software. I have learned how to work within a scrum team to deliver a workout app built with React Native, the theory behind computer science algorithms, the efficiencies of data structures and sorting algorithms, as well as various applications such as machine learning, website development, and operating systems.
                                    </p></div>
                            <div className="col-sm-4">
                            <h6>Certificate in Digital Studies</h6>
                            <img className="img-fluid educationIcon my-4" src={digStud } alt="Software Development Icon"/>
                            <p>I studied how the internet and everything digital affects culture, as well as how to best use modern tools to marry form and function within digital media, whether it be a website, video, podcast, etc. </p>
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
                            <h5>I Was In A Dating Show!</h5>
                            <p>I was a part of Season 1 of an online national dating show called Love Campus with the pseudonym of Danny, you can find the episodes on the <a href="https://www.instagram.com/lovecampusofficial/">Love Campus Instagram account</a>.</p>
                            <h5>Very Involved In The Meme Culture of the University of Wisconsin-Madison!</h5>
                            <p>I was the admin for the University of Wisconsin-Madison’s meme page called <a href="https://www.facebook.com/groups/175526726305977">UW Madison Memes for Milk-Chugging Teens</a>.
                            This page has been a platform for me to make memes and videos for a growing group that currently stands at almost 30k members. I was also a contributing member of the UW-Madison Meme Club, B.O.I, whose acronym of course stood for Meme Analysis Club.
                            </p>
                            <h5>I Love Learning Languages!</h5>
                            <p>I grew up bilingual, speaking both English and Spanish. In College, I picked up two semesters of Italian, and continue to learn it today in an effort to be trilingual. Duolingo is a great app for that which I use almost daily.</p>
                            <h5>Recently Learned How To Swim!</h5>
                            <p>After years of trying to teach myself and placing myself in a swimming class in high school, I just learned and became comfortable swimming this summer (2021)!</p>

                        </div>
                        <div className="col-md-6 order-md-1 mb-3">
                        {(funPicLoading)?(<><Skeleton className="img-fluid aboutImage d-block m-auto" width={300} /></>):(<></>)}
                                <img src={funFact} alt="Eddie On A Stool" className={`img-fluid aboutImage d-block m-auto ${(funPicLoading)?("hidden"):("")}`} onLoad={() => {setFunPicLoading(false)}} />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
    
} 

export default AboutPage