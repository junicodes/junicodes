import React, { Component } from 'react';
import './ShowCase.css';

class ShowCase extends Component {
    state = {
        imageFlicker: 1
    }
        timer = null;

    componentDidMount() {
        this.timer = setInterval(() => this.changeShowcaseImage(), 5000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    changeShowcaseImage = () => {
        this.state.imageFlicker < 3 ? 
                this.setState({imageFlicker: this.state.imageFlicker + 1 })
            : this.setState({imageFlicker: 1});
    }

    render(){
        return (
            <div className="col-12 border showcase-sty-cover">
                ShowCase {this.state.imageFlicker}
                <div>
    
                </div>
            </div>
        )
    }

}

export default ShowCase;