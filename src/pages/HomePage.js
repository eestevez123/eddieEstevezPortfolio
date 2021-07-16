import React from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom";

import "./HomePage.css"
import Hero from "../components/Hero";
import { motion } from "framer-motion"
import InteractiveShapes from "../components/InteractiveShapes";

// Images
import placeholderImg from "../images/placeholder.png";

import softwareIcon from "../images/softwareDevIcon.svg";
import designerIcon from "../images/designerIcon.svg";
import contentIcon from "../images/contentCreatorIcon.svg";

import eddieProfilePic from "../images/eddieHome.png"

function HomePage(props) {

    return(
        <div>
        <Hero id="hereOnHomePage" title={props.title} subTitle={props.subTitle}/>
        <div className="container justify-content-center d-flex">
            <div className="row">
                <div className="col">
                <motion.img
                    src={eddieProfilePic}
                    className="img-fluid eddieProfile"
                    alt="Me, Eddie Estevez"
                    drag
                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    dragTransition={{ bounceStiffness: 800, bounceDamping: 25 }}
                    dragElastic={0.75}
                    whileTap={{ cursor: "grabbing" }}
                />
                </div>
            </div>
        </div>



        <InteractiveShapes id="interactiveShapes"/>

        <div className="container-fluid bg-myBlue text-white mt-5 p-5">
            <div className="container justify-content-center d-flex">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="fw-bold">A Little About Me</h2>
                        <p className="fw-light">A Milwaukee native and overall computer nerd with a passion for creative digital media and design. I enjoy challenging myself with goals and projects in an effort to place myself outside of 
                        my comfort zone and to continuously learn. Those goals and projects usually involved thinking outside the box with tools both familiar and unfamiliar to make something 
                        truly unique and personal. As I start my career, I want to keep exploring the world of tech with my optimistic and extroverted perspective.</p>
                        <Link to="/about">
                            <button type="button" class="btn btn-outline-light">Learn More About Me</button>
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
                    <img className="img-fluid skillIcon my-4" src={softwareIcon } alt="Software Development Icon"/>
                    <p className="font-weight-light mx-2 mt-2">With a passion for design and code, being a front-end developer has given be a chance to stretch my artistic and analytical
                     muscles. I also like to dabble with other tools to develop software and for data processing.</p>

                     <div className="row mb-3">
                     <div className="col-6">
                        <h5 className="font-myBlue fw-bold">Languages</h5>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>Matlab</li>
                                <li>Verilog</li>
                                <li>C</li>
                            </ul>
                            </div>
                            <div className="col-6">
                        <h5 className="font-myBlue fw-bold">Tools</h5>
                        <ul>
                            <li>React</li>
                            <li>Tableau</li>
                            <li>JQuery</li>
                            <li>Github</li>
                            <li>NodeJS</li>
                            <li>Bootstrap</li>
                            <li>Jupyter Notebooks</li>
                            <li>Numpy</li>
                            <li>Pytorch</li>
                            <li>Pandas</li>
                            <li>VS Code</li>
                            <li>Eclipse</li>
                            <li>PyCharm</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 border border-top-0"> 
                    <h4 className="fw-bold mt-4 mt-md-0">Designer</h4>
                    <img className="img-fluid skillIcon my-4 designerIcon" src={designerIcon } alt="Designer Icon"/>
                    <p className="font-weight-light mx-2 mt-2">I consider myself a very visual and imaginative person, so the task of coming up with elegant and useful tasks is always a 
                    fun exercise.</p>
                        <h5 className="font-myBlue fw-bold">Tools</h5>
                    <ul>
                        <li>Adobe XD</li>
                        <li>Figma</li>
                        <li>Adobe Photoshop</li>
                        <li>GIMP</li>
                        <li>Adobe Illustrator</li>
                        <li>Adoe After Effects</li>
                        <li>Canva</li>
                    </ul>

                </div>
                <div className="col-md-4 border border-top-0  rounded-right"> 
                    <h4 className="fw-bold mt-4 mt-md-0">Content Creator</h4>
                    <img className="img-fluid skillIcon my-4" src={contentIcon} alt="Content Creator Icon"/>
                    <p className="font-weight-light mx-2 mt-2">It all started with me making memes for my University’s Facebook meme page, and I just kept on going. 
                    Today, I love editing in all forms, from video, photo, and sound, to create.</p>
                         <h5 className="font-myBlue fw-bold">Tools</h5>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe After Effects</li>
                        <li>Adobe Premiere Pro</li>
                        <li>Adobe Audition</li>
                        <li>Adobe Audition</li>
                        <li>GIMP</li>
                        <li>A Canon EOS Rebel T6i DSLR Camera</li>
                    </ul>

               </div>
            </div>
        </div>

        <div className="container content-justify-center text-center align-items-center mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={placeholderImg} alt="TODO" className="img-fluid workImage"/>
                </div>
                <div className="col-md-6">
                    <p>I could go on and say how good my work is, but I think my work can speak for itself! I have selected some of my works and experiences and explained 
                        what I did for each experience and what I gained from it. </p>
                        <Link to="/portfolio">
                            <button type="button" class="btn btn-primary">See My Work</button>
                        </Link>
                </div>
            </div>
        </div>


        <div className="container-fluid bg-myBlue text-white mt-5 p-5">
            <div className="container content-justify-center text-center align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-6 order-md-2">
                        <img src={placeholderImg} alt="TODO" className="img-fluid workImage"/>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <p>Don’t be shy! As a people person, I enjoy any opportunity for conversation, even if its just a hello. </p>
                        <Link to="/contact">
                                <button type="button" class="btn btn-outline-light">Talk To Me</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>

        


        </div>
        )
} 

export default HomePage;