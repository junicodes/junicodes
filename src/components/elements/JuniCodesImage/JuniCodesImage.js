import React from 'react';
import '../../../packages/animate.css';
import './JuniCodesImage.css';

const JuniCodesImage = () => {
    return (
        <div className="junicodesimage-sty-cover">
            <img className="animated fadeIn" style={{height: '70vh',
                         marginLeft: '7vh', 
                         filter: 'drop-shadow(16px 16px 10px rgba(0,0,0,0.9))'
                        }} 
                 src="./images/personal/junicodes.png" alt="Junicodes" />
        </div>
    )
}

export default JuniCodesImage;