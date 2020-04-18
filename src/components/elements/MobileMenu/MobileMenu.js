import React, {Component} from 'react';
import './MobileMenu.css';

class MobileMenu extends Component {
    state = {
        mobileLink: 'Home',
    }

    toggleMenu = (e) => {
        document.getElementById('burger').classList.toggle('is-open');
    document.getElementById('main-nav').classList.toggle('is-open');
    };
    handleMobileLinkChange = (e) => {
        const link = e.target.dataset.id
        console.log(link)
        clearTimeout(this.timeout);
    
        this.timeout = setTimeout(() => {
           this.props.onSelectMobileLinkSwitch(link)
        }, 10);
    }

    render(){
        return (
            <div className="mobilemenu-sty-cover">
                <button onClick={this.toggleMenu} id="burger" className="open-main-nav">
                    <span className="burger"></span>
                    <span className="burger-text">Menu</span>
                </button>
            <nav className="main-nav" id="main-nav">
                <ul>
                    <li onClick={this.handleMobileLinkChange} data-id="Home"><span>Home</span></li>
                    <li onClick={this.handleMobileLinkChange} data-id="About"><span>About</span></li>
                    <li onClick={this.handleMobileLinkChange} data-id="Services"><span>Services</span></li>
                    <li onClick={this.handleMobileLinkChange} data-id="Portfolio"><span>Portfolio</span></li>
                    <li onClick={this.handleMobileLinkChange} data-id="Contact"><span>Contact</span></li>
                </ul>
            </nav>
            </div>
        )
    }
  
}

export default MobileMenu;