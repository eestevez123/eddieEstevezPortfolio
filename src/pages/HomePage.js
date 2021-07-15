import React from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom";

import "./HomePage.css"
import Hero from "../components/Hero";
import { motion } from "framer-motion"
import InteractiveShapes from "../components/InteractiveShapes";
import placeholderImg from "../images/placeholder.png";

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
                        <p className="fw-light">Non do ut incididunt incididunt. Adipisicing dolore reprehenderit non nulla eu ea. Consectetur esse enim aliqua do cupidatat voluptate velit do eiusmod ea do tempor reprehenderit ut. Lorem fugiat duis ut occaecat aliqua ut duis proident. Qui commodo consectetur do qui dolore. Id ea laborum laboris reprehenderit consequat deserunt occaecat.</p>
                        <Link to="/about">
                            <button type="button" class="btn btn-outline-light">Learn More About Me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-myBlue text-white p-5"> </div>

        <div className="container justify-content-center bg-white rounded skillChart">
            <div className="row mw-100 text-center">
                <div className="col-md-4"> 
                    <h4 className="fw-bold">Front-End Developer</h4>
                    <img className="img-fluid skillIcon my-2" src={placeholderImg} alt="TODO"/>
                    <p className="font-weight-light mx-2 mt-2">Qui qui quis occaecat dolor occaecat eiusmod irure minim ad reprehenderit. Minim duis deserunt cupidatat nulla proident ut pariatur. Adipisicing sunt elit non voluptate mollit ex aliquip sit pariatur occaecat qui ut anim in. Labore cupidatat proident nulla deserunt magna eiusmod.</p>
                    <h5 className="font-myBlue fw-bold">I've Worked With</h5>
                    <ul>
                        <li>asdasd</li>
                    </ul>
                </div>
                <div className="col-md-4"> 
                    <h4 className="fw-bold">Designer</h4>
                    <img className="img-fluid skillIcon my-2" src={placeholderImg} alt="TODO"/>
                    <p className="font-weight-light mx-2 mt-2">Qui qui quis occaecat dolor occaecat eiusmod irure minim ad reprehenderit. Minim duis deserunt cupidatat nulla proident ut pariatur. Adipisicing sunt elit non voluptate mollit ex aliquip sit pariatur occaecat qui ut anim in. Labore cupidatat proident nulla deserunt magna eiusmod.</p>
                    <h5 className="font-myBlue fw-bold">I've Worked With</h5>
                    <ul>
                        <li>asdasd</li>
                    </ul>

                </div>
                <div className="col-md-4"> 
                    <h4 className="fw-bold">Content Creator</h4>
                    <img className="img-fluid skillIcon my-2" src={placeholderImg} alt="TODO"/>
                    <p className="font-weight-light mx-2 mt-2">Qui qui quis occaecat dolor occaecat eiusmod irure minim ad reprehenderit. Minim duis deserunt cupidatat nulla proident ut pariatur. Adipisicing sunt elit non voluptate mollit ex aliquip sit pariatur occaecat qui ut anim in. Labore cupidatat proident nulla deserunt magna eiusmod.</p>
                    <h5 className="font-myBlue fw-bold">I've Worked With</h5>
                    <ul>
                        <li>asdasd</li>
                    </ul>

               </div>
            </div>
        </div>

        <div className="container content-justify-center text-center align-items-center">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={placeholderImg} alt="TODO" className="img-fluid workImage"/>
                </div>
                <div className="col-md-6">
                    <p>Veniam quis aliquip aliqua aliquip ut ipsum. Ullamco id sunt adipisicing dolor velit cupidatat. Est tempor Lorem do aliquip commodo irure dolore nulla ut irure cupidatat elit.</p>
                    <Link to="/portfolio">
                            <button type="button" class="btn btn-primary">See More of My Work</button>
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
                        <p>Better yet, why not just contact me directly?</p>
                        <Link to="/contact">
                                <button type="button" class="btn btn-primary">Talk To Me</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>

        


        </div>
        )
} 

export default HomePage;