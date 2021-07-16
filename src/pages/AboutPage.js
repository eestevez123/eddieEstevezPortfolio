import React from 'react';

import Hero from "../components/Hero";

import Button from 'react-bootstrap/Button';
import placeholderImg from "../images/placeholder.png";

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
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                                like Aldus PageMaker including versions of Lorem Ipsum.
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
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                                <div className="text-center">
                                        <a className="btn btn-primary mb-2" role="button" href={eddieResumePDF} target='_blank' rel="noopener noreferrer">My Resume</a>
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

                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6">
                            <h6>University of Wisconsin-Madison</h6>
                                <h6 className="font-weight-light">Class of 2021</h6>
                                <h6>B.S in Computer Science</h6>
                                <h6>B.S in Computer Engineering</h6>
                                <h6>Certificate in Digital Studies</h6>

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
                <h2 className="about__heading">Fun Facts</h2>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 order-sm-2">
                        <h2>Languages</h2>
                        <h2>Programs</h2>

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