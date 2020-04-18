import React, {Component} from 'react';
import SocialMediaNav from '../SocialMediaNav/SocialMediaNav';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.css';

class Header extends Component {
  state = {
    isMobile: false
  }

  componentDidMount(){
    let x = window.matchMedia("(max-width: 768px)")
    this.checkIfMobile(x);
    x.addListener(this.checkIfMobile)
  }

  handleMobileLinkChange = (link) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
       this.props.onSelectLinkSwitch(link)
    }, 100);
  }
  
  handleLinkChange = (e) => {
    const link = e.target.dataset.id
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
       this.props.onSelectLinkSwitch(link)
    }, 10);
  }

  checkIfMobile = (x) => {
      x.matches ? this.setState({isMobile: true}) : this.setState({isMobile: false});
  }

  render(){
    return (
            <div className="header-sty-cover">
               <div className="col-12 mx-0 px-0 row">
                    <div className="col-8 col-md-3 text-left header-logo">
                        <code><span>&#8521;</span>uni&#778;codes</code>
                    </div>
                    {this.state.isMobile ? <MobileMenu onSelectMobileLinkSwitch={this.handleMobileLinkChange}/> 
                      : 
                      <div className="col-9 header-link">
                        <ul className="list-group list-group-horizontal">
                          <li onClick={this.handleLinkChange} data-id="Home" className="list-group-item">Home</li>
                          <li onClick={this.handleLinkChange} data-id="About" className="list-group-item">About</li>
                          <li onClick={this.handleLinkChange} data-id="Services" className="list-group-item">Services</li>
                          <li onClick={this.handleLinkChange} data-id="Portfolio" className="list-group-item">Portfolio</li>
                          <li onClick={this.handleLinkChange} data-id="Contact" className="list-group-item">Contact</li>
                        </ul>
                      </div>
                    }
                    
                </div>
                <div className="header-socialmedia-nav">
                  <SocialMediaNav/>
                </div>
            </div>
            ) 
  }
 
}

export default Header;