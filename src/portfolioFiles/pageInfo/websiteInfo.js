export const websiteInfo = [
    {   
        id: "personal-site",
        PageTitle: "My Personal Website",
        CoverPic: require("../../images/myWorkPage/cardPics/website/mysite.png").default,
        Background: "When it came time to create a website to showcase my work from the past couple of years, I decided to go ahead and build it myself to get even more practice with web development.",
        WhatIDid: "I decided to build out the website using React, a free and open-source JavaScript for building out the frontend of web applications. I started this React website with the create-react-app toolchain to get me started, and I used Bootstrap as my CSS framework. I took advantage of a lot of features React provides such React hooks, state management, as well as reusable components. I also took advantage of many NPM packages that helped me get a lot of functionality out of the site, including a gallery for displaying images, a image loading skeleton to be rendered out while an image is being loaded, and changing the meta data of the website according to which page it is on. ",
        WhatILearned: "This project has made me well acquainted with React features I haven’t had the chance to play around with a lot, such as React Hooks. I also got way more familiar with Bootstrap 5 classes. This project has taught me the importance of making the app functional no matter the user’s device size, performance, and connection speed. Overall, building out my own personal website was a great refresher on my web development skills.",
        CarouselImages: [{
                src: require("../../images/myWorkPage/website/websiteCode.png").default,
                label: "Javascript Array holding information for this page itself",
                desc: "Most data is loaded in from separate files, making it easier to be able to fetch this data from an API if I decide to implement one in the future."
            },
            {
                src: require("../../images/myWorkPage/website/githubPage.png").default, 
                label: "Github Repository For This Website",
                
            },
        ]
    },
    {   
        id: "la-cosecha-tortilla",
        PageTitle: "La Cosecha Tortilleria Company Website",
        CoverPic: require("../../images/myWorkPage/cardPics/website/lacosechawebsite.png").default, 
        Background: "Being within the Advertisement Club at UW-Madison, I was able to network and meet many local businesses. One of these businesses was La Cosecha Tortilleria Company, who reached out to me about my website experience and if I could help them out with theirs. This opportunity was my first venture into freelance work, so I accepted it with gratitude since they were willing to bet on someone with such an early career such as myself.",
        Background2: "La Cosecha Tortilleria Company specializes in making homemade tortillas and other corn snacks, taking full control of the entire process from receiving the corn from selected farms, to getting them into their desired edible final form. Working with the business owners was a pleasure, especially when I was able to try their products!",
        WhatIDid: "Before any kind of design work on the website could have been made, there were many meetings set up for me to learn more about the business, their branding, and what they were looking for from the website. In turn, with that knowledge, I was able to come up with design ideas as well as approach them with different hosting solutions to get their business online. Shopify was elected and I began work on the site, as well as coming on-site to take pictures of their products and operations. I was able to edit these pictures in order to make sure they did their best job representing the product. This project is still ongoing, and the website is subject to change as their business grows.",
        WhatILearned: "I learned how to implement and design a Shopify website, as well as how to have a great relationship with the business owners who you are working for. Communication was key to deliver the best website for their business.",
        CarouselImages: [{
                src: require("../../images/myWorkPage/website/cosecha1.png").default, 
                label: "La Cosecha Home Page",
                desc: "The home page is a carousel of images that serve as the Hero header for the site alongside phrases"
            },
            {
                src: require("../../images/myWorkPage/website/cosecha2.png").default, 
                label: "La Cosecha Home Page, second image"
            }
        ]
    },
    {   
        id: "JUST",
        PageTitle: "Journal of Science and Technology (JUST)",
        CoverPic: require("../../images/myWorkPage/cardPics/website/just.png").default, 
        Background: "The summer of my Junior year at UW-Madison, the president of JUST (Journal of Science and Technology) reached out to me asking if I was interested in maintaining and updating their club’s website. The club focused on getting writers and editors together to produce articles about various STEM subjects and the research being done within UW-Madison.",
        WhatIDid: "The JUST website is a WordPress site with a third-party theme builder. I was tasked with updating the website with new articles and more to keep it relevant, as well as change a few UI elements.",
        WhatILearned: "Working with JUST gave me a chance to learn more about WordPress and how it worked, as well as with the best way to update the site with content.",
        CarouselImages: [{
            src: require("../../images/myWorkPage/website/just1.png").default, 
                label: "JUST Home Page",
                desc: "I would update this part of the site periodically to keep it up to date with the journal's activities",
                
            },
            {
                src: require("../../images/myWorkPage/website/just2.png").default, 
                    label: "JUST Read Page",
                    desc: "One of my duties included uploading articles as new posts onto the Wordpress site",
                    
                },
           
        ]
    },
    {   
        id: "NCJS",
        PageTitle: "National Collegiate Journal of Science (NCJS)",
        CoverPic: require("../../images/myWorkPage/cardPics/website/ncjs.png").default, 
        Background: "Through my work at JUST, I was contacted by NCJS (National Collegiate Journal of Science), a then-new organization whose goal was to a home to academic research articles written by students across the country and facilitate conversations about STEM fields and advancements within them. Since NCJS was new at the time, I was asked to design and build the NCJS website.",
        WhatIDid: "With my knowledge gained through JUST, I was able to propose a WordPress website, first designed with Adobe XD, and then later built with a free theme that was heavily edited via the HTML and CSS that was available to me. I also made a walkthrough tutorial video on how to post new articles onto the site.",
        WhatILearned: "Working with NCJS gave me a chance to build out a WordPress website for a new organization, requiring me to strengthen my communication skills to make sure I was delivering satisfactory work in a timely manner.",
        CarouselImages: [{
                src: require("../../images/myWorkPage/website/ncjs2.png").default, 
                label: "Adobe XD Design",
                desc: "Before implementing the website design onto Wordpress, I created this mockup on Adobe XD",
                
            },
            {
                src: require("../../images/myWorkPage/website/ncjs3.png").default, 
                label: "Adobe XD Prototype",
                desc: "I hooked up components between the pages to make it perform as if it was a functional website",
                
            },
            {
                src: require("../../images/myWorkPage/website/ncjs4.png").default, 
                label: "Adobe XD Design Comments",
                desc: "A great feature of Adobe XD is being able to share my design with others in the organization and get their input on the design"
            },
            {
                src: require("../../images/myWorkPage/website/ncjs1.png").default, 
                label: "Home Page",
                desc: "This is what the actual NCJS website looks like today",
                
            },
        ]
    },
    {   
        id: "liftoff",
        PageTitle: "LiftOff",
        CoverPic: require("../../images/myWorkPage/cardPics/website/takeoff.png").default, 
        Background: "As an intern at Northwestern Mutual in 2019, I was able to participate within their intern hackathon with the theme of building for a better intern experience. We were given a full work day to accomplish this goal. ",
        WhatIDid: "I, alongside 5 others, teamed up to create a web app called Liftoff, designed to streamline the onboarding experience, giving the user a simple yet elegant interface where they could easily see important information such as what tasks are required to be completed and their deadlines. The web app also aimed to expedite and simplify access requests so that interns can get to work with their assignments faster than before, and able to easily see the status of their access request. Within the team, my role was to design the web application as well as the logo.",
        WhatILearned: "I learned how to quickly work within a team of 5 other people to deliver and present a web application. I was able to strengthen my design skills with Adobe Photoshop and Illustrator to make the required UI elements.",
        CarouselImages: [
            {
            src: require("../../images/myWorkPage/website/takeoff2.jpg").default, 
                label: "Snapshot of my team and I working",
            },
            {
            src: require("../../images/myWorkPage/website/takeoff3.jpg").default, 
                label: "Presentation Time!",
            },
            {
                src: require("../../images/myWorkPage/website/takeoff1.png").default, 
                    label: "Takeoff Logo",
            },
        ]
    },
        {   
        id: "apprisen-website-redesign",
        PageTitle: "Apprisen Website Redesign (JP Morgan Chase Hackathon)",
        CoverPic: require("../../images/myWorkPage/cardPics/website/codeForGood.jpeg").default, 
        Background: "In the Fall of 2020, I was invited to participate in the Code for Good 24 hour hackathon in Columbus, Ohio, hosted by JP Morgan Chase & Co. The hackathon’s focus was bringing together creative talent that would help local communities. For that specific hackathon, we were presented two organizations who were looking to update their websites and apps. One of the organizations presented was Apprisen, whose goal was to help people get out of debt, promote financial literacy, and overall decrease financial insecurity. My team elected to focus on Apprisen, who wanted not only a redesigned website, but a way to improve retention of clients and ensure they stay on track of their debt payments.",
        Background2: "The challenge proposed was making sure to have a robust user experience so that the user could feel motivated to keep achieving their financial goals, as well as make sure that the user has easy access to their progress and program information. The web app also needed an easy nonintimidating method of communication in case there are questions about the program or missed payments. ",
        WhatIDid: "The web app was built with HTML, CSS, and Flask, a web framework written in python. I focused on the UI/UX of the web app. I sketched out and proposed the general design and updated logo with an iPad, and then used the Adobe Creative suite of apps to make the required UI elements.",
        WhatILearned: "I learned how to battle sleep deprivation as well as control my caffeine intake to work on the web app through the 24 hours given to me and my team. I learned how Flask functioned, and how to best use it for our web app idea. I also learned to keep in mind how UI elements and placement, as well as the copywriting of a website, can affect the emotions and motivation of the user. ",
        CarouselImages: [{
                src: require("../../images/myWorkPage/website/apprisen1.png").default, 
                label: "Design Scribbles",
                desc: "The home page would welcome the user as well as provide the date and their login streak to encourage frequent logins to check on their financial goals. The progress bar on the home page would allow the user to visually see where they are in their dept payment journey."
            },
        ]
    },
    {   
        id: "the-longevity-game",
        PageTitle: "The Longevity Game",
        CoverPic: require("../../images/myWorkPage/cardPics/website/longgame.png").default, 
        Background: "In the summer of 2017, I had the fortunate opportunity to participate in a 4-week program within Northwestern Mutual’s STEM Outreach program, whose focus is to help high schoolers in the area get a crash course on web development. In order to help us learn the basics such as HTML, CSS, and JavaScript, the 12 students in the program were split into 3 groups, each tasked with the rewriting and updating of an flash game that existed on the Northwestern Mutual page called The Longevity Game.",
        Background2: "The flash game involved the user inputting their information such as sex and age, and then they were asked a series of questions about their life habits and health. At the end of the game, the user would be displayed their probable life expectancy. Although slightly morbid, the goal was to promote a conversation about the need of life insurance as well as improving upon potentially life saving habits. At the end of the 4-week program, I was offered an internship for the rest of the summer alongside 3 other students to continue work on the updated game.",
        WhatIDid: "I focused on the customization of the character that the user would then be able to design at the beginning of the game. I also worked on other UI/UX elements of the game, such as how the badges would be displayed at the user won them after every question being answered.",
        WhatILearned: "Aside from basic web development skills within HTML, CSS, and JavaScript, I learned how customizable SVG graphics were, as well as new CSS properties I did not play around with before, such as background blur. ",
        CarouselImages: [{
                src: require("../../images/myWorkPage/website/long1.png").default, 
                label: "Start Screen",
                desc: "This screen welcomed you when you would start the game"
            },
            {
                src: require("../../images/myWorkPage/website/long2.png").default, 
                label: "Create Your Character Screen",
                desc: "Once the user selects a character, the clouds would be animated to leave to reveal the character"
            },
            {
                src: require("../../images/myWorkPage/website/long3.png").default, 
                label: "Create Your Character Screen",
                desc: "All images were SVG files, which meant changing the color of the items was as easy as targeting a specific CSS class"
            },
            {
                src: require("../../images/myWorkPage/website/long4.png").default, 
                label: "Backpack Explanation",
                desc: "Right before the game started, you were told that you could click on the backpack to see how much progress you have made and what kind of badges you have received"
            },
            {
                src: require("../../images/myWorkPage/website/long5.png").default, 
                label: "Survey Answer Choice",
                desc: "When you chose an answer, your predicted lifespan would be calculated and change in real time according to your answers on all other questions"
            },
            {
                src: require("../../images/myWorkPage/website/long6.png").default, 
                label: "Thank You For Playing Screen",
                desc: "Your final lifespan calculated would be presented, alongside your character and backpack with the badges you have earned."
            },
            {
                src: require("../../images/myWorkPage/website/long7.png").default, 
                label: "Additional Information",
                desc: "A goal for the longevity game is to promote a conversation about life insurance and other financial products, so a way to connect to a representative at the end of the game was implemented."
            },
        ]
    },
    {   
        id: "risk-assessment-and-aggregate-application",
        PageTitle: "Risk Assessment and Aggregate Application",
        CoverPic: require("../../images/myWorkPage/cardPics/website/nm.jpg").default, 
        Background: "Within my second summer as a software engineering intern for Northwestern Mutual, I was placed within Enterprise Architecture, and tasked to work with another intern in rethinking how the company did risk assessments. The goal of the summer was to be able to take risk assessment documents of all forms, parse through it to get the important information, and then make connections between each application and service. Therefore, it would allow the user to be able to see how many things this application depended on and how many other apps depended on it, to properly assess the risk of the app failing.",
        WhatIDid: "This project required me to do research on risk and how it is defined within a company such as Northwestern Mutual. I also asked a lot of questions on what a decision maker such as a manager would like to see out of a risk assessment application. I focused on the front-end development of the application while my coworker focused on the backend. The app was built with a React Front-End while using MongoDB as the database. Python scripts were used to data scrape risk assessments that were available to use in the form of word documents, excel sheets, etc.",
        WhatILearned: "I was not exposed to React before this summer, so it was imperative I quickly learned it and how it functioned. I learned the best way for myself to learn a new technology, which ended up being a mix of following YouTube tutorials, as well as allowing myself to explore “What If I could…” scenarios whenever they would pop up in my head. I also learned about what risk was in the context within a company like Northwestern Mutual and how such a thing could be quantized and aggregated.",
        CarouselImages: []
    },
    {   
        id: "college-financial-literacy-web-app",
        PageTitle: "College Financial Literacy Web App",
        CoverPic: require("../../images/myWorkPage/cardPics/website/nm2.jpg").default, 
        Background: "During my winter break of my freshman year (2018), I returned for 3 weeks at Northwestern Mutual within the same department, Enterprise Architecture, to work with another intern on a financial literacy web app prototype.",
        WhatIDid: "I and another intern both focused on the front-end development of the web app, which for that time was using vanilla HTML, CSS, and JavaScript. I also thought about the best way to design the web app to best address the questions and lessons the target user, a high school student, would have, which was determined to be how to finance big purchases such as a car, college tuition, and living expenses. ",
        WhatILearned: "I learned to create and design a web app with a target user in mind. I was able to strengthen my communication skills in order to fully understand the goal of the project as well as how to achieve it.",
        CarouselImages: []
    },
    {   
        id: "custom-implicit-bias-test",
        PageTitle: "Custom Implicit Bias Test",
        CoverPic: require("../../images/myWorkPage/cardPics/website/lis500.png").default, 
        Background: "During my Fall Semester of my Junior year (2019), I took a class called LIS 500: Code and Power which had me analyze and critique of the portrayal of race, gender, religions, and more in computing. We analyzed training data used within machine learning models, google search results, and more. Within the class, I had the opportunity to practice my web development skills through multiple assignments, the final one being a survey created by three other students and I that was modeled after the Harvard Implicit Bias Test. This survey had our own original questions, and we would keep track of the responses once the user finished the survey. The goal of the survey was like the goal of the Harvard implicit bias test, which was to see how biased the survey taker was to things like race and gender, regardless of being conscious of it or not.",
        WhatIDid: "As a team we first create thoughtful questions that would get the user to answer honestly but also reveal any implicit bias. I helped the team develop the website with these questions  and track the survey results using HTML, CSS, and PHP. I also made 2 videos, one that would be in the beginning of the website, as well as one at the end of the survey to explain the results of it to the user. ",
        WhatILearned: "Regarding technical skills, I learned basic functional PHP, and got more practice with HTML and CSS. The biggest take from the class came from the readings and conversation regarding representation and issues that plague the tech industry, such as artificial intelligence branding people of color as criminals, racist google search results, meritocracy, as well as the demographics of major tech companies not being diverse. ",
        CarouselImages: []
    },
    {   
        id: "freesound-website-redesign",
        PageTitle: "Freesound Website Redesign",
        CoverPic: require("../../images/myWorkPage/cardPics/website/freesound.png").default,   
        Background: "Within the fall semester of my senior year (2020), I took a class called LSC 532: Web Design for the Sciences. This class focused on effective communication of science information in an honest but easily digestible way. Within an assignment, I was to take a website whose design I thought I could improve on, which happened to be freesounds.org. I was familiar with this website as this was the site I always came to find specific sound effects for good sound design in videos and more. I thought the site could’ve used a modern redesign that would push people to not only consume and download like I was doing, but to also share sounds and interact with other users.",
        WhatIDid: "I started by thinking about the goals of a website such as FreeSound, and positives that website would probably like to see. I thought that more site traffic would probably be a good thing in order to promote their community and increase likelihood for user financial support via donations. Higher community engagement would then ultimately lead to more site content that the users come to the website for in the first place. I transfered those ideas onto an Adobe XD design that places the description of the page on center stage in order to be more welcoming to new users. The home page also has the number users that are online, how many sounds have been uploaded, as well as see regularly updated content to imply that the website and the community is lively. This would hopefully entice the user to join the community to not “feel left out.” With the Adobe XD mockup, I created a working prototype using React. ",
        WhatILearned: "This class taught me how to not only make simple and elegant websites, but also how to nudge users to do something you want them to do, such as create an account, or to be a part of the community and promote social interactions such as sharing and commenting.",
        CarouselImages: [{
                src: require("../../images/myWorkPage/website/freesound1.png").default, 
                label: "Adobe XD Design",
                desc: "This is the redesigned UI I created with Adobe XD with only 2 pages, the Home Page and Sound Page created for the MVP (minimum viable product)"
            },
            {
                src: require("../../images/myWorkPage/website/freesound2.png").default, 
                label: "Original Website Design",
                desc: "This is the design of the website (https://freesound.org/) at the time of me creating the redesign"
            }
        ]
    },
    {   
        id: "university-of-wisconsin-arboretum-website-redesign",
        PageTitle: "University of Wisconsin-Arboretum Website Redesign",
        CoverPic: require("../../images/myWorkPage/cardPics/website/arb.png").default, 
        Background: "Within the fall semester of my senior year (2020), I took a class called LSC 532: Web Design for the Sciences. This class focused on effective communication of science information in an honest but easily digestible way. Within the final project, I worked alongside 2 other students to redesign https://arboretum.wisc.edu/ to get website traffic as well as provide the information most users look for in an easier way.",
        WhatIDid: "One of the original designers of the website came to one of our class sessions and I had the opportunity to ask questions about the organization’s current goals and general analytics about which parts of the site have more traffic. With these notes and archetypes of three common users, we were able to map out a redesigned website with a modern look that provides most sought out answers in the home page as well as redesigning parts of the site in a question-answer style, such as what can be found within the Visit tab of the website.",
        WhatILearned: "I learned it’s always important to ask as many questions as you can when you are with a client/project owner. This way, I can start tackling the biggest problems the best way possible, and better dedicate time and energy to the best minimal viable product. It was also a good opportunity to place myself in the shoes of different prospective users, such as someone who’s never heard of or even knows what an Arboretum is, or a parent that is only interested in family activities they could do with their children.",
        CarouselImages: [{
                src: require("../../images/myWorkPage/cardPics/website/arb.png").default, 
                label: "Redesigned Home Page",
                desc: "This new website now stretches to the entire width of the screen, as well as displays info about the Arboretum such as the Our Mission and Our Vision statements. "
            },
            {
                src: require("../../images/myWorkPage/website/arb1.png").default, 
                label: "Original Home Page",
                desc: "The original page had its content width style as boxed, as well as was not welcoming to new visitors not aware of what the Arboretum is."
            },
            {
                src: require("../../images/myWorkPage/website/arb2.png").default, 
                label: "Redesigned Visit Page",
                desc: "The content within the Visit page was restructured into sections in a Question-Answer style so that a user looking for specific information could find it quickly."
            },
            {
                src: require("../../images/myWorkPage/website/arb3.png").default, 
                label: "Original Visit Page",
                desc: "The original visit page had it's content under different sections but had its information set into paragraphs without clear distinction of what those paragraphs contained"
            },
            {
                src: require("../../images/myWorkPage/website/arb4.png").default, 
                label: "Redesigned Learn Page",
                desc: "The new Learn page also had its content set in a Question-Answer style, as well as had accordion components to not bombard the user with too much unnecessary text that they weren't looking for"
            },
            {
                src: require("../../images/myWorkPage/website/arb5.png").default, 
                label: "Original Learn Page",
                desc: "Just like in the original Visit page, the information is placed within paragraphs and other sections, but the content itself is not labeled within each section"
            },
            {
                src: require("../../images/myWorkPage/website/harold.png").default, 
                label: "Harold Persona Info",
                desc: "When redesigning the page, it was important to create personas to keep in mind when creating designs and concept ideas"
            },
            {
                src: require("../../images/myWorkPage/website/sarah.png").default, 
                label: "Harold Persona Info",
                desc: "2 persona's were created for this project, Harold being the first and Sarah being the second. "
            }
        ]
    }
]