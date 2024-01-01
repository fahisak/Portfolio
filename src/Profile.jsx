
import React, { useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Profile() {
    const [showTabs, setShowTabs] = useState(false);

    // gsap.registerPlugin(ScrollTrigger);


   


    
    window.addEventListener('scroll', function () {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var bodyHeight = document.body.offsetHeight;
        var progress = (scrollPosition / (bodyHeight - windowHeight)) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
    });

   
   
       
    return (
        <div className='App-header container-fluid' >



            <div className='row col-12 col-md-12 top-section justify-content-between bg-black'>
                {/* <div className=' txt-left'>icon</div> */}
                <div className='navbaritems d-flex justify-content-end flex-wrap navbaritems'>
                    <a href="#home-section" className='navbaritems navbar-tabs'>Home</a>
                    <a href="#about-me" className='navbaritems navbar-tabs'>About</a>
                    <a href="#skill-section" className='navbaritems navbar-tabs'>Skills</a>
                    <a href="#experience-section" className=' navbaritems navbar-tabs'>Experience</a>
                    <a href="#project-section" className='navbaritems navbar-tabs'>Projects</a>
                    <a href="#education-section" className=' navbaritems navbar-tabs'>Education</a>
                </div>
                <div className=' txt-right'>
                    <img alt='' className='home-menu-icon' src="/images/menu.png" onClick={() => setShowTabs(!showTabs)}></img>

                </div>
                {showTabs && (
                    // <div className=''>
                    <ul className='ul'>
                        <li><a href="#home-section" className='navbar-tabs'>Home</a></li>
                        <li><a href="#about-me" className='navbar-tabs'>About</a></li>
                        <li><a href="#skill-section" className=' navbar-tabs'>Skills</a></li>
                        <li><a href="#experience-section" className='navbar-tabs'>Experience</a></li>
                        <li><a href="#project-section" className='navbar-tabs'>Projects</a></li>
                        <li> <a href="#education-section" className=' navbar-tabs'>Education</a></li>
                    </ul>
                    // </div>
                )}
            </div>

            <div id="progress-bar" className="progress-bar"></div>

            <div className='col-md-12 col-12 right-section'>

                <div className='fullname mt-10 d-flex justify-content-center align-items-center col-md-12' id='home-section'>
                    <div className='col-md-11'>


                        <div className='font-22 mt-40'>Hello You!.</div>
                        {/* <div className='font-22 mt-40'>Hi There! Hello You!.</div> */}
                        {/* <div className='d-flex justify-content-center  f-bold font-22'>  */}
                        {/* <div className='mr-7'>I'm</div>  */}
                        <div className='font-yellow font-40 '>FAHISA KOLLATH</div>

                        {/* </div> */}
                        <div className='font-22 font-bold role animate-charcter'>SOFTWARE ENGINEER, FRONT END & BACK END</div>
                        <div className='d-flex justify-content-center  home-section'>
                            <div className='contact-me' ><a href="#contact-me" className='contact-me'> CONTACT ME</a></div>
                             <div className='download-cv'><a className='text-decoration-none font-white' href='https://drive.google.com/file/d/1ooJ1M-QqsxbmY3wyYBjad8DPgeM1KKwo/view?usp=drive_link'>DOWNLOAD CV</a></div>
                         {/* <Link className='download-cv text-decoration-none font-white' to={'/resume'}>DOWNLOAD CV</Link> */}
                           
                        </div>
                    </div>

                    <div className='col-md-1 right-icon  ' >
                        <div >  <a href="mailto:fahisak786@gmail.com"
                            className=" contact inline-block text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            <img alt='' className='home-email-icon' src="/images/email1.png"></img></a>
                        </div>

                        <div > <a href="https://www.linkedin.com/in/fahisa-kollath"
                            className=" contact inline-block text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ml-4">
                            <img alt='' className='home-linkedin-icon' src="/images/linkedin.png"></img></a>
                        </div>
                        <div > <a href="https://github.com/fahisak"
                            className=" contact inline-block text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ml-4">
                            <img alt='' className='home-github-icon' src="/images/github.png"></img></a>
                        </div>
                        <div > <a href="https://drive.google.com/file/d/1gXI65t6G0ndJEAGFZdu7slYJzyidMWXC/view?usp=sharing"
                            className=" contact inline-block text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ml-4">
                            <img alt='' className='home-drive-icon' src="/images/drive.png"></img></a>
                        </div>


                    </div>

                </div>
                <div className='home-section' id='about-me'>

                    <div className='d-flex justify-content-center align-center f-bold font-22  mb-40 mt-20' >
                        <div className='mr-7'>ABOUT</div>
                        <div className='font-yellow'>ME</div>
                    </div>


                    {/* <div className='font-22 mt-40'>Hi There!</div>
                    <div className='d-flex justify-content-center  f-bold font-22'> <div className='mr-7'>I'm</div> <div className='font-yellow'> Fahisa Kollath</div></div> */}
                    <div className='divb' ><p className='justified font-16 '>
                        I am a skilled software developer with 2 years of experience in developing robust and scalable web applications. I have a strong background in both frontend and backend development, having worked on projects of varying complexity. Notably, I have leveraged technologies and frameworks such as React and Node.js to deliver high-performance, optimized web applications. In addition, I have experience integrating with databases such as MySQL, MongoDB, and PostgreSQL, where I have contributed to the development of efficient database structures that drive enhanced functionality.
                    </p></div>
                </div>
                {/* <div className='d-flex justify-content-center  home-section'>
                    <div className='contact-me'>CONTACT ME</div>
                    <div className='download-cv'>DOWNLOAD CV</div>
                </div> */}
                <div className='home-section' id='skill-section'>

                    <div className='d-flex justify-content-center align-center f-bold font-22 mb-40 mt-20'>
                        <div className='mr-7'>TECH</div>
                        <div className='font-yellow'>STACK</div>
                    </div>

                    <div className=' techlanguage d-flex justify-content-between flex-wrap col-md-12 ' >
                        <div ><img alt='' className='tech-icons' src="/images/css-3.png"></img></div>
                        <div ><img alt='' className='tech-icons' src="/images/bootstrap.png"></img></div>
                        <div><img alt='' className='tech-icons' src="/images/html-5.png"></img></div>
                        <div><img alt='' className='tech-icons' src="/images/python.png"></img></div>
                        <div><img alt='' className='tech-icons' src="/images/js.png"></img></div>
                        <div><img alt='' className='tech-icons' src="/images/atom.png"></img></div>
                        <div><img alt='' className='tech-icons' src="/images/nodejs.png"></img></div>
                        <div><img alt='' className='tech-icons' src="/images/postgre.png"></img></div>
                        <div><img alt='' className='tech-icons' src="/images/gitlab.png"></img></div>
                    </div>
                </div>

                <div className='home-section' id="experience-section"  >

                    <div className='d-flex justify-content-center align-items-center f-bold font-22 mb-40 mt-20'>
                        <div className='mr-7'>MY</div>
                        <div className='font-yellow'>EXPERIENCE</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <img alt='' className='hidile-icon' src="/images/hidiler.png"></img>
                        <div className='hidileexp'>

                            Software Engineer at Hidile LLP

                        </div>
                        <div className='ml-10 date-hidile'> March 2022 - Present</div>
                    </div>

                    <div>

                        <p className='justified font-16 about'>
                            Designed and developed both front-end and back-end applications using HTML,
                            CSS, React.js, Next.js, Node.js, and ExpressJs. Utilized Agile methodologies
                            to enhance project management efficiency, fostering collaboration and
                            adaptability in a dynamic development environment. Designed and
                            integrated,
                            focusing on creating user-friendly interfaces. Implemented UI mockups,
                            integrated third-party React libraries, and managed/created Redux store data
                            for efficient state management.
                        </p>
                    </div>
                    <div className='d-flex'>
                        <div className='languages'>React js</div>
                        <div className='languages'>Node js</div>
                        <div className='languages'>Express js</div>
                        <div className='languages'>HTML</div>
                        <div className='languages'>CSS</div>
                    </div>

                    <div className='d-flex align-items-center justify-content-between'>
                        <img alt='' className='hidile-icon' src="/images/futura.png"></img>
                        <div className='hidileexp'>

                            MERN STACK Intern at Futura Labs LLP

                        </div>
                        <div className='ml-10 date-hidile'> November 2021 - February 2022</div>
                    </div>

                    <div>

                        <p className='justified font-16 about'>
                            As a MERN Stack Intern, I developed web applications using MongoDB,
                            Express.js, React.js, and Node.js, translating design mockups into functional web apps.
                            My responsibilities included managing data with MongoDB,
                            setting up servers using Node.js and Express.js,
                            and writing JavaScript code using React.js.
                        </p>
                    </div>

                    <div className='d-flex'>
                        <div className='languages'>React js</div>
                        <div className='languages'>Node js</div>
                        <div className='languages'>Express js</div>
                        <div className='languages'>HTML</div>
                        <div className='languages'>CSS</div>
                    </div>

                </div>


                <div className='home-section' id="project-section">

                    <div className='d-flex justify-content-center align-items-center f-bold font-22 mb-40 mt-20'>
                        <div className='mr-7'>MY</div>
                        <div className='font-yellow'>PROJECTS</div>
                    </div>

                    <div className='d-flex justify-content-center col-md-12 flex-wrap'>

                        <div className='col-md-5 outerdiv '>
                            <div className='projectimg'>
                                <a href='https://flexirecs.com/' className='text-decoration-none'>
                                    <img alt='' className='project-picture' src="/images/perm.jpeg"></img>
                                </a>
                            </div>

                            <a href='https://flexirecs.com/' className='text-decoration-none'> <div>
                                <div className='font-bold font-20 font-white'>Flexirecruits</div>

                                <div className='flexi-hedding'>  A UK-based manpower supply company in the healthcare sector.
                                    It recruits nurses from around the worl...
                                </div>
                            </div></a>
                        </div>
                        <div className='col-md-5 outerdiv'>
                            <div className='projectimg'>
                                <a href='https://app.flexirecs.com/' className='text-decoration-none'>
                                    <img alt='' className='project-picture' src="/images/temp.jpeg"></img>
                                </a>
                            </div>

                            <a href='https://app.flexirecs.com/' className='text-decoration-none'>
                                 <div>
                                <div className='font-bold font-20 text-decoration-none font-white'>Flexirecs</div>
                                <div className='flexi-hedding'>  A UK-based manpower supply company in the healthcare sector.
                                    It recruits nurses from around the worl...</div>
                            </div></a>

                        </div>
                    </div>
                </div>


                <div className='home-section' id="education-section">

                    <div className='d-flex justify-content-center align-items-center f-bold font-22 mb-40 mt-20'>
                        <div className='mr-7'>MY</div>
                        <div className='font-yellow'>Education</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <img alt='' className='hidile-icon' src="/images/university-icon.png"></img>

                        <div className='hidileexp'>
                            Master's of  Computer Science

                        </div>
                        <div className='ml-10 date-edu date-hidile'> 2018 - 2020</div>
                    </div>
                    <div>

                        <p className='justified font-16 about'>
                            Completed Master of Science in Computer Science from Calicut University Campus,
                            specializing in Computer Science. Achieved a B grade, reflecting a strong academic performance.
                            Gained a robust skill set in computer science, combining theoretical knowledge with practical expertise.
                            Skills include programming in languages like Java, C, Python, and JavaScript,
                            software development, and mathematics.
                            Eager to apply these skills in a professional setting and contribute to impactful projects.
                        </p>
                    </div>

                    <div className='d-flex align-items-center justify-content-between'>
                        <img alt='' className='hidile-icon' src="/images/university-icon.png"></img>

                        <div className='hidileexp'>
                            Bachelor of Computer Applications

                        </div>
                        <div className='ml-10 date-edu date-hidile'> 2015 - 2018</div>
                    </div>
                    <div>

                        <p className='justified font-16 about'>
                            Graduated with a Bachelor of Computer Applications (BCA) from Malabar College of Advanced Studies,
                            Calicut University, securing First Class.
                            This comprehensive program enriched my understanding of fundamental computer science concepts.
                            Keen to leverage my academic insights and contribute effectively to
                            challenging projects in a professional environment.
                        </p>
                    </div>
                </div>

                <div className='home-section' id='contact-me'>
                    <div className='d-flex justify-content-center align-center f-bold font-22 mb-40 mt-20' >
                        <div className='mr-7'>CONTACT</div>
                        <div className='font-yellow'>ME</div>
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">
                        Feel free to reach out to me. You can email me at fahisak786@gmail.com or connect with me on LinkedIn.
                    </p>
                    <div className='d-flex justify-content-center align-tems-center flex-wrap col-md-12 ' >
                        <div >  <a href="mailto:fahisak786@gmail.com"
                            className=" contact inline-block text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            <img alt='' className='email-icon' src="/images/email1.png"></img></a>
                        </div>

                        <div > <a href="https://www.linkedin.com/in/fahisa-kollath"
                            className=" contact inline-block text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ml-4">
                            <img alt='' className='linkedin-icon' src="/images/linkedin.png"></img></a>
                        </div>
                        <div > <a href="https://github.com/fahisak"
                            className=" contact inline-block text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ml-4">
                            <img alt='' className='github-icon' src="/images/github.png"></img></a>
                        </div>
                        <div > <a href="https://drive.google.com/file/d/1gXI65t6G0ndJEAGFZdu7slYJzyidMWXC/view?usp=sharing"
                            className=" contact inline-block text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ml-4">
                            <img alt='' className='github-icon' src="/images/drive.png"></img></a>
                        </div>


                    </div>

                </div>

                <div className='home-section'>
                    <p className='copyright'>Copyright &copy; fahisakollath {new Date().getFullYear()} All rights reserved.</p>
                </div>



            </div>

            {/* </div> */}
            

        </div>
        
    )
}

export default Profile