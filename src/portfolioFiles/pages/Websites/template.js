
import React from 'react';


import placeholderImg from "../../../images/placeholder.png";


function Template(props) {

        return(
        <div>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <h2 className="about__heading">Template</h2>

                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6">
                                <p>
                                Template
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

export default Template;