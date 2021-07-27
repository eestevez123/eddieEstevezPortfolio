
import React from 'react';
import { Link } from "react-router-dom";
import penguinPic from "../images/penguin.svg"

import { useSpring, animated } from 'react-spring'


function NotFoundPage() {

        const penguinAnimation = useSpring({
            to: { opacity: 1, x:0},
            from: { opacity: 0, x:-100},
            delay: 500
        })

        const textFromRight = useSpring({
            to: { opacity: 1, x:0},
            from: { opacity: 0, x:100},
        })

        const textComeUp = useSpring({
            to: { opacity: 1, y:0},
            from: { opacity: 0, y:100},
        })

        const buttonComeIn = useSpring({
            to: { opacity: 1},
            from: { opacity: 0},
            delay: 1000
        })

        return(
        <>

            <div className="container-fluid bg-myBlue notFoundPageBackground text-white">
                <div className="container notFoundPageContainer">
                <div className="row align-items-center text-center">
                    <div className="col d-flex justify-content-end"><animated.img style={penguinAnimation} src={penguinPic} alt="penguin" className="lostPenguin img-fluid"/></div>
                    <div className="col d-flex"><animated.h1 style={textFromRight}>Oh no! A 404 Error :(</animated.h1></div>
                </div>
                <div className="row text-center">
                    <div className="col pt-5"><animated.h1 style={textComeUp}>Even though you're lost, you found this penguin! So that's cool</animated.h1></div>
                </div>
                <div className="row text-center">
                    <div className="col pt-5">
                        <Link to="/">
                            <animated.button style={buttonComeIn} type="button" className="btn btn-outline-light btn-lg">Let's Go Back Home</animated.button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
    
} 

export default NotFoundPage;