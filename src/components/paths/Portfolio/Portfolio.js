import React from 'react';
import '../../../packages/animate.css';
import '../../../packages/scrollerdesign.css';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-sty-cover">
            <div className="col-12 animated fadeIn">
                <div className="heading col-6 mx-auto">
                    <h3>I Build</h3>
                </div>
                <div className="ibuild scroller col-12 mt-2 m-0 p-0">
                    <div className="block col-11 mx-auto p-0 m-0 row">
                        <div className="p-3">
                            <div className="build-show animated fadeIn" style={{animationDelay: '0.2s', 
                                animationTimingFunction: 'linear'
                                }}>
                                <a href="https://developnd.ng" target="_blank" rel="noopener noreferrer">
                                    <h5>DevelopND</h5>
                                    <p><small>Tech Used: Laravel, HTML, SASS, MySQL, Digital Ocean (NGINX), JavaScript</small></p>
                                    <p>This is a web app that tracks ongoing projects awarded to communities in Niger Delta Region of 
                                        Nigeria and also create the oppurturnity for community memeber to interact with project owners.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="build-show animated fadeIn" style={{animationDelay: '0.4s', 
                                animationTimingFunction: 'linear'
                                }}>
                                <a href="https://gateguard.co" target="_blank" rel="noopener noreferrer">
                                    <h5>GateGuard</h5>
                                    <p><small>Tech Used: Laravel, Flutter, HTML, CSS, JavaScript, Vue.js</small></p>
                                    <p>This is a security estate management app, it was build as a mobile app
                                        that allows user to control thier visitors, pay bills, order for domestic services
                                        and also help estates managers to manage there estate data and bills.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="build-show animated fadeIn" style={{animationDelay: '0.6s', 
                                animationTimingFunction: 'linear'
                                }}>
                                <a href="https://trim.ng/" target="_blank" rel="noopener noreferrer">
                                    <h5>Trim.NG</h5>
                                    <p><small>Tech Used: Node.js, JavaScript</small></p>
                                    <p>A well designed url shortener.</p>
                                </a>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="build-show animated fadeIn" style={{animationDelay: '0.6s', 
                                animationTimingFunction: 'linear'
                                }}>
                                <a href="https://pfxnet.com/" target="_blank" rel="noopener noreferrer">
                                    <h5>Pfxnet</h5>
                                    <p><small>Tech Used: NodeJS (Express.js), MongoDB, HTML, CSS, JS,</small></p>
                                    <p>An Estate Managemnet and investment platform.</p>
                                </a>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="build-show animated fadeIn" style={{animationDelay: '0.6s', 
                                animationTimingFunction: 'linear'
                                }}>
                                <a href="https://adsvilla.org/" target="_blank" rel="noopener noreferrer">
                                    <h5>CherrySoft Deliveries (Ongoing Build)</h5>
                                    <p><small>Tech Used: NodeJS (Adonis.js), React.js, MySQL</small></p>
                                    <p>A day to day delivery services located at Port Harcourt, Rivers State.</p>
                                </a>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="build-show animated fadeIn" style={{animationDelay: '0.6s', 
                                animationTimingFunction: 'linear'
                                }}>
                                <a href="https://ewoma.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                    <h5>Ewoma Bot (Personal)</h5>
                                    <p><small>Tech Used: Node.js, Socket.io, JavaScript, Dialog Flow</small></p>
                                    <p>An AI Bot that give information about covid-19 virus from all reliable sources,
                                        it also shares web links to get more information.</p>
                                </a>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="build-show animated fadeIn" style={{animationDelay: '0.6s', 
                                animationTimingFunction: 'linear'
                                }}>
                                <a href="https://reactmoviebox.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <h5>Movie Box (Personal)</h5>
                                    <p><small>Tech Used: Node.js, Socket.io, React.js, Dialog Flow</small></p>
                                    <p>Here I am leveraging the use of MovieDB API.</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;