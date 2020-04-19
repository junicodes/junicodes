import React from 'react';
import './JuniCodesImage.css';

const JuniCodesImage = () => {
    return (
        <div className="junicodesimage-sty-cover">
            <img style={{height: '70vh',
                         marginLeft: '7vh', 
                         filter: 'drop-shadow(16px 16px 10px rgba(0,0,0,0.9))'
                        }} 
                 src="./images/personal/junicodes.png" />
        </div>
    )
}

export default JuniCodesImage;