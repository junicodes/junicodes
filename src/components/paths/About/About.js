import React from "react";
import '../../../packages/animate.css';
import './About.css';

const About = () => {
    return (
        <div className="abt-sty-cover">
            <div className="col-12 animated fadeIn">
                <div className="heading col-6 mx-auto">
                    <h3>About Me</h3>
                </div>
                <div className="about-me col-12 col-lg-9 mx-auto mt-3">
                    <article className="mt-2 animated fadeIn" style={{animationDelay: '0.1s', 
                        animationTimingFunction: 'linear'
                        }}>   
                        I am an experience Software Developer currently residing in Port Hacourt, Rivers State, Nigeria.
                        i build responsive web apps, scalable APIs and mobile apps using modern technologies. 
                        my curiosity on how the internet works led me to technology.
                    </article>
                    <article className="mt-3 animated fadeIn" style={{animationDelay: '0.2s', 
                        animationTimingFunction: 'linear'
                        }}>   
                       My core programming skill are 
                       <b style={{color: 'skyblue'}}> HTML</b>, 
                       <b style={{color: 'skyblue'}}> CSS</b> (SASS, Boostrap),
                       <b style={{color: 'skyblue'}}> JAVASCRIPT</b> (ES6, ReactJS, NodeJS),
                       <b style={{color: 'skyblue'}}> Php</b> (Laravel),
                       <b style={{color: 'skyblue'}}> Mobile</b> (React Native, Cordova).
                       I am also experience in 
                       <b style={{color: 'skyblue'}}> DBMS</b> (MySQL, MongoDB, Firebase),
                       <b style={{color: 'skyblue'}}> NGINX</b>,
                       configuration<b style={{color: 'skyblue'}}> Git</b> version control,
                    </article>
                    <article className="mt-3 animated fadeIn" style={{animationDelay: '0.3s', 
                        animationTimingFunction: 'linear'
                        }}>
                        Personally i have completed projects and also worked with different teams, 
                        I have been privileged to work at startups and organizations where i handle lead roles to foreseen projects to it's finish,
                        My core responsibility is to illuminate integrity and transparency in my business.
                    </article>
                </div>
            </div>
        </div>
    )
}

export default About;