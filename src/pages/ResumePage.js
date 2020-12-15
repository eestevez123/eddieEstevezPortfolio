import React from 'react';

import Hero from "../components/Hero"
import Content from "../components/Content";

const  eddieResumePDF = process.env.PUBLIC_URL + '/eddieResume.pdf';

function ResumePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} />
        <Content className="mt-5">
            <div>
                <h1 className="font-weight-bolder border-bottom" style={{color: '#007bff' }}>Education</h1>   
                <h4>Universtion of Wisconsin - Madison</h4>
                <h5>College of Engineering and College of Letters &amp; Sciences</h5>
                <h5><b>Majors: </b>Computer Science and Computer Engineering </h5>
                <h5><b>Certificate: </b>Digital Studies</h5>
                <h5><b>Expected Graduation: </b>Spring 2021</h5>
            </div>
        </Content>
        <Content className="mt-5">
        <h1 className="font-weight-bolder border-bottom" style={{color: '#007bff' }}>Skills</h1>
        <h5><b>Web Design Tools: </b>React, JavaScript, Node JS, CSS, HTML5</h5>
        <h5><b>Other Programming Languages: </b>React Native, Java, Python, Matlab, C </h5>
        <h5><b>Adobe Suite: </b>PhotoShop, Premiere, After Effects, Illustrator, Audition</h5>
        <h5><b>Languages: </b>Spanish, Italian</h5>
        </Content>
        <Content className="mt-5">
            <div>
                <h1 className="font-weight-bolder border-bottom" style={{color: '#007bff' }}>Software Engineering Experience</h1>

                <div className="d-flex justify-content-between "><h4>BlackRock</h4> <h4><i>July 2020 – August 2020</i></h4></div>
                <h5><i>Summer Analyst Intern</i></h5>
                <h5>
                Used Python to create and calculate CSV files to be visualized using Tableau  
                </h5>
                <h5>
                The Tableau pages were created to aid portfolio managers to view model data and anomalies within them
                </h5>

                <div className="d-flex justify-content-between mt-4"><h4>Northwestern Mutual</h4> <h4><i>July 2017 – September 2019</i></h4></div>
                <h5><i>Software Engineering Intern</i></h5>
                <h5>
                Developed a user interface to produces internal web applications that allow decision makers to quantify financial risk of
                services and applications 
                </h5>
                <h5>
                Utilized tools including JavaScript, React JS, Node JS, CSS, Python, Java, and HTML to form the front end of
                applications 
                </h5>
                <h5>
                Worked in an Agile team using Agilecraft and Jira for task management
                </h5>

            </div>
        </Content>
        <Content className="mt-5">
            <div>
                <h1 className="font-weight-bolder border-bottom" style={{color: '#007bff' }}>Video Editing Experience</h1>

                <div className="d-flex justify-content-between "><h4>Ad Club</h4> <h4><i>September 2019- Present</i></h4></div>
                <h5><i>Ad Agency Member </i></h5>
                <h5>
                Create digital media  for marketing campaigns and apply agency style advertising techniques for businesses in the
                Madison area
                </h5>
                <h5>
                Specifically, made 10-15 seconds clips showcasing players from Forward Madison Football Club
                </h5>

                <div className="d-flex justify-content-between mt-4"><h4>The Black Sheep</h4> <h4><i>September 2018 – May 2019 </i></h4></div>
                <h5><i>Video Creator</i></h5>
                <h5>
                Made two videos a week for the UW Black Sheep professional Instagram and Twitter pages
                </h5>
                <h5>
                Created photo and video content using Premiere, After Effects, and Photoshop 
                </h5>
            </div>
        </Content>
        <Content className="mt-5">
            <div>
                <h1 className="font-weight-bolder border-bottom" style={{color: '#007bff' }}>Leadership Expereriences</h1>

                <div className="d-flex justify-content-between"><h4>NCJS and JUST</h4> <h4><i>June 2020 – Present </i></h4></div>
                <h5><i>Web Master </i></h5>
                <h5>
                Designed and currently maintain the website for the National Collegiate Journal of Science using Wordpress
                </h5>
                <h5>
                Maintain the website for the Journal of Undergraduate Science and Technology
                </h5>


                <div className="d-flex justify-content-between mt-4"><h4>Division of Information Technology</h4> <h4><i>February 2019 – May 2019 </i></h4></div>
                <h5><i>Student Technician </i></h5>
                <h5>
                Offered in-person technical support for faculty members across University of Wisconsin
                </h5>
                <h5>
                Provided services including imaging computers and network troubleshooting 
                </h5>

                <div className="d-flex justify-content-between mt-4"><h4>UW-Madison Memes for Milk-Chugging Teens </h4> <h4><i>September 2018 – Present</i></h4></div>
                <h5><i>Admin</i></h5>
                <h5>
                Manage a Facebook page with over 25,000 members by regulating content and member behavior
                </h5>
                <h5>
                Use Adobe Suite and After Effects to create content that is both comedic and creative
                </h5>

                <div className="d-flex justify-content-between mt-4"><h4>Meme Analysis Club  </h4> <h4><i>September 2018 – Present</i></h4></div>
                <h5><i>Vice President</i></h5>
                <h5>
                Maintain a creative foundation on campus that connects students from a diversity of backgrounds to analyze current
                internet trends and cultures to uncover what makes posts go viral
                </h5>
                
                <div className="d-flex justify-content-between mt-4"><h4>Alpha Chi Sigma</h4> <h4><i>February 2018 – May 2019</i></h4></div>
                <h5><i>Webmaster and Bylaws Chair</i></h5>
                <h5>
                Operate functions related to technology ranging from social media to cloud drives while gaining leadership skills
                </h5>
            </div>
        </Content>
        <Content id="downloadResume">
        <h5 >Download my resume following this <a href={eddieResumePDF} target='_blank' rel="noopener noreferrer">link</a>.</h5>
        </Content>
        
        </div>
    )
} 

export default ResumePage;