_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{ALdH:function(e,a,l){"use strict";l.r(a);var t=l("q1tI"),n=l.n(t),s=l("SxW8"),c=l("Ix5F"),o=n.a.createElement,r=function(){return o("div",{className:"contact-info-area"},o("div",{className:"container-fluid"},o("div",{className:"row"},o("div",{className:"col-lg-3 p-0"},o("div",{className:"single-contact-info"},o("i",{className:"bx bx-location-plus"}),o("h3",null,"New York"),o("p",null,"88 Flower Avenue, Kingdom St, New York"),o("span",null,"Email: hello@corf.com"),o("span",null,"Tel: +822456974"))),o("div",{className:"col-lg-3 p-0"},o("div",{className:"single-contact-map"},o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1588019781257!5m2!1sen!2sbd"}))),o("div",{className:"col-lg-3 p-0"},o("div",{className:"single-contact-info"},o("i",{className:"bx bx-location-plus"}),o("h3",null,"Australia"),o("p",null,"123, Western Road, Melbourne Australia"),o("span",null,"Email: hello@corf.com"),o("span",null,"Tel: +822456975"))),o("div",{className:"col-lg-3 p-0"},o("div",{className:"single-contact-map"},o("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29624007.58460168!2d115.2297986315677!3d-24.992915938390162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sbd!4v1588020297752!5m2!1sen!2sbd"}))))))},i=l("dWfc"),m=l("Wf2E"),u=l("mdYk"),d=n.a.createElement;a.default=function(){return d(n.a.Fragment,null,d(s.a,null),d(c.a,{pageTitle:"Contact",homePageUrl:"/",homePageText:"Home",activePageText:"Contact",imgClass:"bg-1"}),d(r,null),d(i.a,null),d(m.a,null),d(u.a,null))}},Ix5F:function(e,a,l){"use strict";var t=l("q1tI"),n=l.n(t),s=l("YFqc"),c=l.n(s),o=n.a.createElement;a.a=function(e){var a=e.pageTitle,l=e.homePageUrl,t=e.homePageText,n=e.activePageText,s=e.imgClass;return o("div",{className:"page-title-area ".concat(s)},o("div",{className:"d-table"},o("div",{className:"d-table-cell"},o("div",{className:"container"},o("div",{className:"page-title-content"},o("h2",null,a),o("ul",null,o("li",null,o(c.a,{href:l},o("a",null,t))),o("li",{className:"active"},n)))))))}},dWfc:function(e,a,l){"use strict";var t=l("o0o1"),n=l.n(t),s=l("HaE+"),c=l("rePB"),o=l("q1tI"),r=l.n(o),i=l("NKCw"),m=l("vDqi"),u=l.n(m),d=l("PSD3"),p=l.n(d),b=l("2BYM"),f=l.n(b),v=l("rjN7"),g=r.a.createElement;function N(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function h(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?N(Object(l),!0).forEach((function(a){Object(c.a)(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):N(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}var w=f()(p.a),y={name:"",email:"",number:"",subject:"",text:""};a.a=function(){var e=Object(o.useState)(y),a=e[0],l=e[1],t=Object(i.a)(),r=t.register,m=t.handleSubmit,d=t.errors,p=function(e){var t=e.target,n=t.name,s=t.value;l((function(e){return h(h({},e),{},Object(c.a)({},n,s))})),console.log(a)},b=function(){var e=Object(s.a)(n.a.mark((function e(t){var s,c,o,r,i,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="".concat(v.a,"/api/contact"),c=a.name,o=a.email,r=a.number,i=a.subject,m=a.text,d={name:c,email:o,number:r,subject:i,text:m},e.next=6,u.a.post(s,d);case 6:console.log(s),l(y),w.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}();return g("div",{className:"main-contact-area contact ptb-100"},g("div",{className:"container"},g("div",{className:"section-title"},g("span",{className:"top-title"},"Contact Us"),g("h2",null,"Drop us a message for any query"),g("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam.")),g("div",{className:"contact-wrap contact-pages mb-0"},g("div",{className:"contact-form"},g("form",{id:"contactForm",onSubmit:m(b)},g("div",{className:"row"},g("div",{className:"col-lg-6 col-md-6"},g("div",{className:"form-group"},g("label",null,"Name"),g("input",{type:"text",name:"name",className:"form-control",placeholder:"Your Name",value:a.name,onChange:p,ref:r({required:!0})}),g("div",{className:"invalid-feedback",style:{display:"block"}},d.name&&"Name is required."))),g("div",{className:"col-lg-6 col-md-6"},g("div",{className:"form-group"},g("label",null,"Email"),g("input",{type:"text",name:"email",className:"form-control",placeholder:"Your Email",value:a.email,onChange:p,ref:r({required:!0,pattern:/^\S+@\S+$/i})}),g("div",{className:"invalid-feedback",style:{display:"block"}},d.email&&"Email is required."))),g("div",{className:"col-lg-6 col-md-6"},g("div",{className:"form-group"},g("label",null,"Phone"),g("input",{type:"text",name:"number",className:"form-control",placeholder:"Your Phone",value:a.number,onChange:p,ref:r({required:!0})}),g("div",{className:"invalid-feedback",style:{display:"block"}},d.number&&"Number is required."))),g("div",{className:"col-lg-6 col-md-6"},g("div",{className:"form-group"},g("label",null,"Subject"),g("input",{type:"text",name:"subject",className:"form-control",placeholder:"Your Subject",value:a.subject,onChange:p,ref:r({required:!0})}),g("div",{className:"invalid-feedback",style:{display:"block"}},d.subject&&"Subject is required."))),g("div",{className:"col-lg-12 col-md-12"},g("div",{className:"form-group"},g("label",null,"Message"),g("textarea",{name:"text",className:"form-control",cols:"30",rows:"5",placeholder:"Your Message",value:a.text,onChange:p,ref:r({required:!0})}),g("div",{className:"invalid-feedback",style:{display:"block"}},d.text&&"Text body is required."))),g("div",{className:"col-lg-6 col-sm-6"},g("div",{className:"contact-num"},g("h3",null,"For Emergency"),g("span",null,g("a",{href:"tel:+442-456a-789"},"+442-456a-789")))),g("div",{className:"col-lg-6 col-sm-6"},g("button",{type:"submit",className:"default-btn btn-two"},"Send Message"))))))))}},lqnA:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return l("ALdH")}])}},[["lqnA",0,1,2,3,9]]]);