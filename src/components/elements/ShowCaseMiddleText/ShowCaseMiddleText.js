import React from 'react';
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
        <div className="showcasemiddle-text-sty-cover">
            <h1>i am Okechukwu Obi</h1>
            <p>Web Developer and Mobile Developer</p>
            <button onClick={onBeginClick} data-id="Contact" className="mt-2">Talk To Me</button>
        </div>
    )
}

export default ShowCaseMiddleText;