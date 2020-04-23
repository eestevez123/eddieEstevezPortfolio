import React from 'react';

import Hero from "../components/Hero"
import Content from "../components/Content";


function PortfolioPage(props) {
        return(<>
                <Hero title={props.title} className="mb-0"/>
                <Content id="videos">

                <h3 className="mt-5">Eddie McDanger Climbs Up Bascom Hill</h3>
                <iframe title="mcDanger" width="560" height="315" src="https://www.youtube-nocookie.com/embed/rvvAN6obsn0" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h5>This video was made for Com Arts 155. For this video, I worked with 2 other students to create a short 4 minute film using
                    the tools and skills that were taught in lecture and lab. With a Panasonic GH5, a boom mic, tripod, and even more equipment, my partners
                    and I came up with this cinematic masterpiece where you are able to see the fictional character Eddie McDanger climb up Bascom Hill </h5>

                <h3 className="mt-5">A Required Meal Plan: Why the meal plan in UW-Madison should be optional</h3>
                <iframe title="videoOne" width="560" height="315" src="https://www.youtube-nocookie.com/embed/_OekNTxnOBQ" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h5>This video was made for Com Arts 200. The assignment was to make a video to an institutional audience talking about a problem
                    that we the students saw on campus and would like to be addressed. In the video, I talked about why I believe that the meal plan forced upon
                     incoming students living within the residence halls should be optional.  </h5>

                <h3 className="mt-5">Video 2.0: A YouTube Video about Video 1.0</h3>
                <iframe title="videoTwo" width="560" height="315" src="https://www.youtube-nocookie.com/embed/PMKgHs1WWsI" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h5>This video was submitted for Com Arts 200. This is re-edit of the first video I submitted, but the twist this time is to take that
                    video and add and remix it for a venacular, more informal audience. I talk about the same subject, the meal plan, but I do so in a style
                    of a stereotypical YouTuber. </h5>

                <h3 className="mt-5">A Midlife Crisis, but in College</h3>
                <iframe title="Midlife" width="560" height="315" src="https://www.youtube-nocookie.com/embed/77Tll5PkhJk" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h5>This video was submitted to the 2020 UW Madison Digital Salon competition. I wanted to make a more serious video for sometime, to contrast
                    the more positive videos I was used to making. Reflecting on parts of my life where I thought the biggeer picture, I made this video with
                    shots I recorded with my phone, camcorder, and a narration of my stream of consciousness. </h5>
                </Content>
        </>
        )
} 

export default PortfolioPage;