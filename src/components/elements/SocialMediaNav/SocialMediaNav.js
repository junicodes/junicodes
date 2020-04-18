import React from 'react';
import './SocialMediaNav.css';

const SocialMediaNav = () => {
    return (
        <div className="socialmedia-nav-sty-cover">
            <h5>Connect</h5>
            <div className="social">
                <div className="facebook">
                    <span className="mt-2 social-name">facebook</span>
                    <img className="m-1" src="./images/social/facebook.svg" alt="facebook"/>    
                </div>
                <div className="github">
                    <span className="mt-2 social-name">github</span>
                    <img className="m-1" src="./images/social/github.svg" alt="github"/>
                </div>
                <div className="twitter">
                    <span className="mt-2 social-name">twitter</span>
                    <img className="m-1" src="./images/social/twitter.svg" alt="twitter"/>
                </div>
                <div className="linkedIn">
                    <span className="mt-2 social-name">linkedIn</span>
                    <img className="m-1" src="./images/social/linkedin.svg" alt="linkedIn"/>
                </div>
                <div className="instagram">
                    <span className="mt-2 social-name">instagram</span>
                    <img className="m-1" src="./images/social/instagram.svg" alt="instagram"/>
                </div>
                <div className="whatsapp">
                    <span className="mt-2 social-name">whatsapp</span>
                    <img className="m-1" src="./images/social/whatsapp.svg" alt="whatap"/>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaNav;