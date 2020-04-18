import React from 'react';
import ShowCaseMiddleText from '../ShowCaseMiddleText/ShowCaseMiddleText';
import JuniCodesImage from '../JuniCodesImage/JuniCodesImage';
import './FirstShowCase.css';

const FirstShowCase = () => {
    return (
        <div className="col-12 row m-0 p-0 firstshowcase-sty-cover">
            <div className="col-7 text-noted">
                <ShowCaseMiddleText/>
            </div>
            <div className="col-5 image-grid">
                <JuniCodesImage />
            </div>
        </div>
    )
}

export default FirstShowCase