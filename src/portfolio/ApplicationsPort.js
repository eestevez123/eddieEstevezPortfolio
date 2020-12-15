import React from 'react';
import Image from "react-bootstrap/Image"
import workoutScreensImg from '../images/workoutAppScreens.png';
import Hero from "../components/Hero"
import Content from "../components/Content";

function ApplicationsPort(props) {


    return(<>
    <Hero title={props.title} className="mb-0"/>
    <Content id="applications">
        <h3 className="mt-5">Workout Routine Builder Application</h3>
        <Image id="workoutScreensImg" src={workoutScreensImg} rounded className="mx-auto" />
        <h5> This app was created by a team of 6 students, including myself, within CS 506: Software Engineering. This application was built using React Native, as well as had a
            mongoDB backend that allowed for users to create accounts and store information such as the workout routines that htey build onto the server. Front-End testing was done
            with Espresso with the application ejected and built for android, and JEST was used for further front-end and back-end testing.
        </h5>
        </Content>
    </>)
}

export default ApplicationsPort;