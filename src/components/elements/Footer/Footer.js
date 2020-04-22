import React, {Component} from 'react';
import '../../../packages/animate.css';
import './Footer.css';

class Footer extends Component {
    state = {
        testimonialFlicker: 1
    }
    timer = null;

    componentDidMount() {
        this.timer = setInterval(() => {
            this.slideTestimonials()
        }, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    slideTestimonials= () => {
        this.state.testimonialFlicker < 3 ?
        this.setState({testimonialFlicker: this.state.testimonialFlicker + 1})
        : this.setState({testimonialFlicker: 1});
    }
    openRecomendation = (e) => {
        const link = e.target.dataset.link;
        window.open(link, '_blank');
    }

    render(){
        return (
            <div className="footer-sty-cover col-12 row mx-0 px-0">
                <div className="col-1 page-number">
                    {this.props.page === "Home" ? <h1>&#49;</h1> : null}
                    {this.props.page === "About" ? <h1>&#50;</h1> : null}
                    {this.props.page === "Services" ? <h1>&#51;</h1> : null}
                    {this.props.page === "Portfolio" ? <h1>&#52;</h1> : null}
                    {this.props.page === "Contact" ? <h1>&#53;</h1> : null}
                </div>
                <div className="col-0 col-md-0 col-lg-5 testimonials">
                     {this.state.testimonialFlicker === 1 ? 
                        <div className="animated fadeIn">
                            <blockquote className="testionial-text">
                                <span>I</span> am well pleased in working with Mr Okechukwu, 
                                he is passionate and excellent in what 
                                he does, most importantly he make sure to get the job done.
                            </blockquote>
            
                            <a href="https://www.linkedin.com/company/primedsoft">
                                <p className="mt-2"><small className="testimonial-name">Mr Kingsley Ihemere </small>
                                    <small className="testimonial-company">
                                        (Founder and CEO Primesoft Limited)
                                    </small>
                                </p>
                            </a>
                        </div> : null}

                      {this.state.testimonialFlicker === 2 ? 
                        <div className="animated fadeIn">
                            <blockquote className="testionial-text">
                                <span>He</span> is a goal getter and always ready to learn new things, he is exceptional.
                            </blockquote>
            
                            <a href="https://www.mayowafadairo.com">
                                <p className="mt-2"><small className="testimonial-name">Mayowa Fadairo </small>
                                    <small className="testimonial-company">
                                        (Software Developer)
                                    </small>
                                </p>
                            </a>
                        </div>
                     : null}
                     
                      {this.state.testimonialFlicker === 3? 
                        <div className="animated fadeIn">
                            <blockquote className="testionial-text">
                                <span>If</span> the aim is getting your Web Application job done with acurracy
                                 and professionalism, then junicodes is all you got.
                            </blockquote>
            
                            <a href="#">
                                <p className="mt-2">
                                    <small className="testimonial-name">Mr Andy Obiefuna </small>
                                    <small className="testimonial-company">
                                        (Founder and CEO Delivery Riders)
                                    </small>
                                </p>
                            </a>
                        </div>
                     : null}
                    
                 </div>

                <div className="col-11 col-md-5 col-lg-6 recommendation-cover">
                    <div className="recomendations pl-1 p-0 col-12 row">
                        <p className="col-12 pl-3 mt-3 mb-0 p-0">Recomendations</p>
                        <div className="link pl-3 col-12 p-0">
                            <span onClick={this.openRecomendation} data-link="https://www.linkedin.com/company/primedsoft" className="pr-1 pr-lg-2  a">Primesoft</span>
                            <span onClick={this.openRecomendation} data-link="https://ndiecodes.github.io" className="px-1 px-lg-2 b">NdieCodes</span>
                            <span onClick={this.openRecomendation} data-link="https://www.stakeholderdemocracy.org" className="px-1 px-lg-2 c">SDN</span>
                            <span onClick={this.openRecomendation} data-link="https://www.ksinnovationhub.com" className="px-1 px-lg-2 d">KSW Hub</span>
                            <span onClick={this.openRecomendation} data-link="https://hng.tech" className="px-1 px-lg-2 e">HNG</span>
                        </div>
                        <span className="col-12 mt-1 mt-md-3 mt-lg-3 copy-right">Copyright © 2020 Junicodes | All rights reserved</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;