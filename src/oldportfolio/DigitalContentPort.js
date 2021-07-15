import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from "react-bootstrap/Image"

import Hero from "../components/Hero"
import Content from "../components/Content";

import beepBoopPodcastPitch from "../sounds/beepBoop.mp3"
import CulversPic from "../images/culvers.jpg"

function DigitalContentPort(props) {
        return(<>
                <Hero title={props.title} className="mb-0"/>
                <Content>
                <h3 className="mt-5">Podcast Cast Pitch - Beep Boop</h3>
                <ReactAudioPlayer src={beepBoopPodcastPitch} autoPlay={false} controls/>
                <h5>This is a podcast pitch that was created for Com Arts 449. This sound file was created using Adobe Audition, and its creation involved
                    many of the advantages of using software like Audition, like it's waveform and spectograph editing. This snip it is a 2 and a half minute
                    teaser of a possible podcast I couple possibly continue in a real series called "Beep Boop" which aims to explain the complicated subjuct of 
                    computers and how they work in entertianing ways.
                </h5>

            <h3 className="mt-5">Mr. BongoSide - A Mr.BrightSide Meme</h3>
            <div class="videoResponsive">
            <iframe title="bongoCat" width="560" height="315" src="https://www.youtube-nocookie.com/embed/_-0L_whRKa0" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h5>This video is an example of what kind of content I would create for the <a href="https://www.facebook.com/groups/175526726305977"> 
            UW Madison Memes for Milk-Chugging Teens</a>. This video was created using mostly After Effects, but then linking the After Effects clips onto
            premiere to render out the final video. Other Adobe products went into the creation of this video, such as PhotoShop and Audition. This video is a take
            on a then popular meme video "Bongo Cat", which involved remixed a cat playing bongos to other kinds of music. This version of the meme was made involving 
            the Kiler's "Mr.BrightSide", a very popular song within UW Madison.</h5>

            <h3 className="mt-5">A Dream All Badgers Want to Come True</h3>
            <Image id="culversPic_ID" src={CulversPic} rounded className="mx-auto" />
            <h5>This picture is another example of what kind of content I would create for the <a href="https://www.facebook.com/groups/175526726305977"> 
            UW Madison Memes for Milk-Chugging Teens</a>. This picture involved PhotoShop, and all of its features to manipute image data fast and efficiently.
            This image brings into reality the dreams that many Badgers have had for years, a Culver's restuaurant on campus. </h5>

                </Content>
        </>
        )
} 

export default DigitalContentPort;