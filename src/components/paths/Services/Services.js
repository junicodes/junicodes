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
                    <div className="block-1 col-12 row mx-auto mt-4">
                        <div className="col-6 mx-auto">
                            <h5>Web Development</h5>
                            <p>
                                I can completely build a responsible web app using technologies 
                                such as Laravel or NodeJs framework for your Backend APIs and HTML/CSS, ReactJS or Vanilla JavaScript
                                for Frontend.
                            </p>
                        </div>
                        <div className="col-6 mx-auto">
                            <h5>Mobile Development</h5>
                            <p>
                                I use React Native framework to build native mobile app for android and ios,
                                i also covert web app to mobile app for both android and ios using Cordova framwork.
                            </p>
                        </div>
                    </div>
                    <div className="block-2 col-12 mx-auto row mt-4">
                        <div className="col-6">
                            <h5>Team/Project Mgt</h5>
                            <p>
                                I have the ledership skills for managing your teams and projects, 
                                in the past years i have handled small and larger teams and that has built my experience 
                                enabling me to mitigate basic and unforeseen errors. 
                            </p>
                        </div>
                        <div className="col-6">
                            <h5>Tutorial</h5>
                            <p>
                                I love to teach and i am always ready to educate young aspiring developer's how to code 
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