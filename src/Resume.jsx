import React from 'react'

export default function Resume() {
    window.addEventListener('scroll', function () {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var bodyHeight = document.body.offsetHeight;
        var progress = (scrollPosition / (bodyHeight - windowHeight)) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
    });
    return (
        <div className='container resumeheader' >
            <div id="progress-bar" className="progress-bar"></div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div className='font-22 font-bold'> FAHISA K</div>
                <div><img alt='' className='resumeicons' src="/images/phone-call.png"></img> +3530894370914
                    <img alt='' className='resumeicons ml-10 mr-7' src="/images/location.png"></img>
                    91 Kilbelin Abbey, Newbridge, Kildare, Ireland</div>
                <div>  <img alt='' className='resumeicons' src="/images/email1.png"></img>
                    <a className='text-decoration-none ml-10' href="mailto:fahisak786@gmail.com"> fahisak786@gmail.com</a>

                    <img alt='' className='resumeicons ml-10' src="/images/linkedin.png"></img>
                    <a className='text-decoration-none ml-10' href="https://www.linkedin.com/in/fahisa-kollath">https://www.linkedin.com/in/fahisa-kollath </a>

                </div>
                <div>  <img alt='' className='resumeicons' src="/images/github.png"></img>
                    <a className='text-decoration-none ml-10' href="https://github.com/fahisak">https://github.com/fahisak</a>
                </div>
            </div>
            <div className='mt-40'>
                <div className='font-bold'>OBJECTIVE</div>
                <hr></hr><p>
                    Experienced full-stack developer with strong background in designing, developing, and deploying web and
                    mobile applications. Adept at utilizing a diverse set of technologies to create robust and user-friendly solutions.
                    Seeking to leverage my expertise in both front-end and back-end development to contribute to a dynamic team
                    and deliver innovative software solutions.
                </p>

            </div>
            <div>
                <div className='font-bold'>EDUCATION</div>
                <hr></hr>
                    <div className='font-bold'> M.sc Computer Science,</div>
                    <div className='d-flex justify-content-between align-items-center'>

                        <div> Calicut University Campus, Kerala, India</div>
                        <div className='font-bold'>2020</div>
                    </div>

                    <div className='font-bold'>Relevant Coursework:</div>
                    <div>Python, Javascript, Machine Learning, Data Structure and Algorithm, Operating System,
                        DBMS etc.</div>
                

                <div className='font-bold'> Bachelor of Computer Applications,</div>

                <div className='d-flex justify-content-between align-items-center col-md-12'>

                    <div className='col-md-10 col-10'> Malabar College of Advanced Studies,Kerala, India</div>
                    <div className='col-md-1 font-bold'>2020</div>
                </div>
                {/* <div className='font-bold col-md-12'>Relevant Coursework:</div> */}
                {/* <div className='col-md-12'>Java Programming, Data Structure and Algorithm, Operating System, DBMS etc
                </div> */}



            </div>
            <div><div className='font-bold'>SKILLS </div>
                <hr></hr>
                Technical Skills
                React, Nodejs, MongoDB, PostgreSQL, Express.js, C, C++, java, Python, AWS, HTML5,
                CSS, Javascript, SQL, Linux, UX, Agile, GitHub, Git lab, Redux,
                Program testing software (cypress), etc.
                Soft Skills
                Communication, Customer Service, Teamwork/Collaboration, Leadership.
            </div>

            <div>

                EXPERIENCE
                <hr></hr>
                Software Engineer March 2022 - November 2023
                Hidile software LLP Calicut, Kerala, India
                • Designed and developed front-end and back-end applications utilizing Reactjs, Nodejs, and ExpressJs.
                • Involved in project plan meetings with clients, business analysts, and team members to analyze business
                requirements and translated business requirements into the working model using Agile methodology.
                • Worked with Redux to manage application state and simplify data management
                • Responsible for implementing UI mockups, integrating third-party React libraries, and handling/creating
                Redux store data.
                MERNStack Deveoper - Intern October 2021 - February 2022
                Futura Labs Calicut, Kerala, India
                • Designed and developed front-end and back-end applications utilizing Reactjs, Nodejs, ExpressJs,
                MongoDB etc.
                <div>
                    PROJECTS
                    <hr></hr>
                    Flexi Recruits (PERN) :
                    Technologies Used : Nextjs, Nodejs, PostgreSQL, AWS, React Native, Gitlab
                    • Flexi recruits is a recruitment agency in London, and has been training and sourcing talent for over 12
                    year.
                    • I have developed web applications using Next JS.
                    • I was responsible for designing the ui/ux and developing api integration for the mobile and web application.
                    • Worked on Front-end, Back-end, Admin and employer portals
                    • url: https://flexirecs.com
                    Flexirecs :
                    Technologies Used : Reactjs, Nodejs, PostgreSQL, AWS, Gitlab
                    • This is an recruitment application created for Flexirecs. Using this app they can monitor their recruitment
                    details, Agency details, User details and much more.
                    • A platform connecting healthcare workers to care homes for temporary shifts.
                    • I have developed web applications using ReactJS.
                    • I was responsible for designing the api integration for the mobile application. Delivered Mobile and Web
                    Applications.
                    • Worked on Front-end, Back-end, Admin portal
                </div>
            </div>
        </div>
    )
}


