import React, {Component} from 'react';
import ShowCase from '../../elements/ShowCase/ShowCase';
import './Home.css';


class Home extends Component{
    state = {

    }

    render() {
        return(
            <div className="home-sty-cover">
                <ShowCase/>
            </div>
        )
    }
}

export default Home;
