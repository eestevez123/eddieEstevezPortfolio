import React from 'react';

import Hero from "../components/Hero";

import "./AboutPage.css"

import placeholderImg from "../images/placeholder.png";
import uwlogo from "../images/aboutMePage/uwlogo.png";

import compEng from "../images/aboutMePage/computerEngineering.svg";
import compSci from "../images/aboutMePage/computerScience.svg";
import digStud from "../images/aboutMePage/digitalStudies.svg";

const  eddieResumePDF = process.env.PUBLIC_URL + '/eddieResume.pdf';

function AboutPage(props) {

        return(
        <div>
            <Hero id="hereOnHomePage" title={props.title}/>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <h2 className="about__heading">I'm Eddie! It's nice to meet you!</h2>

                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6">
                                <h4 className="mt-3">My Origin Story</h4>
                                <p>
                                Born and raised in Milwaukee, Wisconsin, I’ve grown up to be someone who really appreciates technology, the color blue, and a good cup of coffee. Just this past May (2021) I have graduated from the University of Wisconsin – Madison, 
                                with the degrees of both Computer Engineering and Computer Science, as well as a certificate (also known as a minor) in Digital Studies. Within my time as a university student, I also took classes that peaked my interests outside of 
                                my degrees, such as Spanish and Italian classes, Choir, and more. 
                                </p>
                                <p>
                                My love for tech started when my dad brought home our very first computer. Ten-year-old me promptly elected myself as the tech guru of the family. In middle school, I got my first smartphone, an LG android device that I almost 
                                immediately started tinkering, such as installing custom operating systems and more. In high school, I was able to take my first computer science courses, learning Python and Java first and what was software engineering, specifically 
                                with scrum and agile thinking. I was fortunate enough to have learned enough to land my first internship as a newly high school graduate at the Fortune 500 financial services company, Northwestern Mutual.   
                                </p>

                            </div>
                            <div className="col-sm-6 mt-4">
                                <img className="img-flud aboutImage d-block m-auto" src={placeholderImg} alt="TODO"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light mt-4">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-6 order-sm-2">
                            <h4 className="mt-3">Where My Story Is At Right Now</h4>
                            <p>
                            I am a new graduate from the University of Wisconsin – Madison, having graduated with a B.S in Computer Engineering and BMAJ in Computer Science (secondary major), a certificate/minor in Digital Studies.  
                            As a visual-focused person, I enjoy front-end development for websites and apps, as well as creating digital media for social apps, such as YouTube. I have had the fortunate opportunities of working within 
                            Northwestern Mutual and BlackRock as an intern, as well as embarking in freelance work developing the website for a local tortilla business La Cosecha. Outside of tech, I enjoy running, reading, and really 
                            appreciate good coffee, proudly owning a collection of devices to make it.
                            </p>
                                <div className="text-center">
                                        <a className="btn btn-primary mb-4" role="button" href={eddieResumePDF} target='_blank' rel="noopener noreferrer">My Resume</a>
                                </div>
                        </div>
                        <div className="col-sm-6 order-sm-1 mb-3">
                            <img className="img-flud aboutImage d-block m-auto" src={placeholderImg} alt="TODO"/>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <h2 className="about__heading">Education</h2>

                        <div className="row justify-content-center align-items-center text-center">
                            <div className="col-12">
                            <h6>University of Wisconsin-Madison</h6>
                                <h6 className="fw-light">Class of 2021</h6>
                                <img className="img-flud m-auto uwLogo" src={uwlogo} alt="TODO"/>
                            
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-sm-4">
                            
                            <h6>B.S in Computer Engineering</h6>
                            <img className="img-fluid educationIcon my-4" src={compEng} alt="Software Development Icon"/>
                            <p>Studied the design, development, analyzation, and manufacture of computer hardware and low-level software. I started with learning binary to using a hardware description language 
                                called Verilog to develop my own 16-bit MIPS Microprocessor. In the middle I learned the necessary electrical engineering to understand embedded systems as well signal processing</p>
                            </div>
                            <div className="col-sm-4">
                            <h6>BMAJ in Computer Science</h6>
                            <img className="img-fluid educationIcon my-4" src={compSci } alt="Software Development Icon"/>
                                <p>Studied the theory, application, and engineering behind software. I have learned how to work within a scrum team to deliver workout app built with React Native, 
                                    the theory behind computer science algorithms, the efficiencies of data structures and sorting algorithms, as well as various applications such machine learning, 
                                    website development, and the systems in place within an operating system. </p>
                                </div>
                            <div className="col-sm-4">
                            <h6>Certificate in Digital Studies</h6>
                            <img className="img-fluid educationIcon my-4" src={digStud } alt="Software Development Icon"/>
                            <p>Studied how the internet and everything digital affects culture, as well as how to best use modern tools to marry form and function within digital media, whether it be a website, video, podcast, etc. </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-light mt-4">
                <div className="container">
                <h2 className="about__heading">Fun Facts</h2>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 order-sm-2">
                            <p>Was a part of Season 1 of an online national dating show called Love Campus with the pseudonym of Danny, you can find the episodes on their Instagram account here.</p>
                            <p>Was the admin to the University of Wisconsin-Madison’s meme page called UW Madison Memes for Milk-Chugging Teens. This page has been me a platform to make memes and videos for a growing group that currently stands at almost 30k members. 
                                Find the page here. I was also a contributing member of the UW-Madison Meme Club, BOI which of course stood for Meme Analysis Club</p>
                            <p>As a Mexican American, I grew being bilingual in English and Spanish. In College, I picked up two semesters of Italian, and continue to learn it today in an effort to be trilingual. </p>
                            <p>After years of trying to teach myself and placing myself in classes, I just learned and became comfortable swimming this summer!</p>

                        </div>
                        <div className="col-sm-6 order-sm-1 mb-3">
                            <img className="img-flud aboutImage d-block m-auto" src={placeholderImg} alt="TODO"/>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
    
} 

export default AboutPage;