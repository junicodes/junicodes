(this.webpackJsonpjunicodesweb=this.webpackJsonpjunicodesweb||[]).push([[0],[,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(29)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),o=t.n(i),c=(t(13),t(14),t(1)),r=t(2),s=t(3),m=t(4),u=(t(15),function(){var e=function(e){console.log(e.target);var a=e.target.dataset.link;console.log(a),window.open(a,"_blank")};return l.a.createElement("div",{className:"socialmedia-nav-sty-cover"},l.a.createElement("h5",null,"Connect"),l.a.createElement("div",{className:"social"},l.a.createElement("div",{onClick:e,className:"facebook"},l.a.createElement("span",{className:"mt-2 social-name"},"facebook"),l.a.createElement("img",{"data-link":"https://web.facebook.com/junicodes",className:"m-1",src:"./images/social/facebook.svg",alt:"facebook"})),l.a.createElement("div",{onClick:e,className:"github"},l.a.createElement("span",{className:"mt-2 social-name"},"github"),l.a.createElement("img",{"data-link":"https://github.com/junicodes",className:"m-1",src:"./images/social/github.svg",alt:"github"})),l.a.createElement("div",{onClick:e,className:"twitter"},l.a.createElement("span",{className:"mt-2 social-name"},"twitter"),l.a.createElement("img",{"data-link":"https://twitter.com/junicodes",className:"m-1",src:"./images/social/twitter.svg",alt:"twitter"})),l.a.createElement("div",{onClick:e,className:"linkedIn"},l.a.createElement("span",{className:"mt-2 social-name"},"linkedIn"),l.a.createElement("img",{"data-link":"https://linkedin.com/in/okechukwu-obi-746161196",className:"m-1",src:"./images/social/linkedin.svg",alt:"linkedIn"})),l.a.createElement("div",{onClick:e,className:"instagram"},l.a.createElement("span",{className:"mt-2 social-name"},"instagram"),l.a.createElement("img",{"data-link":"https://www.instagram.com/junicodes",className:"m-1",src:"./images/social/instagram.svg",alt:"instagram"})),l.a.createElement("div",{onClick:e,className:"whatsapp"},l.a.createElement("span",{className:"mt-2 social-name"},"whatsapp"),l.a.createElement("img",{"data-link":"https://wa.me/+2347060959269",className:"m-1",src:"./images/social/whatsapp.svg",alt:"whatap"}))))}),d=(t(16),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={mobileLink:"Home"},e.toggleMenu=function(){document.querySelector("#burger").classList.toggle("is-open"),document.querySelector("#main-nav").classList.toggle("is-open")},e.handleMobileLinkChange=function(a){var t=a.target.dataset.id;Array.from(document.querySelectorAll(".main-nav .mobile-links")).map((function(e,a){e.style.color="white"})),a.target.style.color="#e83e8c",e.toggleMenu(),clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.props.onSelectMobileLinkSwitch(t)}),10)},e}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"mobilemenu-sty-cover"},l.a.createElement("button",{onClick:this.toggleMenu,id:"burger",className:"open-main-nav"},l.a.createElement("span",{className:"burger"}),l.a.createElement("span",{className:"burger-text"},"Menu")),l.a.createElement("nav",{className:"main-nav",id:"main-nav"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:this.handleMobileLinkChange},l.a.createElement("span",{"data-id":"Home",className:"mobile-links mobile-home"},"Home")),l.a.createElement("li",{onClick:this.handleMobileLinkChange},l.a.createElement("span",{"data-id":"About",className:"mobile-links"},"About")),l.a.createElement("li",{onClick:this.handleMobileLinkChange},l.a.createElement("span",{"data-id":"Services",className:"mobile-links"},"Services")),l.a.createElement("li",{onClick:this.handleMobileLinkChange},l.a.createElement("span",{"data-id":"Portfolio",className:"mobile-links"},"Portfolio")),l.a.createElement("li",{onClick:this.handleMobileLinkChange},l.a.createElement("span",{"data-id":"Contact",className:"mobile-links"},"Contact")))))}}]),t}(n.Component)),p=(t(17),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={isMobile:!1},e.handleMobileLinkChange=function(a){clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.props.onSelectLinkSwitch(a)}),100)},e.handleLinkChange=function(a){var t=a.target.dataset.id;Array.from(document.querySelectorAll(".laptop-links")).map((function(e,a){e.classList.contains("color-tweak")&&e.classList.remove("color-tweak")})),a.target.classList.add("color-tweak"),clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.props.onSelectLinkSwitch(t)}),10)},e.checkIfMobile=function(a){a.matches?e.setState({isMobile:!0}):e.setState({isMobile:!1})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(max-width: 768px)");this.checkIfMobile(e),e.addListener(this.checkIfMobile)}},{key:"render",value:function(){return l.a.createElement("div",{className:"header-sty-cover"},l.a.createElement("div",{className:"col-12 mx-0 px-0 row"},l.a.createElement("div",{className:"col-8 col-md-3 text-left header-logo"},l.a.createElement("code",null,l.a.createElement("span",null,"\u2149"),"uni\u030acodes")),this.state.isMobile?l.a.createElement(d,{onSelectMobileLinkSwitch:this.handleMobileLinkChange}):l.a.createElement("div",{className:"col-9 header-link"},l.a.createElement("ul",{className:"list-group list-group-horizontal"},l.a.createElement("li",{onClick:this.handleLinkChange,"data-id":"Home",className:"list-group-item laptop-links color-tweak"},"Home"),l.a.createElement("li",{onClick:this.handleLinkChange,"data-id":"About",className:"list-group-item laptop-links"},"About"),l.a.createElement("li",{onClick:this.handleLinkChange,"data-id":"Services",className:"list-group-item laptop-links"},"Services"),l.a.createElement("li",{onClick:this.handleLinkChange,"data-id":"Portfolio",className:"list-group-item laptop-links"},"Portfolio"),l.a.createElement("li",{onClick:this.handleLinkChange,"data-id":"Contact",className:"list-group-item laptop-links"},"Contact")))),l.a.createElement("div",{className:"header-socialmedia-nav"},l.a.createElement(u,null)))}}]),t}(n.Component)),h=(t(5),t(18),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={testimonialFlicker:1},e.timer=null,e.slideTestimonials=function(){e.state.testimonialFlicker<3?e.setState({testimonialFlicker:e.state.testimonialFlicker+1}):e.setState({testimonialFlicker:1})},e.openRecomendation=function(e){var a=e.target.dataset.link;window.open(a,"_blank")},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.slideTestimonials()}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return l.a.createElement("div",{className:"footer-sty-cover col-12 row mx-0 px-0"},l.a.createElement("div",{className:"col-1 page-number"},"Home"===this.props.page?l.a.createElement("h1",null,"1"):null,"About"===this.props.page?l.a.createElement("h1",null,"2"):null,"Services"===this.props.page?l.a.createElement("h1",null,"3"):null,"Portfolio"===this.props.page?l.a.createElement("h1",null,"4"):null,"Contact"===this.props.page?l.a.createElement("h1",null,"5"):null),l.a.createElement("div",{className:"col-0 col-md-0 col-lg-5 testimonials"},1===this.state.testimonialFlicker?l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("blockquote",{className:"testionial-text"},l.a.createElement("span",null,"I")," am well pleased in working with Mr Okechukwu, he is passionate and excellent in what he does, most importantly he make sure to get the job done."),l.a.createElement("a",{href:"https://www.linkedin.com/company/primedsoft"},l.a.createElement("p",{className:"mt-2"},l.a.createElement("small",{className:"testimonial-name"},"Mr Kingsley Ihemere "),l.a.createElement("small",{className:"testimonial-company"},"(Founder and CEO Primesoft Limited)")))):null,2===this.state.testimonialFlicker?l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("blockquote",{className:"testionial-text"},l.a.createElement("span",null,"He")," is a goal getter and always ready to learn new things, he is exceptional."),l.a.createElement("a",{href:"https://www.mayowafadairo.com"},l.a.createElement("p",{className:"mt-2"},l.a.createElement("small",{className:"testimonial-name"},"Mayowa Fadairo "),l.a.createElement("small",{className:"testimonial-company"},"(Software Developer)")))):null,3===this.state.testimonialFlicker?l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("blockquote",{className:"testionial-text"},l.a.createElement("span",null,"If")," the aim is getting your Web Application job done with acurracy and professionalism, then junicodes is all you got."),l.a.createElement("a",{href:"#"},l.a.createElement("p",{className:"mt-2"},l.a.createElement("small",{className:"testimonial-name"},"Mr Andy Obiefuna "),l.a.createElement("small",{className:"testimonial-company"},"(Founder and CEO Delivery Riders)")))):null),l.a.createElement("div",{className:"col-10 col-md-5 col-lg-6 recommendation-cover"},l.a.createElement("div",{className:"recomendations pl-2 p-0 col-12 row"},l.a.createElement("p",{className:"col-12 pl-3 mt-3 mb-0 p-0"},"Recomendations"),l.a.createElement("div",{className:"link pl-3 col-12 p-0"},l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://www.linkedin.com/company/primedsoft",className:"pr-1 pr-lg-2  a"},"Primesoft"),l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://ndiecodes.github.io",className:"px-1 px-lg-2 b"},"NdieCodes"),l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://www.stakeholderdemocracy.org",className:"px-1 px-lg-2 c"},"SDN"),l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://www.mayowafadairo.com",className:"px-1 px-lg-2 d"},"Mayowa"),l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://hng.tech",className:"px-1 px-lg-2 e"},"HNG")),l.a.createElement("span",{className:"col-12 mt-1 mt-md-3 mt-lg-3 copy-right"},"Copyright \xa9 2020 Junicodes | All rights reserved"))))}}]),t}(n.Component)),g=(t(19),function(e){var a="";return l.a.createElement("div",{className:"showcasemiddle-text-sty-cover animated fadeIn",style:{animationDelay:"0.5s",animationTimingFunction:"linear"}},l.a.createElement("p",{style:{color:"skyblue"}},"Hello, I am"),l.a.createElement("h1",null,"Okechukwu Obi"),l.a.createElement("p",null,"Full-Stack Web and Mobile Developer"),l.a.createElement("button",{onClick:function(t){var n=t.target.dataset.id;clearTimeout(a),a=setTimeout((function(){e.onStartClick(n)}),10)},"data-id":"Contact",className:"mt-2"},"Talk To Me"))}),E=(t(20),function(){return l.a.createElement("div",{className:"junicodesimage-sty-cover"},l.a.createElement("img",{className:"animated fadeIn",style:{height:"70vh",marginLeft:"7vh",filter:"drop-shadow(16px 16px 10px rgba(0,0,0,0.9))"},src:"./images/personal/junicodes.png",alt:"Junicodes"}))}),v=(t(21),function(e){return l.a.createElement("div",{className:"col-12 row m-0 p-0 firstshowcase-sty-cover"},l.a.createElement("div",{className:"col-12 col-lg-7 text-noted"},l.a.createElement(g,{onStartClick:e.onByPassClick})),l.a.createElement("div",{className:"col-5 image-grid"},l.a.createElement(E,null)))}),b=(t(22),t(23),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={imageFlicker:1},e.timer=null,e.changeShowcaseImage=function(){e.state.imageFlicker<3?e.setState({imageFlicker:e.state.imageFlicker+1}):e.setState({imageFlicker:1})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.changeShowcaseImage()}),7e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return l.a.createElement("div",{className:"col-12 showcase-sty-cover"},l.a.createElement(v,{onByPassClick:this.props.onTalkToMeClick}))}}]),t}(n.Component)),k=(t(24),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-sty-cover"},l.a.createElement(b,{onTalkToMeClick:this.props.onTriggerToMeClick}))}}]),t}(n.Component)),f=(t(25),function(){return l.a.createElement("div",{className:"abt-sty-cover"},l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-6 mx-auto"},l.a.createElement("h3",null,"About Me")),l.a.createElement("div",{className:"about-me col-12 col-lg-9 mx-auto mt-3"},l.a.createElement("article",{className:"mt-2 animated fadeIn",style:{animationDelay:"0.1s",animationTimingFunction:"linear"}},"I am an exception Software Developer currently residing in Port Hacourt, Rivers State, Nigeria. i build responsible web apps, scalable APIs and mobile apps using modern technologies. I am passionate in what i do and love to solve problems and that's what led me to tech."),l.a.createElement("article",{className:"mt-3 animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},"I am vast in most modern computer programming language, my core skill are",l.a.createElement("b",{style:{color:"skyblue"}}," HTML"),",",l.a.createElement("b",{style:{color:"skyblue"}}," CSS")," (SASS, Bootrap),",l.a.createElement("b",{style:{color:"skyblue"}}," JAVASCRIPT")," (ES6, ReactJS, NodeJS),",l.a.createElement("b",{style:{color:"skyblue"}}," Php")," (Laravel),",l.a.createElement("b",{style:{color:"skyblue"}}," Mobile")," (React Native, Cordova). I am also experience in",l.a.createElement("b",{style:{color:"skyblue"}}," DBMS")," (MySQL, MongoDB, Firebase),",l.a.createElement("b",{style:{color:"skyblue"}}," NGINX"),",",l.a.createElement("b",{style:{color:"skyblue"}}," Git")," version control,"),l.a.createElement("article",{className:"mt-3 animated fadeIn",style:{animationDelay:"0.3s",animationTimingFunction:"linear"}},"Personally i have completed projects and also worked with different teams, I have been previlege to work at startups and organizations where i handle lead roles to forseen projects to it's finish, My core responsible is to illuminate integrity and transparency in my business."))))}),y=(t(26),function(){return l.a.createElement("div",{className:"services-sty-cover"},l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-6 mx-auto"},l.a.createElement("h3",null,"Services")),l.a.createElement("div",{className:"services"},l.a.createElement("div",{className:"block-1 col-12 col-lg-10 row mx-auto mt-2"},l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Web Development"),l.a.createElement("p",null,"I can completely build a responsible web app using technologies such as",l.a.createElement("b",{style:{color:"skyblue"}}," Laravel "),"or",l.a.createElement("b",{style:{color:"skyblue"}}," NodeJS "),"framework for your Backend APIs and",l.a.createElement("b",{style:{color:"skyblue"}}," HTML/CSS"),",",l.a.createElement("b",{style:{color:"skyblue"}}," ReactJS"),", Vanilla or ",l.a.createElement("b",{style:{color:"skyblue"}}," JavaScript "),"for Frontend.")),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.4s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Mobile Development"),l.a.createElement("p",null,"I use ",l.a.createElement("b",{style:{color:"skyblue"}}," React Native"),"framework to build native mobile app for android and ios, i also convert web app to mobile app for both android and ios using",l.a.createElement("b",{style:{color:"skyblue"}}," Cordova")," framework."))),l.a.createElement("div",{className:"block-2 col-12 col-lg-10 mx-auto row mt-2"},l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.6s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Team/Project Mgt"),l.a.createElement("p",null,"I have the ledership skills for managing your teams and projects, in the past years i have handled small and larger teams and that has built my experience enabling me to mitigate basic and unforeseen errors.")),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.8s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Programming Tutorial"),l.a.createElement("p",null,"I love to teach and i am always ready to educate young aspiring developer's how to code and become successful, i have a youtube channel where i teach solution to various programming problems."))))))}),w=(t(27),function(){return l.a.createElement("div",{className:"portfolio-sty-cover"},l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-6 mx-auto"},l.a.createElement("h3",null,"I Build")),l.a.createElement("div",{className:"ibuild scroller col-12 mt-2 m-0 p-0"},l.a.createElement("div",{className:"block col-11 mx-auto p-0 m-0 row"},l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://developnd.ng",target:"_blank"},l.a.createElement("h5",null,"DevelopND"),l.a.createElement("small",null,"Tech Used: Laravel, HTML, SASS, JavaScript"),l.a.createElement("p",null,"This is a web app that tracks ongoing projects awarded to communities in Niger Delta Region of Nigeria and also create the oppurturnity for community memeber to interact with project owners.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.4s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://gateguard.co",target:"_blank"},l.a.createElement("h5",null,"GateGuard"),l.a.createElement("small",null,"Tech Used: Laravel, Flutter, HTML, CSS, JavaScript"),l.a.createElement("p",null,"This is a security estate management app, it was build as a mobile app that allows user to control thier visitors and also help estates managers to manage there estate bills.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.6s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://ewoma.herokuapp.com",target:"_blank"},l.a.createElement("h5",null,"Ewoma Bot"),l.a.createElement("small",null,"Tech Used: Node.js, Socket.io, JavaScript, Dialog Flow"),l.a.createElement("p",null,"An AI Bot that give information about covid-19 virus from all reliable sources, it also shares web links to get more information.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.8s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://primedpoll.com",target:"_blank"},l.a.createElement("h5",null,"Primedpoll"),l.a.createElement("small",null,"Tech Used: Laravel, HTML, CSS, JavaScript, "),l.a.createElement("p",null,"This is a polling site that allows a user to create and vote a poll."))))))))}),N=(t(28),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).phoneInputRef=Object(n.createRef)(),e.state={},e.contactUs=function(a){a.preventDefault();var t=new FormData(a.target);""===e.phoneInputRef.current.value&&t.set("sender_phone","No Phone");e.sendMail(t)},e.sendMail=function(e){console.log("open server")},e}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-sty-cover"},l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-6 mx-auto"},l.a.createElement("h3",null,"Contact Me")),l.a.createElement("div",{className:"col-10 mx-auto row border mt-3 contact-grid"},l.a.createElement("div",{className:"col-6 border contact-info p-4"},l.a.createElement("p",null,"Email : junicodes@gmail.com"),l.a.createElement("p",null,"Phone : +2347060959269"),l.a.createElement("p",null,"Facebook : ",l.a.createElement("a",{href:"https://web.facebook.com/junicodes",target:"_blank"},"view")),l.a.createElement("p",null,"Github : ",l.a.createElement("a",{href:"https://github.com/junicodes",target:"_blank"},"view")),l.a.createElement("p",null,"LinkedIn : ",l.a.createElement("a",{href:"https://www.linkedin.com/in/okechukwu-obi-746161196/",target:"_blank"},"view")),l.a.createElement("p",null,"Twitter : ",l.a.createElement("a",{href:"https://twitter.com/junicodes",target:"_blank"},"view")),l.a.createElement("p",null,"Instagram : ",l.a.createElement("a",{href:"https://www.instagram.com/junicodes/",target:"_blank"},"view")),l.a.createElement("p",null,"Whatapp : ",l.a.createElement("a",{href:"https://wa.me/+2347060959269",target:"_blank"},"view"))),l.a.createElement("div",{className:"col-6 border contact-form"},l.a.createElement("form",{onSubmit:this.contactUs},l.a.createElement("div",{className:"form-group m-0"},l.a.createElement("label",{htmlFor:"subject"},"Subject"),l.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"eg. Job Offer",required:!0})),l.a.createElement("div",{className:"form-group m-0"},l.a.createElement("label",{htmlFor:"subject"},"Name"),l.a.createElement("input",{type:"name",className:"form-control",name:"sender_name",id:"sender_name",placeholder:"eg. John Doe",required:!0})),l.a.createElement("div",{className:"col-12 row m-0 p-0"},l.a.createElement("div",{className:"form-group col-6 m-0 p-0 pr-1"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",name:"sender_email",id:"sender_email",placeholder:"eg. name@example.com",required:!0})),l.a.createElement("div",{className:"form-group col-6 m-0 p-0 pl-1"},l.a.createElement("label",{htmlFor:"phone"},"Phone"),l.a.createElement("input",{type:"tel",ref:this.phoneInputRef,className:"form-control",name:"sender_phone",id:"sender_phone",placeholder:"eg. +234700******"}),l.a.createElement("i",{style:{fontSize:"1.5vh",color:"#e6e6e6"}},"please note: phone field is not required!"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",name:"message",id:"message",rows:"3",placeholder:"Ttye a message",required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-outline-primary col-3"},"Send"))))))}}]),t}(n.Component)),S=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={current_link:"Home",page:"Home"},e.handleLinkSwitch=function(a){e.setState({page:a}),e.setState({current_link:a})},e}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{onSelectLinkSwitch:this.handleLinkSwitch}),"Home"===this.state.current_link?l.a.createElement(k,{onTriggerToMeClick:this.handleLinkSwitch}):null,"About"===this.state.current_link?l.a.createElement(f,null):null,"Services"===this.state.current_link?l.a.createElement(y,null):null,"Portfolio"===this.state.current_link?l.a.createElement(w,null):null,"Contact"===this.state.current_link?l.a.createElement(N,null):null,l.a.createElement(h,{page:this.state.page}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6bf1702f.chunk.js.map