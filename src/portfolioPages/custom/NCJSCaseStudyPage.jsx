import React, {useState} from "react";
import {Helmet} from "react-helmet-async";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

import "./caseStudies.css"
import 'react-loading-skeleton/dist/skeleton.css'

import CoverPic from "../../images/caseStudies/ncjs_background.jpg";
import Journals from "../../images/caseStudies/just_and_dujs.png";
import Persona from "../../images/caseStudies/ncjs_userPersona.jpg";
import Sketch from "../../images/caseStudies/NCJS_Sketch.jpg";
import Color from "../../images/caseStudies/ncjsColor.png";
import Font from "../../images/caseStudies/ncjsFont.png";

function NCJSCaseStudyPage(props) {

    const [isLoadingCover, setIsLoadingCover] = useState(true);
    
        return(
        <>
        <Helmet>
            <title> NCJS Case Study| Eddie Estevez</title>
            <meta name="description" content={"A Case Study for the Workout Application I and 5 others builts for UW-Madison's CS 506 course."}/>
            <meta property="og:title" 
                content={`NCJS Case Study | Eddie Estevez`}
            />
            <meta property="og:description" 
                content="A Case Study for the Workout Application I and 5 others builts for UW-Madison's CS 506 course."
            />
        </Helmet>

            <div className="container">
                <div className="top-section">
                <Link to ="/mywork">
                    <button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                </Link>
                    <h2 className="about__heading">
                        {"NCJS Case Study"}
                    </h2>
                </div>
            </div>

            <div className="container-fluid bg-light mt-4">
                    <div className="container">
                        <div className="row pt-0">
                            <div className="col">
                                <div className="overflow">
                                    {isLoadingCover?(<><Skeleton height={300}/></>):(<></>)}
                                    <img onLoad={()=>{
                                        setIsLoadingCover(false)
                                    }}
                                    className={`portfolioCoverImage img-fluid d-block m-auto ${isLoadingCover?"hidden":""}`} src={CoverPic} alt="cover"/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col-sm-4">
                            <h3>Timeline</h3>
                            <p>Summer of 2019 (July to September - 10 weeks)</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>My Role</h3>
                            <p>Web Designer and UX/UI developer</p>
                        </div>
                        <div className="col-sm-4">
                        <h3>My Team</h3>
                        <p>Sam Neff - Director of NCJS</p>
                        <p>Ashely Harris - Graphic Designer</p>
                        </div>


                    </div>
                </div>

                <div className="container-fluid bg-light mt-4 py-5 pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>The Problem</h2>
                                <h3 className="fw-bold my-5 mb-3">NCJS needs a website!</h3>
                                <p className="my-5 mt-2">NCJS (National Collegiate Journal of Science, a then-new organization whose goal was to be a home for academic research articles written by students across the country and facilitate conversations about STEM fields and advancements within them. Sam Neff, the director of NCJS, came to me through recommendation of my college Haley Dagenais from JUST (Journal of Undegraduate Science and Technology) at UW-Madison.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>The Solution</h2>
                        <h3 className="fw-bold my-5 mb-3">Let's Design and Develop the Website!</h3>
                        <p className="my-5 mt-2">With the help of Ashley Harris, the graphic designer within NCJS, I was able to start wireframing the design of the website through Adobe XD. Ashley provided feedback and UI elements, while I built out the wireframe and prototype. I aided NCJS in creating a Bluehost account to get a Wordpress site started.</p>
                    </div>
                </div>
                </div>


                <div className="container-fluid bg-light mt-4 py-5  pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>The Competition</h2>
                                <h3 className="fw-bold my-5 mb-3">College Specific Journals</h3>
                                <img src={Journals} alt="JUST and DUJS" className="img-fluid"/>
                                <p>Although there were many student organizations that had students write journal pieces about research happening on campus, there seemed to be no journal by students that help articles about research happening throughout the US. There were some
                                    organizations such as DUJS (Darthmouth Undergraduate Journal of Science) that accepted submissions from other universities, it was not advertised well enough through their website and outreach.  </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>The Persona</h2>
                        <h3 className="fw-bold my-5 mb-3">Meet John</h3>
                        <img src={Persona} alt="John - Persona" className="img-fluid my-3"/>
                        <p className="my-5">This project was the first time I would design a website from the ground-up for an organization outside of class. I knew that UI/UX design was a field I wanted to explore, and that creating a persona was very important, therefore although it was not requested
                            by Sam Neff, I created a persona to guide me through my design decisions.
                        </p>
                    </div>
                </div>
                </div>

                <div className="container-fluid bg-light mt-4 py-5  pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>The Design</h2>
                                <h3 className="fw-bold my-5 mb-3">Notebook Sketch</h3>
                                <img src={Sketch} alt="John - Persona" className="img-fluid my-3 notebookSketch mx-auto d-block"/>
                                <p className="my-5">Sam Neff was able to provide me a rough sketch of what he thought the website should look like. This served as a good starting point to add my own design decisions and build out the wireframe.</p>
                                <h3 className="fw-bold my-5 mb-3">NCJS Graphic Charter</h3>
                                <img src={Color} alt="John - Persona" className="img-fluid my-3 notebookSketch mx-auto d-block"/>
                                <img src={Font} alt="John - Persona" className="img-fluid my-3 notebookSketch mx-auto d-block"/>
                                <p className="my-5">Ashley Harris was able to provide me the graphic charter that held important information such as the colors, typography, and more that the website would ideally to follow.</p>
                                <h3 className="fw-bold my-5 mb-3">Adobe XD Wireframe and Prototype</h3>
                                <img src={"https://res.cloudinary.com/eestevez/image/upload/v1627777206/myWorkPage/website/ncjs2.png"} alt="John - Persona" className="img-fluid my-3 notebookSketch mx-auto d-block"/>
                                <p className="my-5">Taking inspiration from the design notebook sketch as well as other collegiate journals such as JUST and DUJS, I decided to go ahead and build out a wireframe using Adobe XD of what the website could look like. 
                                    Color and design decisions were made in collaboration with Ashley and the Graphic Charter she created</p>
                                <img src={"https://res.cloudinary.com/eestevez/image/upload/v1627777207/myWorkPage/website/ncjs3.png"} alt="John - Persona" className="img-fluid my-3 notebookSketch mx-auto d-block"/>
                                <p className="my-5">With the Adobe XD wireframe, I then connected the UI elements together before sending the prototype link out in order to get user feedback from not just the design but also from the experience of navigating the website</p>
                                
                                <h3 className="fw-bold my-5 mb-3">Design Feedback from others within NCJS</h3>
                                <img src={"https://res.cloudinary.com/eestevez/image/upload/v1627777209/myWorkPage/website/ncjs4.png"} alt="John - Persona" className="img-fluid my-3 notebookSketch mx-auto d-block"/>
                                <p className="my-5">Fortunately, I was able to get feedback from 4 different NCJS members. A lot of the feedback included font/element sizing and placement, inclusion of different UI elements, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>The Deliverables</h2>
                        <h3 className="fw-bold my-5 mb-3">A Fully Functioning Wordpress Website!</h3>
                        <img src={"https://res.cloudinary.com/eestevez/image/upload/v1627777208/myWorkPage/website/ncjs1.png"} alt="John - Persona" className="img-fluid my-3 notebookSketch mx-auto d-block"/>
                        <p className="my-5" > By the end of the 10 week mark, I was able to provide a fully functioning Wordpress website. When it came to the implementation of the website, I took a free template that closely resembled the Adobe XD design, and then when into the HTML and CSS code to change the looks to make it resemble the mock-up.</p>
                    </div>
                </div>
                </div>

                <div className="container-fluid bg-light mt-4 py-5  pt-4">
                <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>The Outcomes</h2>
                        <h3 className="fw-bold my-5 mb-3">A Growing Community</h3>
                        <p  className="my-5"> Currently, the NCJS Slack channel is nearing 200 members, a huge increase from the 8 founding members (including me). The current design has changed since my time at NCJS, but the original framework still exists. </p>
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
                    <Link to ="/mywork">
                    <   button type="button" className="btn btn-outline-primary my-5">Go Back</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
            )
    
} 

export default NCJSCaseStudyPage