import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";



import placeholderImg from "../../../images/placeholder.png";


function Template(props) {

    let { portfolioURL } = useParams();

        return(
        <>
        <p>{portfolioURL}</p>
            <div className="container">
                <div className="top-section">
                <Link to ="/mywork">
                    <button type="button" className="btn btn-outline-primary m-3">Go Back</button>
                </Link>
                    <h2 className="about__heading">
                        My Resume Website
                    </h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-6">
                            <h4 className="mt-3">
                                Background
                            </h4>
                            <p>
                                Amet consequat nisi cillum tempor est do sunt do est. Culpa quis irure exercitation ullamco eiusmod incididunt excepteur tempor proident in mollit irure. In laboris sunt esse qui ad occaecat. Deserunt esse eiusmod do officia nostrud do pariatur fugiat cupidatat ea aliqua magna ullamco consequat. Officia cupidatat proident sint reprehenderit laborum quis.
                            </p>

                        </div>
                        <div className="col-sm-6 mt-4">
                            <img className="img-flud aboutImage d-block m-auto" src={placeholderImg} alt="TODO"/>
                        </div>

                    </div>
                </div>
            </div>
                            
            <div className="container-fluid bg-light mt-4">
                <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6 order-sm-2">
                                <h4 className="mt-3">
                                    What I Did
                                </h4>
                                <p>
                                    Amet consequat nisi cillum tempor est do sunt do est. Culpa quis irure exercitation ullamco eiusmod incididunt excepteur tempor proident in mollit irure. In laboris sunt esse qui ad occaecat. Deserunt esse eiusmod do officia nostrud do pariatur fugiat cupidatat ea aliqua magna ullamco consequat. Officia cupidatat proident sint reprehenderit laborum quis.
                                </p>

                            </div>
                            <div className="col-sm-6 mt-4 order-sm-1 mb-4">
                                <img className="img-flud aboutImage d-block m-auto" src={placeholderImg} alt="TODO"/>
                            </div>
                    </div>
                </div>                
            </div>
            <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-6 ">
                                <h4 className="mt-3">
                                    What I Learned
                                </h4>
                                <p>
                                    Amet consequat nisi cillum tempor est do sunt do est. Culpa quis irure exercitation ullamco eiusmod incididunt excepteur tempor proident in mollit irure. In laboris sunt esse qui ad occaecat. Deserunt esse eiusmod do officia nostrud do pariatur fugiat cupidatat ea aliqua magna ullamco consequat. Officia cupidatat proident sint reprehenderit laborum quis.
                                </p>

                            </div>
                            <div className="col-sm-6 mt-4 ">
                                <img className="img-flud aboutImage d-block m-auto" src={placeholderImg} alt="TODO"/>
                            </div>
                    </div>
                </div> 
    </>
    )
    
} 

export default Template;