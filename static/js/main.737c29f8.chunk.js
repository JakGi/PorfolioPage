(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{19:function(e,c,t){},25:function(e,c,t){},26:function(e,c,t){},27:function(e,c,t){},28:function(e,c,t){},29:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(9),i=t.n(a),r=t(3),j=(t(19),t(44)),l=t(45),o=t(0);function d(e){var c=e.menuOpen,t=e.setMenuOpen;return Object(o.jsx)("div",{className:"topbar "+(c&&"active"),children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("a",{href:"#intro",className:"logo",children:"Front-end Developer"}),Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(j.a,{className:"icon"}),Object(o.jsx)("span",{children:"+48-509-225-968"})]}),Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(l.a,{className:"icon"}),Object(o.jsx)("span",{children:"jakubjangala@gmail.com"})]})]}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"hamburger",onClick:function(){return t(!c)},children:[Object(o.jsx)("span",{className:"line1"}),Object(o.jsx)("span",{className:"line2"}),Object(o.jsx)("span",{className:"line3"})]})})]})})}t(25);var b=t(7);function h(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:2e3,strings:["Web Developer!","Front-end Developer!"]})}),[]),Object(o.jsxs)("div",{className:"intro",id:"intro",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("div",{className:"imgContainer",children:Object(o.jsx)("img",{src:"/PorfolioPage/assets/man.png",alt:"porfoliopicture"})})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Hi There, I'm"}),Object(o.jsx)("h1",{children:"Jakub Gala"}),Object(o.jsxs)("h3",{children:["Freelance ",Object(o.jsx)("span",{ref:e})]})]}),Object(o.jsx)("a",{href:"#portfolio",children:Object(o.jsx)("img",{src:"/PorfolioPage/assets/down.png",alt:"down"})})]})]})}t(26);function O(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1e3,strings:["In Progess!"]})}),[]),Object(o.jsx)("div",{className:"portfolio",id:"portfolio",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{ref:e})})})}t(27);function m(){var e=[{id:2,name:"InfoShare Academy",img:"/PorfolioPage/assets/infoshare.png",desc:"Szkolenie obejmowa\u0142o 324 godzin warszatowych w trypie dziennym.Dostarczy\u0142o ono wiedzy i praktycznych umiejetno\u015bci z zakresu : HTML, CSS , SCSS, JS, React, Redux, Firebase, TypeSctipt, Gti, HTTP, Scrum, NodeJS, Webpack, ESlint, Babel, Prettier, Husky.",link:Object(o.jsx)("a",{href:"http://infoshareacademy.com",alt:"infoshare",target:"_blank",rel:"noreferrer",children:"InfoShareAcademy"}),featured:!1}];return Object(o.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(o.jsx)("h1",{children:"Testimonials"}),Object(o.jsx)("div",{className:"container",children:e.map((function(e){return Object(o.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(o.jsx)("div",{className:"top",children:Object(o.jsx)("img",{className:"user",src:e.img,alt:""})}),Object(o.jsx)("div",{className:"center",children:e.desc}),Object(o.jsxs)("div",{className:"bottom",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("h4",{children:e.link})]})]})}))})]})}var u=t(11);t(28);function x(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],n=c[1];return Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("img",{src:"/PorfolioPage/assets/shake.svg",alt:"handshake"})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h2",{children:"Contact."}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.sendForm("service_ttaudwr","template_52c09ff",e.target,"user_BhX207N6r6qiRvXJq4Sxq").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),n(!0),e.target.reset()},children:[Object(o.jsx)("input",{type:"text",placeholder:"Email",name:"from_name"}),Object(o.jsx)("textarea",{name:"message",placeholder:"Message"}),Object(o.jsx)("button",{type:"submit",children:"Send"}),t&&Object(o.jsx)("span",{children:"Thanks, I'll reply ASAP"})]})]})]})}t(29),t(30);function f(e){var c=e.menuOpen,t=e.setMenuOpen;return Object(o.jsx)("div",{className:"menu "+(c&&"active"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#intro",children:"Home"})}),Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(o.jsx)("li",{onClick:function(){return t(!1)},children:Object(o.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var p=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],n=c[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(d,{menuOpen:t,setMenuOpen:n}),Object(o.jsx)(f,{menuOpen:t,setMenuOpen:n}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)(h,{}),Object(o.jsx)(O,{}),Object(o.jsx)(m,{}),Object(o.jsx)(x,{})]})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.737c29f8.chunk.js.map