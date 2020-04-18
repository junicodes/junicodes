import React from 'react';
import './SocialMediaNav.css';

const SocialMediaNav = () => {
    return (
        <div className="socialmedia-nav-sty-cover">
            <h5>Connect</h5>
            <div className="social">
                <div className="facebook">
                    <img className="m-1" src="./images/social/facebook.svg" alt="facebook"/>
                </div>
                <div className="github">
                    <img className="m-1" src="./images/social/github.svg" alt="github"/>
                </div>
                <div className="twitter">
                    <img className="m-1" src="./images/social/twitter.svg" alt="twitter"/>
                </div>
                <div className="linkedIn">
                    <img className="m-1" src="./images/social/linkedin.svg" alt="linkedIn"/>
                </div>
                <div className="instagram">
                    <img className="m-1" src="./images/social/instagram.svg" alt="instagram"/>
                </div>
                <div className="whatsapp">
                    <img className="m-1" src="./images/social/whatsapp.svg" alt="whatap"/>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaNav;