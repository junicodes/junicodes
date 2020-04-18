import React, {Component} from "react";
import Header from "../elements/Header/Header";
import Footer from "../elements/Footer/Footer";
import Home from "../paths/Home/Home";
import About from "../paths/About/About";
import Services from "../paths/Services/Services";
import Portfolio from "../paths/Portfolio/Portfolio";
import Contact from "../paths/Contact/Contact";

class App extends Component {
    state = {
        current_link: "Home"
    }
   
    //Trigger the Link switch
    handleLinkSwitch = (link) => {
        this.setState({current_link: link})
        // flickScreen(this.state.current_link)
    }

    render(){
            return (
                <React.Fragment>
                    <Header onSelectLinkSwitch={this.handleLinkSwitch}/>
                     {this.state.current_link === 'Home' ? <Home/> : null}
                     {this.state.current_link === 'About' ? <About/> : null}
                     {this.state.current_link === 'Services' ? <Services/> : null}
                     {this.state.current_link === 'Portfolio' ? <Portfolio/> : null}
                     {this.state.current_link === 'Contact' ? <Contact/> : null}
                    <Footer/>
                </React.Fragment>
            )
        }
}

export default App;