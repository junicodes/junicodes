(this.webpackJsonpjunicodesweb=this.webpackJsonpjunicodesweb||[]).push([[0],[,,,,,,function(e,a,t){},,,,function(e,a,t){},,,function(e,a,t){e.exports=t(35)},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(11),c=t.n(o),i=(t(18),t(19),t(7)),r=t.n(i),s=t(12),m=t(5),d=(t(21),function(e){var a=e.style,t=function(e){console.log(e.target);var a=e.target.dataset.link;console.log(a),window.open(a,"_blank")};return l.a.createElement("div",{className:"socialmedia-nav-sty-cover",style:a},l.a.createElement("h5",null,"Connect"),l.a.createElement("div",{className:"social"},l.a.createElement("div",{onClick:t,className:"facebook"},l.a.createElement("span",{className:"mt-2 social-name"},"facebook"),l.a.createElement("img",{"data-link":"https://web.facebook.com/junicodes",className:"m-1",src:"/images/social/facebook.svg",alt:"facebook"})),l.a.createElement("div",{onClick:t,className:"github"},l.a.createElement("span",{className:"mt-2 social-name"},"github"),l.a.createElement("img",{"data-link":"https://github.com/junicodes",className:"m-1",src:"/images/social/github.svg",alt:"github"})),l.a.createElement("div",{onClick:t,className:"twitter"},l.a.createElement("span",{className:"mt-2 social-name"},"twitter"),l.a.createElement("img",{"data-link":"https://twitter.com/junicodes",className:"m-1",src:"/images/social/twitter.svg",alt:"twitter"})),l.a.createElement("div",{onClick:t,className:"linkedIn"},l.a.createElement("span",{className:"mt-2 social-name"},"linkedIn"),l.a.createElement("img",{"data-link":"https://linkedin.com/in/okechukwu-obi-746161196",className:"m-1",src:"/images/social/linkedin.svg",alt:"linkedIn"})),l.a.createElement("div",{onClick:t,className:"instagram"},l.a.createElement("span",{className:"mt-2 social-name"},"instagram"),l.a.createElement("img",{"data-link":"https://www.instagram.com/junicodes",className:"m-1",src:"/images/social/instagram.svg",alt:"instagram"})),l.a.createElement("div",{onClick:t,className:"whatsapp"},l.a.createElement("span",{className:"mt-2 social-name"},"whatsapp"),l.a.createElement("img",{"data-link":"https://wa.me/+2347060959269",className:"m-1",src:"/images/social/whatsapp.svg",alt:"whatap"}))))}),u=(t(22),t(8)),p=Object(n.createContext)(),h=Object(n.createContext)(),E={page:"Home"},g=function(e,a){switch(a.type){case"CURRENT_PAGE":return E=Object(u.a)(Object(u.a)({},e),{},{page:a.payload});default:throw new Error("Unknown action: ".concat(a.type))}};function f(e){var a=e.children,t=Object(n.useReducer)(g,E),o=Object(m.a)(t,2),c=o[0],i=o[1];return l.a.createElement(h.Provider,{value:i},l.a.createElement(p.Provider,{value:c},a))}var v=function(){return Object(n.useContext)(p)},b=function(){return Object(n.useContext)(h)},y=function(e){var a=e.onSelectMobileLinkSwitch,t=(v(),b(),Object(n.useState)("Home")),o=Object(m.a)(t,2),c=(o[0],o[1],function(){document.querySelector("#burger").classList.toggle("is-open"),document.querySelector("#main-nav").classList.toggle("is-open")}),i=function(e){var t=e.target.dataset.id;Array.from(document.querySelectorAll(".main-nav .mobile-links")).map((function(e){e.style.color="white"})),e.target.style.color="#e83e8c",c(),a(t)};return l.a.createElement("div",{className:"mobilemenu-sty-cover"},l.a.createElement("button",{onClick:c,id:"burger",className:"open-main-nav"},l.a.createElement("span",{className:"burger"}),l.a.createElement("span",{className:"burger-text"},"Menu")),l.a.createElement("nav",{className:"main-nav",id:"main-nav"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:i},l.a.createElement("span",{"data-id":"Home",className:"mobile-links mobile-home"},"Home")),l.a.createElement("li",{onClick:i},l.a.createElement("span",{"data-id":"About",className:"mobile-links"},"About")),l.a.createElement("li",{onClick:i},l.a.createElement("span",{"data-id":"Services",className:"mobile-links"},"Services")),l.a.createElement("li",{onClick:i},l.a.createElement("span",{"data-id":"Portfolio",className:"mobile-links"},"Portfolio"))),l.a.createElement("div",{className:"header-socialmedia-nav-mobile"},l.a.createElement(d,{style:{zIndex:100,width:"100%"}}))))},k=(t(23),function(e){var a=e.onSelectLinkSwitch,t=v(),o=(b(),Object(n.useState)(!1)),c=Object(m.a)(o,2),i=c[0],u=c[1];Object(n.useEffect)((function(){var e=window.matchMedia("(max-width: 768px)");E(e),e.addListener(E)}),[i]);var p=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),a(t);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(e){var t=e.target.dataset.id;Array.from(document.querySelectorAll(".laptop-links")).map((function(e){e.classList.contains("color-tweak")&&e.classList.remove("color-tweak")})),e.target.classList.add("color-tweak"),a(t)},E=function(e){e.matches?u(!0):u(!1)};return console.log(t),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header-sty-cover"},l.a.createElement("div",{className:"col-12 mx-0 px-0 row"},l.a.createElement("div",{className:"col-8 col-md-3 text-left header-logo"},l.a.createElement("a",{href:"/"},l.a.createElement("code",null,l.a.createElement("span",null,"\u2149"),"uni\u030acodes"))),i?l.a.createElement(y,{onSelectMobileLinkSwitch:p}):l.a.createElement("div",{className:"col-9 header-link"},l.a.createElement("ul",{className:"list-group list-group-horizontal"},l.a.createElement("li",{onClick:h,"data-id":"Home",className:"list-group-item laptop-links color-tweak"},"Home"),l.a.createElement("li",{onClick:h,"data-id":"About",className:"list-group-item laptop-links"},"About"),l.a.createElement("li",{onClick:h,"data-id":"Services",className:"list-group-item laptop-links"},"Services"),l.a.createElement("li",{onClick:h,"data-id":"Portfolio",className:"list-group-item laptop-links"},"Portfolio"))))),"Home"===t.page&&l.a.createElement("div",{className:"header-socialmedia-nav"},l.a.createElement(d,null)))}),w=t(1),N=t(2),S=t(4),j=t(3),T=(t(6),t(24),function(e){Object(S.a)(t,e);var a=Object(j.a)(t);function t(){var e;Object(w.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={testimonialFlicker:1},e.timer=null,e.slideTestimonials=function(){e.state.testimonialFlicker<3?e.setState({testimonialFlicker:e.state.testimonialFlicker+1}):e.setState({testimonialFlicker:1})},e.openRecomendation=function(e){var a=e.target.dataset.link;window.open(a,"_blank")},e}return Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.slideTestimonials()}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return l.a.createElement("div",{className:"footer-sty-cover col-12 row mx-0 px-0"},l.a.createElement("div",{className:"col-1 col-md-1 page-number"},"Home"===this.props.page?l.a.createElement("h1",null,"1"):null,"About"===this.props.page?l.a.createElement("h1",null,"2"):null,"Services"===this.props.page?l.a.createElement("h1",null,"3"):null,"Portfolio"===this.props.page?l.a.createElement("h1",null,"4"):null,"Contact"===this.props.page?l.a.createElement("h1",null,"5"):null),l.a.createElement("div",{className:"col-md-5 testimonials p-0"},1===this.state.testimonialFlicker?l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("blockquote",{className:"testionial-text"},l.a.createElement("span",null,"I")," am well pleased in working with Mr Okechukwu, he is passionate and excellent in what he does, most importantly he make sure to get the job done."),l.a.createElement("a",{href:"https://www.linkedin.com/in/realdekings/"},l.a.createElement("p",{className:"mt-2"},l.a.createElement("small",{className:"testimonial-name"},"Mr Kingsley Ihemere "),l.a.createElement("small",{className:"testimonial-company"},"(Founder and CEO Primesoft Limited)")))):null,2===this.state.testimonialFlicker?l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("blockquote",{className:"testionial-text"},l.a.createElement("span",null,"He")," is a goal getter and always ready to learn new technology to get the task done, he is exceptional in his own ways."),l.a.createElement("a",{href:"https://www.linkedin.com/in/frank-eluaka/"},l.a.createElement("p",{className:"mt-2"},l.a.createElement("small",{className:"testimonial-name"},"Frank Eluaka "),l.a.createElement("small",{className:"testimonial-company"},"(Senior Strategy Manager Heckerbella Limited)")))):null,3===this.state.testimonialFlicker?l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement("blockquote",{className:"testionial-text"},l.a.createElement("span",null,"If")," the aim is getting your product completely done job with acurracy and attention to details, then he is the man for the job, I recommend him anytime."),l.a.createElement("a",{href:"https://www.linkedin.com/in/oluwamayowa-fadairo-6460b282/"},l.a.createElement("p",{className:"mt-2"},l.a.createElement("small",{className:"testimonial-name"},"Oluwamayowa Fadairo "),l.a.createElement("small",{className:"testimonial-company"},"(Software Engineer at Tracksend)")))):null),l.a.createElement("div",{className:"col-11 col-md-6 recommendation-cover mr-10"},l.a.createElement("div",{className:"recomendations m-0 col-12 row"},l.a.createElement("p",{className:"col-12 mb-0 p-0",style:{color:"#e83e8c"}},"Recomendations"),l.a.createElement("div",{className:"link col-12 p-0"},l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://www.linkedin.com/company/heckerbella-limited/",className:"px-1 a"},"Heckerbella"),l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://www.linkedin.com/in/ndiecodes/",className:"px-1 b"},"NdieCodes"),l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://www.linkedin.com/in/oluwamayowa-fadairo-6460b282/",className:"px-1 c"},"Oluwamayowa Fadairo"),l.a.createElement("span",{onClick:this.openRecomendation,"data-link":"https://www.linkedin.com/company/primedsoft",className:"pl-1 d"},"Primesoft")),l.a.createElement("span",{className:"col-12 mt-1 mt-md-2 mt-lg-2 p-0 copy-right"},"Copyright \xa9 2021 Junicodes | All rights reserved"))))}}]),t}(n.Component)),I=(t(25),function(e){return l.a.createElement("div",{className:"showcasemiddle-text-sty-cover animated fadeIn",style:{animationDelay:"0.5s",animationTimingFunction:"linear"}},l.a.createElement("p",{style:{color:"skyblue"}},"Hello, I am"),l.a.createElement("h1",null,"Okechukwu Obi"),l.a.createElement("p",{className:"title"},"Full-Stack Web and Mobile Developer"),l.a.createElement("button",{onClick:function(e){var a=e.target.dataset.pdf,t=document.createElement("a");t.href=a,t.download="okechukwu_obi_resume.pdf",t.dispatchEvent(new MouseEvent("click"))},className:"","data-pdf":"/images/personal/resume.pdf"},"Download Resume"))}),x=(t(26),function(){return l.a.createElement("div",{className:"junicodesimage-sty-cover"},l.a.createElement("img",{className:"animated fadeIn junicodes_img",src:"/images/personal/junicodes_official_cut.png",alt:"Junicodes"}),l.a.createElement("style",{jsx:!0},"\n                    .junicodes_img {\n                        height: 65vh;\n                        margin-left: 5vh;\n                        margin-top: -70px;\n                        filter: 'drop-shadow(5px 16px 10px rgba(0,0,0,0.9))';\n                    }\n                    @media screen and (max-width: 1200px) {\n                        .junicodes_img {\n                            height: 60vh;\n                        }\n                    }\n                "))}),C=(t(27),function(e){return l.a.createElement("div",{className:"col-12 row m-0 p-0 firstshowcase-sty-cover"},l.a.createElement("div",{className:"col-12 mx-auto col-lg-7 text-noted"},l.a.createElement(I,{onStartClick:e.onByPassClick})),l.a.createElement("div",{className:"col-lg-5 image-grid"},l.a.createElement(x,null)))}),F=(t(28),function(e){Object(S.a)(t,e);var a=Object(j.a)(t);function t(){var e;Object(w.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={imageFlicker:1},e.timer=null,e}return Object(N.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-12 showcase-sty-cover"},l.a.createElement(C,{onByPassClick:this.props.onTalkToMeClick}))}}]),t}(n.Component)),O=(t(29),function(e){Object(S.a)(t,e);var a=Object(j.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-sty-cover"},l.a.createElement(F,{onTalkToMeClick:this.props.onTriggerToMeClick}))}}]),t}(n.Component)),M=(t(30),function(){return l.a.createElement("div",{className:"abt-sty-cover"},l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-6 mx-auto"},l.a.createElement("h3",null,"About Me")),l.a.createElement("div",{className:"about-me col-12 col-lg-9 mx-auto mt-3"},l.a.createElement("article",{className:"mt-2 animated fadeIn",style:{animationDelay:"0.1s",animationTimingFunction:"linear"}},"I am an experienced Software Developer currently residing at Ajah Lagos Island, Lagos, Nigeria. I build responsive web apps, scalable APIs and mobile apps using modern technologies. my curiosity on how the internet works led me to technology."),l.a.createElement("article",{className:"mt-3 animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},"My core programming skills are",l.a.createElement("b",{style:{color:"skyblue"}}," HTML"),",",l.a.createElement("b",{style:{color:"skyblue"}}," CSS")," (SASS, Boostrap),",l.a.createElement("b",{style:{color:"skyblue"}}," JAVASCRIPT")," (ES6, ReactJS, NodeJS),",l.a.createElement("b",{style:{color:"skyblue"}}," Php")," (Laravel),",l.a.createElement("b",{style:{color:"skyblue"}}," Mobile")," (React Native). I am also experienced in",l.a.createElement("b",{style:{color:"skyblue"}}," DBMS")," (MySQL, MongoDB, Firebase, Google Cloud, Digital Ocean),",l.a.createElement("b",{style:{color:"skyblue"}}," NGINX"),", configuration",l.a.createElement("b",{style:{color:"skyblue"}}," Git")," version control,"),l.a.createElement("article",{className:"mt-3 animated fadeIn",style:{animationDelay:"0.3s",animationTimingFunction:"linear"}},"I am a team player and a goal-getter, I have solved major programming problems with different organizations, transparency and integrity is the key to my business success, i have a drive that keeps me going",l.a.createElement("span",{style:{color:"#e83e8c"}},' "If someone has done it, then i can do better"'),"."))))}),A=(t(31),function(){return l.a.createElement("div",{className:"services-sty-cover"},l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-6 mx-auto"},l.a.createElement("h3",null,"Services")),l.a.createElement("div",{className:"services"},l.a.createElement("div",{className:"block-1 col-12 col-lg-10 row mx-auto mt-2"},l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Web Development"),l.a.createElement("p",null,"I can build a responsive web app using modern web technologies such as",l.a.createElement("b",{style:{color:"skyblue"}}," Laravel "),"or",l.a.createElement("b",{style:{color:"skyblue"}}," NodeJS "),"framework for Backend APIs and",l.a.createElement("b",{style:{color:"skyblue"}}," HTML/CSS"),",",l.a.createElement("b",{style:{color:"skyblue"}}," ReactJS (Next.js framework)"),", Vanilla",l.a.createElement("b",{style:{color:"skyblue"}}," JavaScript "),"for Frontend design and programming.")),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.4s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Mobile Development"),l.a.createElement("p",null,"I use ",l.a.createElement("b",{style:{color:"skyblue"}}," React Native "),"framework to build native mobile app for android and ios application."))),l.a.createElement("div",{className:"block-2 col-12 col-lg-10 mx-auto row mt-2"},l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.6s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Team Management"),l.a.createElement("p",null,"I have the leadership skills for managing a software team, in the past years I have handled different teams and that has broadened my experience as a Software Engineer, this has enabled me to mitigate unforeseen errors.")),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.8s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Programming Tutorial"),l.a.createElement("p",null,"I love to teach and I am always ready to educate young aspiring developers on how to code and become successful, I have a youtube channel where i teach solution to various programming problems.")),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 mx-auto animated fadeIn",style:{animationDelay:"0.8s",animationTimingFunction:"linear"}},l.a.createElement("h5",null,"Others Specialties"),l.a.createElement("p",null,"I have quite an extent of knowlegde in other neccessary skillset, such as:",l.a.createElement("b",{style:{color:"skyblue"}}," Devops"),", ",l.a.createElement("b",{style:{color:"skyblue"}}," Git Control"),",",l.a.createElement("b",{style:{color:"skyblue"}}," Git Hub Management"),", ",l.a.createElement("b",{style:{color:"skyblue"}}," Docker"),",",l.a.createElement("b",{style:{color:"skyblue"}}," Linux "),", ",l.a.createElement("b",{style:{color:"skyblue"}}," NGINX"),l.a.createElement("b",{style:{color:"skyblue"}}," Database Design (Mysql, MongoDB) "),", I use them mostly on my daily task and it has made my workflow better and faster."))))))}),D=(t(10),t(32),function(){return l.a.createElement("div",{className:"portfolio-sty-cover"},l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-6 mx-auto"},l.a.createElement("h3",null,"I Build")),l.a.createElement("div",{className:"ibuild scroller col-12 mt-2 m-0 p-0"},l.a.createElement("div",{className:"block col-11 mx-auto p-0 m-0 row"},l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://sifuse.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,"Sifuse"),l.a.createElement("p",null,l.a.createElement("small",null,"Tech Used: Laravel, React.js, Next.js, Tailwind, NGINX, SASS, JavaScript")),l.a.createElement("p",null,"This is a web app that connects startups and investors, it provides a matching algorithm to enables a startup more eligible for a posible investment.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://dantownms.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,"Dantown"),l.a.createElement("p",null,l.a.createElement("small",null,"Tech Used: Laravel, React.js, Next.js, Flutter, Tailwind, NGINX, SASS, JavaScript")),l.a.createElement("p",null,"A peer to peer web application that enables traders buy and exchange thier digital assets.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://hchc.com.ng/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,"Hope Clinic"),l.a.createElement("p",null,l.a.createElement("small",null,"Tech Used: Laravel, React.js, Next.js, Flutter, Tailwind, NGINX, SASS, JavaScript")),l.a.createElement("p",null,"This is a health app that enable client schedule an appointment to see a doctor, it also track patient medical records and notify.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://lighthousepolytechnic.edu.ng/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,"Lighthouse Polytechnic"),l.a.createElement("p",null,l.a.createElement("small",null,"Tech Used: Laravel, React.js, Next.js, Tailwind, NGINX, SASS, JavaScript")),l.a.createElement("p",null,"This web app provides compresive and dynamic management system for a private polytechnic to ease their daily educational activities.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://hostels.unizik.edu.ng/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,"Hostel Unizik"),l.a.createElement("p",null,l.a.createElement("small",null,"Tech Used: Laravel, HTML, CSS, SASS, JavaScript")),l.a.createElement("p",null,"This a univeristy web and mobile app that control hostel funtional facilities.")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.2s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://brostglobal.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,"Brost Global"),l.a.createElement("p",null,l.a.createElement("small",null,"Tech Used: Laravel, HTML, SASS, JavaScript")),l.a.createElement("p",null,"This is a Real estate website to buy landed properties")))),l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"build-show animated fadeIn",style:{animationDelay:"0.6s",animationTimingFunction:"linear"}},l.a.createElement("a",{href:"https://ewoma.herokuapp.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,"Ewoma Bot"),l.a.createElement("p",null,l.a.createElement("small",null,"Tech Used: Node.js, Socket.io, JavaScript, Dialog Flow")),l.a.createElement("p",null,"An AI Bot that give information about covid-19 virus from all reliable sources, it also shares web links to get more information."))))))))}),L=(t(33),function(e){var a=null;return l.a.createElement("div",{className:"modal-sty"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"modal-title"},l.a.createElement("h5",null,e.title)),l.a.createElement("div",{className:"modal-middle"},l.a.createElement("p",null,e.info)),l.a.createElement("div",{className:"modal-footer m-0 p-1"},l.a.createElement("button",{onClick:function(t){clearTimeout(a),a=setTimeout((function(){e.onSelectModal(!1)}),200)},type:"submit",className:"btn btn-outline-primary col-6 col-md-4 col-lg-3"},"Close"))))}),R=(t(34),function(e){Object(S.a)(t,e);var a=Object(j.a)(t);function t(){var e;Object(w.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).phoneInputRef=Object(n.createRef)(),e.state={modalTrigger:!1,modalTitle:"Contact Successful",modalInfo:"Thank you for successfully contacting me, i will reach back to you in no time."},e.contactUs=function(a){a.preventDefault(),document.querySelector("#contact-btn").innerHTML='\n          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n         ';var t=new FormData(a.target);""===e.phoneInputRef.current.value&&t.set("sender_phone","No Phone Specified"),e.sendMail(t,a.target)},e.sendMail=function(a,t){console.log("open server"),fetch("https://junicodes-server.herokuapp.com/api/mail",{method:"POST",mode:"cors",body:a}).then((function(e){return e.json()})).then((function(a){console.log(a),"Mail Sent"===a.success&&(document.querySelector("#contact-btn").innerHTML="Send",t.reset(),e.setState({modalTrigger:!0}))})).catch((function(e){return console.log(e)}))},e.handleModalTrigger=function(a){e.setState({modalTrigger:a})},e.openSocial=function(e){var a=e.target.dataset.url;window.open(a,"_blank")},e}return Object(N.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-sty-cover"},this.state.modalTrigger?l.a.createElement(L,{onSelectModal:this.handleModalTrigger,title:this.state.modalTitle,info:this.state.modalInfo}):null,l.a.createElement("div",{className:"col-12 animated fadeIn"},l.a.createElement("div",{className:"heading col-12 col-lg-6 mx-auto"},l.a.createElement("h3",null,"Contact Me")),l.a.createElement("div",{className:"col-12 col-md-10 col-lg-10 mx-auto row mt-3 p-0 contact-grid scroller"},l.a.createElement("div",{className:"col-12 mx-auto col-lg-6 row contact-info p-lg-4"},l.a.createElement("div",{className:"col-8 m-0 p-0"},l.a.createElement("p",null,"Email : junicodes@gmail.com"),l.a.createElement("p",null,"Phone : +2347060959269"),l.a.createElement("p",null,"Facebook : ",l.a.createElement("span",{onClick:this.openSocial,"data-url":"https://web.facebook.com/junicodes"},"open")),l.a.createElement("p",null,"Github :   ",l.a.createElement("span",{onClick:this.openSocial,"data-url":"https://github.com/junicodes"},"open"))),l.a.createElement("div",{className:"col-4 m-0 p-0"},l.a.createElement("p",null,"LinkedIn :  ",l.a.createElement("span",{onClick:this.openSocial,"data-url":"https://www.linkedin.com/in/okechukwu-obi-746161196/"},"open")),l.a.createElement("p",null,"Twitter :   ",l.a.createElement("span",{onClick:this.openSocial,"data-url":"https://twitter.com/junicodes"},"open")),l.a.createElement("p",null,"Instagram : ",l.a.createElement("span",{onClick:this.openSocial,"data-url":"https://www.instagram.com/junicodes/"},"open")),l.a.createElement("p",null,"Whatapp :   ",l.a.createElement("span",{onClick:this.openSocial,"data-url":"https://wa.me/+2347060959269"},"open")))),l.a.createElement("div",{className:"col-12 mx-auto col-lg-6 contact-form"},l.a.createElement("form",{onSubmit:this.contactUs},l.a.createElement("div",{className:"form-group m-0"},l.a.createElement("label",{htmlFor:"subject"},"Subject",l.a.createElement("span",{style:{color:"red"}}," *")),l.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"eg. Job Offer, Coding Tutorial",required:!0})),l.a.createElement("div",{className:"form-group m-0"},l.a.createElement("label",{htmlFor:"subject"},"Name ",l.a.createElement("span",{style:{color:"red"}}," *")),l.a.createElement("input",{type:"name",className:"form-control",name:"name",id:"sender_name",placeholder:"eg. John Doe",required:!0})),l.a.createElement("div",{className:"col-12 row m-0 p-0"},l.a.createElement("div",{className:"form-group col-6 m-0 p-0 pr-1"},l.a.createElement("label",{htmlFor:"email"},"Email address ",l.a.createElement("span",{style:{color:"red"}}," *")),l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"sender_email",placeholder:"eg. name@example.com",required:!0})),l.a.createElement("div",{className:"form-group col-6 m-0 p-0 pl-1"},l.a.createElement("label",{htmlFor:"phone"},"Phone"),l.a.createElement("input",{type:"tel",ref:this.phoneInputRef,className:"form-control",name:"phone",id:"sender_phone",placeholder:"eg. +234700******"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message ",l.a.createElement("span",{style:{color:"red"}}," *")),l.a.createElement("textarea",{className:"form-control",name:"message",id:"message",rows:"3",placeholder:"Type a message",required:!0})),l.a.createElement("button",{type:"submit",id:"contact-btn",className:"btn btn-outline-primary col-12 col-md-4 col-lg-3"},"Send"))))))}}]),t}(n.Component)),P=function(){var e=v(),a=b(),t=e.page;console.log(e);var n=function(e){console.log(e),a({type:"CURRENT_PAGE",payload:e})};return l.a.createElement("div",{className:"app-container"},l.a.createElement(k,{onSelectLinkSwitch:n}),"Home"===t?l.a.createElement(O,{onTriggerToMeClick:n}):null,"About"===t?l.a.createElement(M,null):null,"Services"===t?l.a.createElement(A,null):null,"Portfolio"===t?l.a.createElement(D,null):null,"Contact"===t?l.a.createElement(R,null):null,l.a.createElement(T,{page:t}))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null,l.a.createElement(P,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");_?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(a,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.f3347410.chunk.js.map