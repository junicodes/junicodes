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

        Array.from(document.querySelectorAll('.main-nav .mobile-links')).map((element, i)=> {
            element.style.color = 'white';
          });
          e.target.style.color = '#e83e8c';
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
                    <li onClick={this.handleMobileLinkChange}><span data-id="Home" className="mobile-links mobile-home">Home</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="About" className="mobile-links">About</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="Services" className="mobile-links">Services</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="Portfolio" className="mobile-links">Portfolio</span></li>
                    <li onClick={this.handleMobileLinkChange}><span data-id="Contact" className="mobile-links">Contact</span></li>
                </ul>
            </nav>
            </div>
        )
    }
  
}

export default MobileMenu;