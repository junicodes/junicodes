import React, {Component, createRef} from 'react';
import './Contact.css';

class Contact extends Component{

    phoneInputRef = createRef();

    state = {
       
    }

    contactUs = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
     
        if(this.phoneInputRef.current.value === '') {
             formData.set('sender_phone', 'No Phone') 
         }
        let result = this.sendMail(formData); //Send the data to the ajax request to mail
        // if(result){

        // }
        // console.log(this.senderNameInput.current.value);
        // console.log(this.subjectInput.current.value);
    }
    sendMail = (formData) => {
        console.log('open server')
        // fetch('https://junicodes-server.herokuapp.com/sendmail.php', {
        //     method: 'POST',
        //     mode: "cors",
           
        //     body: formData
        // }) 
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(err => console.log(err))
    }
    render(){
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
                            <form onSubmit={this.contactUs}>
                                 <div className="form-group m-0">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="eg. Job Offer" required/>
                                </div>
                                <div className="form-group m-0">
                                    <label htmlFor="subject">Name</label>
                                    <input type="name" className="form-control" name="sender_name" id="sender_name" placeholder="eg. John Doe" required/>
                                </div>
                                <div className="col-12 row m-0 p-0">
                                    <div className="form-group col-6 m-0 p-0 pr-1">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" name="sender_email" id="sender_email" placeholder="eg. name@example.com" required/>
                                    </div>
                                    <div className="form-group col-6 m-0 p-0 pl-1">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" ref={this.phoneInputRef} className="form-control" name="sender_phone" id="sender_phone" placeholder="eg. +234700******"/>
                                        <i style={{fontSize: '1.5vh', color: '#e6e6e6'}}>please note: phone field is not required!</i>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" name="message" id="message" rows="3" placeholder="Ttye a message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary col-3">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;