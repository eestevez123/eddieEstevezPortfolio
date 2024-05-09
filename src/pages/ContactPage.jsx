import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import emailjs from '@emailjs/browser';

import Hero from "../components/Hero";
import ContactItem from "../components/ContactItem";

import instagramIcon from "../images/contactPage/insta.svg";
import linkedInLogo from "../images/contactPage/linkedIn.svg";

import CONFIG from "../config";

// Email Status
const EmailState = {
    DEFAULT: 'defaultEmail',      // Email has not been sent yet
    SENDING: 'sendingEmail',    // Email is in the process of being sent
    SENT: 'sentEmail',          // Email has been sent
    EMPTY: 'emptyEmail',        // Email was attempted to be sent with a blank message
    ERROR: 'emailError',        // Email was attempted to sent, but there was an error
    WAIT: 'emailWait'           // Cool-down timer is in effect, cannot sent email at this moment
    };

/**
 * Component representing the Home page.
 * This component renders the Home page with social media links and a contact form.
 *
 * @component
 * @param {Object} props - The props object containing the title for the Hero component.
 * @param {string} props.title - The title to be displayed in the Hero component.
 * @returns {JSX.Element} JSX element representing the Home page.
 */
function HomePage(props) {

    const [emailState, setEmailState] = useState(EmailState.DEFAULT);
    
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(5); // 5 seconds

    useEffect(() => {
        emailjs.init({
            publicKey: CONFIG.EMAILJS_PUBLIC_KEY,
            limitRate: {
                throttle: 5000
            }
        })
    }, [])

    useEffect(() => {
        let interval;
    
        if (isTimerRunning) {
          interval = setInterval(() => {
            setTimerSeconds((prevSeconds) => prevSeconds - 1);
          }, 1000);
        }
    
        return () => clearInterval(interval);
      }, [isTimerRunning]);

      useEffect(() => {
        if (timerSeconds === 0) {
          setIsTimerRunning(false);
        }
      }, [timerSeconds]);

    /**
     * Function to handle form submission and send email using emailjs.
     * @param {Event} e - The form submit event.
     */
    function sendEmail(e) {
        e.preventDefault();
        setEmailState(EmailState.SENDING)

        if (isTimerRunning) {
            setEmailState(EmailState.WAIT)
            return;
        }

        if (e.target.message.value === "") {
            setEmailState(EmailState.EMPTY)
            return
        } else {
            emailjs.sendForm(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, e.target)
            .then(() => {
                setIsTimerRunning(true);
                setTimerSeconds(5); // Reset timer for next submission
                setEmailState(EmailState.SENT)
            }, (error) => {
                console.log(error);
                setEmailState(EmailState.ERROR)
                console.log('An error occurred. Error text: ', error.text)
            });
            e.target.reset();
        }
      }

    return(
        <>
            <Helmet>
                <title>Let's Connect | Eddie Estevez</title>
                <meta name="description"
                content="See what I'm up to on social media! Also you can reach me via phone or email!"
                />
                <meta property="og:title" 
                    content="Let's Connect | Eddie Estevez"
                />
                <meta property="og:description" 
                    content="See what I'm up to on social media! Also you can reach me via phone or email!"
                />
            </Helmet>
        <Hero id="hereOnHomePage" title={props.title}/>
        <div className="container">
        <div className="row justify-content-center">

            
            <div className="col-md-12">
            <h3 className="mb-4 contactPageTitle">See what I'm up to on social media!</h3>
                <div className="wrapper itemBoxes">
                    <div className="row mb-5 g-5">
                        <ContactItem imgAddr={instagramIcon} imgAlt="Instagram Logo" txtTitle="Instagram" href="https://www.instagram.com/edd1e_estevez/" colClass="col-md-6 col-6" />
                        <ContactItem imgAddr={linkedInLogo} imgAlt="LinkedIn Logo" txtTitle="LinkedIn" href="https://www.linkedin.com/in/eduardo-estevez-a63193144/" colClass="col-md-6 col-6"/>
                    </div>

                    <div className="row no-gutters bg-light mb-5 rounded">
                        <div className="col-md-7">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                                <EmailModalStatusMessage emailState={emailState}/>
                                <form id="contactForm" name="contactForm" className="contactForm" noValidate onSubmit={sendEmail}>
                                    <div className="row gy-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label className="label" htmlFor="name">Name</label>
                                            <input type="text" className="form-control" name="from_name" id="from_name" placeholder="Name"/>
                                            </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label className="label" htmlFor="email">Email Address</label>
                                        <input type="email" className="form-control" name="from_email" id="from_email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <label className="label" htmlFor="subject">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <label className="label" htmlFor="#">Message</label>
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="submit" value={`${(emailState === EmailState.SENDING)?("Sending"):("Send")}`} className="btn btn-primary" disabled={emailState === EmailState.SENDING}/>
                                            <div className="submitting"></div>
                                        </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-stretch">
                            <div id="formImage" className="info-wrap w-100 p-5 img rounded"/>
                        </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </>
        )
}

/**
 * This functional component controls what modal messages shows within the contact form
 * 
 * @param {*} emailState String representing emailState
 * @returns 
 */
function EmailModalStatusMessage({emailState}) {
    switch (emailState) {
        case 'defaultEmail':
            return <><h3 className="mb-4">Let's get a conversation going!</h3></>
        case 'sentEmail':
            return <>
                <div className="alert alert-primary" role="alert">
                    <h4 className="alert-heading">Your message was sent!</h4>
                    <p>Thank you! I will get back to you soon!</p>
                </div>
            </>;
        case 'emptyEmail':
            return <>
            <div className="alert alert-warning" role="alert">
                <h4 className="alert-heading">Your message is empty!</h4>
                <p>You can't send a message if there isn't a message in the first place!</p>
            </div>
        </>;
        case 'emailWait':
            return <>
            <div className="alert alert-warning" role="alert">
                <h4 className="alert-heading">Please wait!</h4>
                <p>Looks like you recently just sent a message!</p>
                <p>Please wait at least 5 seconds before re-attempting, thank you!</p>
            </div>
        </>;
        case 'emailError':
            return <>
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Your message was not sent!</h4>
                <p>Sorry, your message wasn't able to be sent! Please try again later!</p>
            </div>
        </>;
        default:
            return <><h3 className="mb-4">Let's get a conversation going!</h3></>
    }
  }

export default HomePage;
