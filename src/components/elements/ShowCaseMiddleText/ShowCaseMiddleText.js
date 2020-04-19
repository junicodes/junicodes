import React from 'react';
import '../../../packages/animate.css';
import './ShowCaseMiddleText.css';

const ShowCaseMiddleText = (props) => {
    let timeout = '';
    const onBeginClick = (e) => {
        const link = e.target.dataset.id
           clearTimeout(timeout);
           timeout = setTimeout(() => {
           props.onStartClick(link)
        }, 10);
    }
    return (
        <div className="showcasemiddle-text-sty-cover animated fadeIn" style={{animationDelay: '0.5s', 
        animationTimingFunction: 'linear'
        }}>
            <p style={{color: 'skyblue'}}>Hello, I am</p>
            <h1>Okechukwu Obi</h1>
            <p>Full-Stack Web and Mobile Developer</p>
            <button onClick={onBeginClick} data-id="Contact" className="mt-2">Talk To Me</button>
        </div>
    )
}

export default ShowCaseMiddleText;