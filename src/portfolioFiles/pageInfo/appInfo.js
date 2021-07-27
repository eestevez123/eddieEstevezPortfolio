export const appInfo = [
    {   
        id: "blackrock-tableau-dashboard",
        PageTitle: "BlackRock Tableau Dashboard",
        CoverPic: require("../../images/myWorkPage/cardPics/app/blackRock.png").default, 
        Background: "In the summer of 2020, I interned with BlackRock, Inc. BlackRock is the world’s largest asset manager, and as an Application Engineering Intern within the Aladdin Product Group, specifically the Multi Asset Strategies team.",
        WhatIDid: "I worked with 2 other interns within the team to collect datapoints from many different models to track how assets change and interact with each other every single day. I started with importing and scraping CSV files, cleaning the data to make sure I can run further calculations, such as the means and averages between asset classes and more. For this, I used a python script with the help of packages such as numpy, pytorch, and pandas. This python script would run every day with the help of Jenkins that would ultimately produce a final CSV file that I pointed to with a Tableau dashboard I designed. This Tableau dashboard was an interactive and visual way for portfolio managers to  see key features that could explain a model’s performance and any anomalies with it.",
        WhatILearned: "As someone coming in with a basic understanding of finance, working within BlackRock with the tasks I was given challenged me to learn a lot what BlackRock as a whole did as an organization as well as what exactly was the data I was handling. ",
        CarouselImages: [
        ]
    },
    {   
        id: "workout-application",
        PageTitle: "Workout Application",
        CoverPic: require("../../images/myWorkPage/cardPics/app/workout.png").default, 
        Background: "Within the fall semester of my senior year (Fall 2020), I took a class called CS 506: Software Engineering. This class focused on how to efficiently engineer software within a team, including proper version control and documentation. Throughout the semester, I worked with a team of 5 other students to work on an application, which for us was a Workout app written in React Native so that it would be cross platform between Android and iOS. ",
        WhatIDid: "For this project, I helped with the visuals and designing of the application with Figma, the connecting of the backend API to get past workouts with MongoDB and Heroku, and getting automated UI testing with Android Studio and Espresso. ",
        WhatILearned: "The project had me  exposed to new technologies that I had to quickly learn to be an asset to the team. I made sure to ask questions to confirm my understanding of the technologies in hand. This project also gave me more experience with working within 2-week sprints and tracking my tasks that were assigned to me by the scrum master. ",
        CarouselImages: [{
                src: require("../../images/myWorkPage/app/workout1.png").default, 
                label: "Figma Desing for the Workout App",
                desc: "My team and I chose to design the app via Figma in order to easily collaborate"
            },
            {
                src: require("../../images/myWorkPage/app/workout2.png").default, 
                label: "Prototype Design",
                desc: "Before Figma, we used the tools provided by Google slides to contruct a basic skelleton to how we wanted our app to be structured"
            },
            {
                src: require("../../images/myWorkPage/app/workout3.png").default, 
                label: "Front End Testing",
                desc: "My team and I were able to run Front End tests using Jest"
            },{
                src: require("../../images/myWorkPage/app/workout4.png").default, 
                label: "Back End Testing",
                desc: "My team and I were able to run Back End tests as well with helper function testing and endpoint testing"
            }
        ]
    },
    {   
        id: "operating-system-tinkering",
        PageTitle: "Operating System Tinkering",
        CoverPic: require("../../images/myWorkPage/cardPics/app/xv6.jpg").default, 
        Background: "Two of my classes focused on the inner working of an operating systems, CS 537: Intro to Operating Systems and ECE 354: Machine Organization and Programming. Within ECE 354, I was exposed to x86 Assembly and registers, learning how compilers translated C code into more machine-readable instructions. CS 537 taught me how an OS virtualizations and abstractions it provides for processes to efficiently run multiple instances of other processes, threads, and even users. ",
        WhatIDid: "Within the two classes, I dived into multiple projects that I found to be very useful. Within ECE 354, the first 2 projects were C warm-up projects involving a basic text decoder and a hill-climbing algorithm in C. The third project involved emulating a heap memory allocator of a size of 4 KB. This project involved a lot of pointer arithmetic as well as keeping track of the beginnings and ends of allocation memory chunks. The fourth project involved emulating cache with a replacement policy of Least Recently Used. ",
        WhatIDid_moreParagraphs: [
            "In CS 537, I did 7 projects in total . ",
            "The first project tested my knowledge of shell’s, especially the utilities found within UNIX-like Operating Systems by recreating via C the “look” and “rev” commands. ",
            "Project 2 had me look at XV6, a simple UNIX-like operating system, and change a couple of functions to see how it would affect the performance of the OS. ",
            "The 3rd project involved me creating my own shell that would be able to store and remove alias commands. ",
            "The 4th, 5th , and 6th projects had me change the scheduling policies for concurrent processes in XV6, including encrypting pages that are not being used to deter from data theft attacks, both manually and automatically by the kernel. ",
            "In the 7th project, I implemented a functional multi-threated web server with a shared memory segment for statistics logging and other uses.  ",
        ],
        WhatILearned: "Overall, these classes gave me a better understanding of C and assembly for a couple Instruction Sets, as well as concepts within C such as pointers and references. I better understood stack and heap memory allocation and management, as well as how compilers might translate what I’m writing to give to the OS. I also understood how many policies could be implemented in order to have efficient and secure processes and memory management within an Operating System.",
        CarouselImages: [
        ]
    },
    {   
        id: "ti-tiva-launchpad-games",
        PageTitle: "TI Tiva Launchpad Games",
        CoverPic: require("../../images/myWorkPage/cardPics/app/tiva.png").default, 
        Background: "Within two classes I taken ECE 210: Intro to Electrical Engineering and ECE 353: Intro to Microprocessor Systems, I played around with a TI Tiva Launchpad on a custom development board in which I produced a game in in each of those classes. ",
        WhatIDid: "The games were written in C within Keil uVision. I needed to get familiar with many packages and troubleshoot with drivers for the games to interact appropriately with the hardware, both screen and input buttons.",
        WhatILearned: "I got a better appreciation for hardware-software interaction. I also learned how to deal with hardware limitations to get the best experience for the user. ",
        CarouselImages: [
        ]
    },
    {   
        id: "artificial-intelligence-projects",
        PageTitle: "Artificial Intelligence Projects",
        CoverPic: require("../../images/myWorkPage/cardPics/app/AI.png").default, 
        Background: "During the summer right before my senior year (Summer 2020), I took CS 540: Introduction to Artificial Intelligence, which exposed me to many aspects to the field, from classic neural networks to more complicated subjects such as pathfinding algorithms as well as convolutional neural networks.  ",
        WhatIDid: "I used python to implement 5 different projects throughout the semester. ",
        WhatIDid_moreParagraphs: [ 
            "I used python to implement 5 different projects throughout the semester. ",
            "The first project involved building a logistic regression model and neural network to classify handwritten digits from the MNIST dataset. For this instance, I was focusing on classifying 1s and 0s from the dataset, which my model got 99.9605% of the time after 4 epochs in training. ",
            "In the second project, I looked at the Wisconsin Breast Cancer dataset to look at integer patient data and output a diagnosis of whether the patient has breast cancer or not. This project involved creating a decision tree with the training data and then pruning the tree to keep it as short but accurate as possible. ",
            "The third project involved me taking the script for the movie Coco and building and simulating a simple Markov chain model to create new sentences out of it. This output fortunately resembled English words even though it was mostly random letters, with real English and Spanish words peppered in the sample output.",
            "The 4th project involved me clustering countries together via a COVID-19 dataset provided by Johns Hopkins University. I specifically did hierarchical clustering with single and complete linkages with k=5, as well as k-means clustering with k=5 again calculating distances with Euclidean distance. ",
            "The 5th project involved creating a random ASCII maze and use multiple uninformed and informed search algorithms on that maze. Algorithms that I used included BFS (Breadth-first search), DFS (Depth-first search), and A start with both Manhattan and Euclidean distance to the goal. ",
            "The last project was one where we the students got the choose our own dataset and machine learning algorithm. For this project, I decided to implement 2-Layer Convolutional Neural Network that is capable to tell the difference between different articles of clothing as provided by the Fashion-MNIST data set. If you are interested in learning more about this CNN, please read my report I have provided below.",
        ],
        WhatILearned: "This class opened got me more experience with python and the many packages available to implement cool AI related projects. I learned how exactly decisions were calculated in popular machine learning algorithms as well, and the best ways to find efficient solutions and robust models. ",
        CarouselImages: [
            {
                src: require("../../images/myWorkPage/app/ai1.png").default, 
                label: "Logistic regression weights plotted out",
                desc: "As you can see, the map has been trained to look for digits that resemble the number 0"
            },
            {
                src: require("../../images/myWorkPage/app/ai2.png").default, 
                label: "Example of a misclassified digit",
                desc: "The trained model misclassified this digit as a 1, even though it is a 0 according to the testing set"
            },
            {
                src: require("../../images/myWorkPage/app/ai3.png").default, 
                label: "Breast Cancer Dataset Features and Decision Trees",
                desc: "Here you can see that the original Decision Tree with the depth of 12 has been prunned to have the depth of 8"
            },
            {
                src: require("../../images/myWorkPage/app/ai4.png").default, 
                label: "Markov Chain output trained on the Coco script",
                desc: "The output does resemble words with the letter-space rhythm, and some words can be made out, such as Miguel, the main character in the movie Coco"
            },

        ]
    },
    {   
        id: "java-programs-and-applications",
        PageTitle: "Java Programs and Applications",
        CoverPic: require("../../images/myWorkPage/cardPics/app/eclipse.png").default,   
        Background: "Within my college career, I took the Introduction to programming sequence within the computer science program, which involved me working with Java and learning more about the Java language, concepts that are a staple in most programming languages, data structures, software engineering, and more.",
        WhatIDid: "Within CS 300: Programming II, I learned the importance of test-driven development and to continuously test out new features whenever I added utilities onto a program. Multiple projects involved using Processing libraries to add a graphics windows, an example being one program where I created a simulation of a water fountain by creating a stream of 800 blue circles who’s starting velocity and direction was random and then the y-direction velocity would decelerate to simulate gravity. Each project taught me a new concept such as Java classes, subclasses, objects, exceptions, iterators, interfaces, generic types, and more. I also had to implement some basic data structures such as linked lists and binary trees to be used in different applications such as a priority queue for a simulated help desk. ",
        WhatIDid_moreParagraphs: [ 
            "Within CS 400: Programming III, the same concepts from 300 were applied and added upon. I implemented even more data structures such as self-balancing binary trees such as Red-Black trees and AVL trees, and directed and unweighted graphs, B+ trees.  "
        ],
        WhatILearned: "Overall, the programs and projects I did within CS 300 and CS 400 taught me how to think and approach problems with software. The tools and methods I learned in these classes continuously help me today as I these skills transfer to other programming languages. ",
        CarouselImages: [
            {
                src: require("../../images/myWorkPage/app/java1.png").default, 
                label: "TODO",
                desc: "TODO"
            },
            {
                src: require("../../images/myWorkPage/app/java2.png").default, 
                label: "TODO",
                desc: "TODO"
            },
            {
                src: require("../../images/myWorkPage/app/java3.png").default, 
                label: "TODO",
                desc: "TODO"
            },
            {
                src: require("../../images/myWorkPage/app/java4.png").default, 
                label: "TODO",
                desc: "TODO"
            },
        ]
    },
    {   
        id: "blueooth-audio-receiver-and-equalizer",
        PageTitle: "Blueooth Audio Receiver and Equalizer",
        CoverPic: require("../../images/myWorkPage/cardPics/app/551.png").default, 
        Background: "As part of the computer engineering curriculum, I took ECE 551: Digital System Design & Synthesis. Within in, I learned about the hardware description language Verilog to build common electrical components such as flip flops, adders, multiplexers and more. For the final project, we were tasked with building out an equalizer for a Bluetooth audio device.",
        WhatIDid: "I was in a team of 3 other students. I designed some parts of the project as well as getting the code coverage for the final report.",
        WhatILearned: "This class was my first-time using Verilog and it combined what I knew form software engineering into hardware design. It helped me understand how audio amplifiers and equalizers functioned at a high level as well.",
        CarouselImages: [{
                src: require("../../images/myWorkPage/app/551_1.png").default, 
                label: "LABEL",
                desc: "DESC"
            },
            {
                src: require("../../images/myWorkPage/cardPics/app/551.png").default, 
                label: "LABEL",
                desc: "DESC"
                },
        ]
    },
    {   
        id: "mips-16-bit-5-stage-pipelined-microprocessor",
        PageTitle: "MIPS 16-bit 5-stage Pipelined Microprocessor",
        CoverPic: require("../../images/myWorkPage/cardPics/app/552.png").default, 
        Background: "For the semester project of ECE 552: Intro to Computer Architecture, my partner and I had to design and test our very ow MIPS 16-bit 5-stage pipelined microprocessor with forwarding enabled and cache. ",
        WhatIDid: "My partner and I built out the processor with Verilog in three different stages, first from an unpipelined version, into a 5-stage processor with data forwarding, and then finally a 5-stage processor with data forwarding and a 2-way cache. We tested the processor with a compiler that was provided that would run assembly code and see the results within the registers. ",
        WhatILearned: "I learned how exactly a microprocessor worked, building one out and emulating it via software, and using basic software on it with our very own instruction set. ",
        CarouselImages: [{
                src: require("../../images/myWorkPage/app/552_1.png").default,
                label: "LABEL",
                desc: "DESC"
            },
            {
                src:  require("../../images/myWorkPage/cardPics/app/552.png").default, 
                label: "LABEL 1",
                desc: "DESC"
            },
            {
                src:  require("../../images/myWorkPage/app/552_2.png").default, 
                label: "LABEL 1",
                desc: "DESC"
            },
            {
                src:  require("../../images/myWorkPage/app/552_3.png").default, 
                label: "LABEL 1",
                desc: "DESC"
            },
        ]
    },
    {   
        id: "convulutionary-neural-network-hardware-accelerator",
        PageTitle: "Convulutionary Neural Network Hardware Accelerator",
        CoverPic: require("../../images/myWorkPage/cardPics/app/cnn.png").default, 
        Background: "Within my last semester at UW – Madison for my computer engineering capstone, I took ECE 554: Digital Engineering Lab in which I learned furthermore the applications of building custom hardware with HDLs such as system Verilog and more tools. For my semester project, I worked within a team of 5 other students to build out a Convolutional Neural Network accelerator, designed to be able to do the required matrix math correctly with pretrained values. ",
        WhatIDid: "I focused on the software side of the project, training the model based on the Fashion-MNIST training data, quantizing the float integers that I would get into 8-bit signed integers that would then be loaded into the FPGA, which was on Intel cloud due to the semester being taught purely online due to the COVID-19 pandemic. ",
        WhatILearned: "Within this project, communication and time management was incredibly important due to the workload and the complexity of the project. ",
        CarouselImages: [
            {
                src:  require("../../images/myWorkPage/app/554_1.png").default, 
                label: "LABEL 1",
                desc: "DESC"
            },
            {
                src:  require("../../images/myWorkPage/app/554_2.png").default, 
                label: "LABEL 1",
                desc: "DESC"
            },
        ]
    }
]