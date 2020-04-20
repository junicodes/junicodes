import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-sty-cover">
            <div className="col-12 animated fadeIn">
                <div className="heading col-6 mx-auto">
                    <h3>Contact Me</h3>
                </div>
                <div className="col-10 mx-auto row border mt-3 contact-grid">
                    <div className="col-6 border contact-info p-4">
                        <p>Email : junicodes@gmail.com</p>
                        <p>Phone : +2347060959269</p>
                        <p>Facebook : <a href="https://web.facebook.com/junicodes" target="_blank">view</a></p>
                        <p>Github : <a href="https://github.com/junicodes" target="_blank">view</a></p>
                        <p>LinkedIn : <a href="https://www.linkedin.com/in/okechukwu-obi-746161196/" target="_blank">view</a></p>
                        <p>Twitter : <a href="https://twitter.com/junicodes" target="_blank">view</a></p>
                        <p>Instagram : <a href="https://www.instagram.com/junicodes/" target="_blank">view</a></p>
                        <p>Whatapp : <a href="https://wa.me/+2347060959269" target="_blank">view</a></p>
                    </div>
                    <div className="col-6 border contact-form">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="email" class="form-control" id="phone" placeholder="+2347078739992" />
                                <i style={{fontSize: '1.8vh', color: '#e6e6e6'}}>***please note: phone is not neccessary</i>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="message" rows="4"></textarea>
                            </div>
                            <button type="button" class="btn btn-outline-primary col-3">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;