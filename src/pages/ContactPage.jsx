import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import emailjs from 'emailjs-com';

import Hero from "../components/Hero";
import ContactItem from "../components/ContactItem";

import instagramIcon from "../images/contactPage/insta.svg";
import linkedInLogo from "../images/contactPage/linkedIn.svg";

import CONFIG from "../config";

function HomePage(props) {

    const [sendingEmail, setSendingEmail] = useState(false);
    

    useEffect(() => {
        emailjs.init({
            publicKey: CONFIG.EMAILJS_PUBLIC_KEY
        })
    }, [])

    function sendEmail(e) {
        e.preventDefault();
        setSendingEmail(true)
        if (e.target.message.value === "") {
            alert("You can't send a message if there isn't a message in the first place!")
            setSendingEmail(false)
            return
        } else {
            emailjs.sendForm(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, e.target)
            .then((result) => {
                alert("Your message was sent! Thank you! I will get back to you soon!");
            }, (error) => {
                alert("Sorry! Your message wasn't able to be sent!");
            });
            setSendingEmail(false)
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
                                <h3 className="mb-4">Let's get a conversation going!</h3>
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
                                                <input type="submit" value={`${(sendingEmail)?("Sending"):("Send")}`} className="btn btn-primary" disabled={sendingEmail}/>
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

export default HomePage;
