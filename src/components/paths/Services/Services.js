import React from 'react';
import './Services.css';

const Contact = () => {
    return (
        <div className="services-sty-cover">
            <div className="col-12 animated fadeIn">
                <div className="heading col-6 mx-auto">
                    <h3>Services</h3>
                </div>
                <div className="services">
                    <div className="block-1 col-12 col-lg-10 row mx-auto mt-2">
                        <div className="col-12 col-md-6 col-lg-6 mx-auto animated fadeIn" style={{animationDelay: '0.2s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Web Development</h5>
                            <p>
                                I can completely build a responsible web app using technologies 
                                such as 
                                <b style={{color: 'skyblue'}}> Laravel </b> 
                                 or 
                                <b style={{color: 'skyblue'}}> NodeJS </b> 
                                framework for your Backend APIs and 
                                <b style={{color: 'skyblue'}}> HTML/CSS</b>, 
                                <b style={{color: 'skyblue'}}> ReactJS</b>, Vanilla
                                <b style={{color: 'skyblue'}}> JavaScript </b>
                                for Frontend.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mx-auto animated fadeIn" style={{animationDelay: '0.4s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Mobile Development</h5>
                            <p>
                                I use <b style={{color: 'skyblue'}}> React Native </b>
                                framework to build native mobile app for android and ios,
                                i also convert web to mobile app for both android and ios using 
                                <b style={{color: 'skyblue'}}> Cordova</b> framework.
                            </p>
                        </div>
                    </div>
                    <div className="block-2 col-12 col-lg-10 mx-auto row mt-2">
                        <div className="col-12 col-md-6 col-lg-6 mx-auto animated fadeIn" style={{animationDelay: '0.6s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Team/Project Mgt</h5>
                            <p>
                                I have the ledership skills for managing your teams and projects, 
                                in the past years i have handled small and larger teams and that has built my experience 
                                enabling me to mitigate basic and unforeseen errors. 
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mx-auto animated fadeIn" style={{animationDelay: '0.8s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Programming Tutorial</h5>
                            <p>
                                I love to teach and i am always ready to educate young aspiring developer's on how to code 
                                and become successful, i have a youtube channel where i teach solution to various programming problems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;