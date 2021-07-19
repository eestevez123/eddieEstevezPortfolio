
import React from 'react';

import Hero from "../components/Hero";


import placeholderImg from "../images/placeholder.png";


function NotFoundPage(props) {

        return(
        <div>
            <Hero id="hereOnHomePage" title={props.title}/>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <h2 className="about__heading">404!</h2>

                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6">
                                <p>
                                TODO
                                </p>

                            </div>
                            <div className="col-sm-6 mt-4">
                                <img className="img-flud aboutImage d-block m-auto" src={placeholderImg} alt="TODO"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
    
} 

export default NotFoundPage;