import React, {Component} from 'react';
import './MobileMenu.css';

class MobileMenu extends Component {
    state = {
        mobileLink: 'Home',
    }

    toggleMenu = () => {
        document.querySelector('#burger').classList.toggle('is-open');
        document.querySelector('#main-nav').classList.toggle('is-open');
    };
    handleMobileLinkChange = (e) => {
        const link = e.target.dataset.id
        this.toggleMenu()
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
                    <li onClick={this.handleMobileLinkChange}><span data-id="Home">Home</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="About">About</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="Services">Services</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="Portfolio">Portfolio</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="Contact">Contact</span></li>
                </ul>
            </nav>
            </div>
        )
    }
  
}

export default MobileMenu;