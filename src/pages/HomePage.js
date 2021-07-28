import React, {useState} from 'react';
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

import "./HomePage.css"
import Hero from "../components/Hero";
import { motion } from "framer-motion"
import InteractiveShapes from "../components/InteractiveShapes";

import softwareIcon from "../images/homePage/softwareDevIcon.svg";
import designerIcon from "../images/homePage/designerIcon.svg";
import contentIcon from "../images/homePage/contentCreatorIcon.svg";

import workIcon from "../images/homePage/working.svg";
import greetingIcon from "../images/homePage/greetings.svg";

import eddieProfilePic from "../images/homePage/eddieHome.png"

function HomePage(props) {
    
    const [mainEddieImageLoading, setmMinEddieImageLoading] = useState(true);

    return(
        <div>
            <Helmet>
                <title>Eddie Estevez</title>
                <meta name="description" content="Welcome to my personal website where you can learn more about me and my work!"/>
            </Helmet>
        <Hero id="hereOnHomePage" title={props.title} subTitle={props.subTitle}/>
        <div className="container justify-content-center d-flex">
            <div className="row  justify-content-center">
                <div className="col-8 col-sm-12">
                    {(mainEddieImageLoading)?(<>
                    <Skeleton height={300}/>
                    </>):(<></>)}
                <motion.img
                    src={eddieProfilePic}
                    className={`eddieProfile img-fluid ${mainEddieImageLoading?("hidden"):("")}`}
                    alt="Me, Eddie Estevez"
                    drag
                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    dragTransition={{ bounceStiffness: 800, bounceDamping: 25 }}
                    dragElastic={0.75}
                    whileTap={{ cursor: "grabbing" }}
                    onLoad={()=>{setmMinEddieImageLoading(false)}}
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
                        <p className="fs-5">A Milwaukee native and overall computer nerd. I have a passion for digital media and design. I love a good challenge that can get me outside of my comfort zone, especially when equipped with a good cup of coffee. As a self-proclaimed extrovert, I also enjoy a good conversation, doubly so if it's over coffee. Did I mention I like coffee yet? </p>
                        <Link to="/aboutme">
                            <button type="button" className="btn btn-outline-light">Learn More About Me</button>
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
                    <p className="fs-6 mx-2 mt-2">With a passion for design and code, being a front-end developer has given be a chance to stretch my artistic and analytical
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
                                <li>PHP</li>
                            </ul>
                    </div>
                            <div className="col-6">
                        <h5 className="font-myBlue fw-bold">Tools</h5>
                        <ul>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Expo</li>
                            <li>Tableau</li>
                            <li>Jenkins</li>
                            <li>Jest</li>
                            <li>JQuery</li>
                            <li>Github</li>
                            <li>NodeJS</li>
                            <li>Bootstrap</li>
                            <li>Jupyter</li>
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
                    <p className="fs-6 mx-2 mt-2">
                    I consider myself a very visual and imaginative person, so the task of coming up with a elegant and useful design is always a fun exercise.
                        </p>
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
                    <p className="fs-6 mx-2 mt-2">It all started with me making memes for my University’s Facebook meme page, and I just kept going. Today, I love editing in all forms, from video, photo, and sound, to create.</p>
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
            
                    <img src={workIcon} alt="Briefcase" className="img-fluid workImage m-3"/>
               
                </div>
               
                
                <div className="col-md-6">
              
                    <p className="fs-5">I could go on and say how good my work is, but I think my work can speak for itself!
                    I have selected some of my works and experiences to explain what I did and what I gained from them. </p>
                    
                        <Link to="/mywork">
                            <button type="button" className="btn btn-primary">See My Work</button>
                        </Link>
              
                </div>
                
            </div>
        </div>


        <div className="container-fluid bg-myBlue text-white mt-5 p-5">
            <div className="container content-justify-center text-center align-items-center">
                <div className="row align-items-center">
                
                    <div className="col-md-6 order-md-2">
                 
                        <img src={greetingIcon} alt="Stick Figure Saying Hello" className="img-fluid workImage"/>
                
                    </div>
                    <div className="col-md-6 order-md-1">

                        <p className="fs-5">Don’t be shy! As a people person, I enjoy any opportunity for a conversation, even if it’s just a hello. </p>
                        <Link to="/letsconnect">
                                <button type="button" className="btn btn-outline-light">Talk To Me</button>
                        </Link>
                   
                    </div>
                </div>
            </div>
            
        </div>

        


        </div>
        )
} 

export default HomePage;