(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),n=c(16),s=c.n(n),r=c(14),l=(c(22),c(7)),j=c(2),o=(c(23),c(0)),d=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("nav",{className:"header__navbar",children:[Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("h1",{className:"navbar__logo",children:"Tombola"})}),Object(o.jsxs)("ul",{className:"nav-list",children:[Object(o.jsx)(l.b,{to:"/about",children:Object(o.jsx)("li",{className:"nav-list__links nav-list__links--left",children:"About"})}),Object(o.jsx)(l.b,{to:"/activity",children:Object(o.jsx)("li",{className:"nav-list__links nav-list__links--right",children:"Activity"})})]})]})})},h=(c(30),function(){return Object(o.jsx)("main",{className:"main-content",children:Object(o.jsxs)("section",{className:"main-container--about-page",children:[Object(o.jsx)("h1",{className:"header__about",children:"About Tombola"}),Object(o.jsx)("p",{className:"header__about-paragraph",children:"Inspiration page to find fun activites"}),Object(o.jsx)("article",{className:"info-box",children:Object(o.jsx)("table",{className:"info-table",children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"th--bold",children:"What?"}),Object(o.jsx)("th",{className:"th--bold",children:"Description"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Possibility"}),Object(o.jsx)("td",{children:"A percentage describing how possible an event is with 100% being the most accessible"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Price"}),Object(o.jsx)("td",{children:"A factor describing the cost of the event ranging from free to $$$"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Participants"}),Object(o.jsx)("td",{children:"The number of people that this activity could involve"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Type"}),Object(o.jsxs)("td",{children:[" Type of activity",Object(o.jsx)("i",{children:" education, recreational, social, diy, charity, cooking, relaxation, music, busywork"})]})]})]})})})]})})}),b=(c(31),function(e){var t=e.getData,c=e.participants,i=Object(j.f)();return Object(o.jsx)("button",{className:"btn btn-get-activity",onClick:function(){i.push("/activity"),t(c||"random")},children:"Get Activity"})}),x=(c(32),function(e){var t=e.activity,c=e.getData,i=e.isLoading,a=function(e){return Math.round(100*(1-e))}(t.accessibility);return i?Object(o.jsx)("main",{className:"main-content--activity-page",children:Object(o.jsxs)("div",{className:"loading-card",children:[" ",Object(o.jsx)("h1",{children:"Loading activity, please wait"})]})}):Object(o.jsxs)("main",{className:"main-content--activity-page",children:[Object(o.jsx)("h1",{className:"header__activity",children:"Activity Generator"}),t.error?Object(o.jsxs)("div",{className:"error-card",children:[" ",Object(o.jsx)("h1",{children:"Sorry, Couldn't get your activity. Please try again"})]}):Object(o.jsxs)("section",{className:"activity-card",children:[Object(o.jsxs)("article",{className:"activity-card__header",children:[Object(o.jsx)("h2",{className:"activity-card__heading",children:t.activity}),Object(o.jsxs)("p",{className:"card__info__type",children:["Type: ",t.type]})]}),Object(o.jsxs)("article",{className:"activity-card__info",children:[Object(o.jsxs)("div",{className:"card__info",children:[Object(o.jsxs)("p",{className:"card__info--circle",children:[a,"%"]}),Object(o.jsx)("p",{className:"card__info__text",children:" Possibility to do"})]}),Object(o.jsxs)("div",{className:"card__info",children:[0===t.price&&Object(o.jsx)("p",{className:"card__info--circle",children:"Free"}),t.price>0&&t.price<=.33&&Object(o.jsx)("p",{className:"card__info--circle",children:"$"}),t.price>=.34&&t.price<=.66&&Object(o.jsx)("p",{className:"card__info--circle",children:"$"}),t.price>=.64&&Object(o.jsx)("p",{className:"card__info--circle",children:"$$$"}),Object(o.jsx)("p",{className:"card__info__text",children:" Price range (free-$$$)"})]}),Object(o.jsxs)("div",{className:"card__info",children:[Object(o.jsx)("p",{className:"card__info--circle",children:t.participants}),Object(o.jsx)("p",{className:"card__info__text",children:" Participants"})]})]})]}),Object(o.jsx)("section",{className:"input-container",children:Object(o.jsx)(b,{getData:c})})]})}),O=(c(33),function(e){var t=e.getData;return Object(o.jsx)("main",{className:"main-content",children:Object(o.jsxs)("section",{className:"main-container--home-page",children:[Object(o.jsx)("h1",{className:"header__welcome",children:"Welcome to Tombola!"}),Object(o.jsx)("p",{children:" Ps. It might take a little while to connect to the Bored API "}),Object(o.jsx)("p",{children:" The first activity could take some time to load. "}),Object(o.jsx)(b,{getData:t})]})})}),m=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(""),s=Object(r.a)(n,2),b=s[0],m=s[1],u=function(){fetch("https://agile-beyond-36752.herokuapp.com/").then((function(e){return e.json()})).then((function(e){return m(e)})).then((function(){return a(!1)})).catch((function(e){return m({error:e})}))};return Object(i.useEffect)((function(){u()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l.a,{basename:"tombola",children:[Object(o.jsx)(d,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",exact:!0,children:Object(o.jsx)(O,{getData:u})}),Object(o.jsx)(j.a,{path:"/about",exact:!0,children:Object(o.jsx)(h,{})}),Object(o.jsx)(j.a,{path:"/activity",exact:!0,children:Object(o.jsx)(x,{activity:b,getData:u,isLoading:c})})]})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),i(e),a(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),u()}},[[34,1,2]]]);
//# sourceMappingURL=main.9cc1a215.chunk.js.map