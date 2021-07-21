import React from 'react';

import emailjs from 'emailjs-com';

import Hero from "../components/Hero";
import ContactItem from "../components/ContactItem";


// import placeholderImg from "../images/placeholder.png";

import facebookIcon from "../images/contactPage/facebookSocialIcon.png";
import instagramIcon from "../images/contactPage/instagramIcon.png";
import twitterLogo from "../images/contactPage/twitterLogo.png";
import linkedInLogo from "../images/contactPage/linkedinLogo.png";

import phoneIcon from "../images/contactPage/phoneIcon.png";
import emailIcon from "../images/contactPage/emailIcon.png";

function HomePage(props) {



    function sendEmail(e) {
        e.preventDefault();

        if (e.target.message.value === "") {
            alert("You can't send a message if there isn't a message in the first place!")
            return
        } else {
            emailjs.sendForm('service_h9o93bm', 'template_b99mtj9', e.target, 'user_hNYdiy5GTgyDDBckrXPqh')
            .then((result) => {
                console.log(result.text);
                alert("Your message was sent! Thank you! I will get back to you soon!");
            }, (error) => {
                console.log(error.text);
                alert("Sorry! Your message wasn't able to be sent!");
            });
            
            e.target.reset();
        }
      }

    return(
        <>
        <Hero id="hereOnHomePage" title={props.title}/>
        <div class="container">
        <div class="row justify-content-center">

            
            <div class="col-md-12">
            <h3 class="mb-4 contactPageTitle">Follow me on Social Media!</h3>
                <div class="wrapper">
                    <div class="row mb-5">

                        <ContactItem imgAddr={facebookIcon} imgAlt="Facebook Logo" txtTitle="Facebook" href="https://www.facebook.com/Eduardo.Estevez1.0" colClass="col-md-3 col-6"/>
                        <ContactItem imgAddr={instagramIcon} imgAlt="Instagram Logo" txtTitle="Instagram" href="https://www.instagram.com/edd1e_estevez/"colClass="col-md-3 col-6" />
                        <ContactItem imgAddr={twitterLogo} imgAlt="Twitter Logo" txtTitle="Twitter" href="https://twitter.com/edd1e_estevezz" colClass="col-md-3 col-6"/>
                        <ContactItem imgAddr={linkedInLogo} imgAlt="LinkedIn Logo" txtTitle="LinkedIn" href="https://www.linkedin.com/in/eduardo-estevez-a63193144/" colClass="col-md-3 col-6"/>
                        

                    </div>
                    <h3 class="mb-4 contactPageTitle">Reach Me via...</h3>
                    <div class="row mb-5">

                        <ContactItem imgAddr={phoneIcon} imgAlt="Facebook Logo" txtTitle="Phone: " txt="(414)628-4171" href="tel:4146284171" colClass="col-6"/>
                        <ContactItem imgAddr={emailIcon} imgAlt="Instagram Logo" txtTitle="Email: " txt="estevez.eduardo111@gmail.com" href="mailto:estevez.eduardo111@gmail.com" colClass="col-6"/>

                    </div>
                    <div class="row no-gutters bg-light">
                        <div class="col-md-7">
                            <div class="contact-wrap w-100 p-md-5 p-4">
                                <h3 class="mb-4">Let's get a conversation going!</h3>
                                    <form id="contactForm" name="contactForm" class="contactForm" novalidate="novalidate" onSubmit={sendEmail}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                <label class="label" for="name">Name</label>
                                                <input type="text" class="form-control" name="from_name" id="from_name" placeholder="Name"/>
                                                </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                            <label class="label" for="email">Email Address</label>
                                            <input type="email" class="form-control" name="from_email" id="from_email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                            <label class="label" for="subject">Subject</label>
                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                            <label class="label" for="#">Message</label>
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="submit" value="Send" class="btn btn-primary"/>
                                                <div class="submitting"></div>
                                            </div>
                                            </div>
                                        </div>
                                    </form>
                            </div>
                        </div>
                        <div class="col-md-5 d-flex align-items-stretch">
                            <div id="formImage" class="info-wrap w-100 p-5 img"/>
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
