(this["webpackJsonpshuffling-widget"]=this["webpackJsonpshuffling-widget"]||[]).push([[0],{84:function(e,t,r){},85:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var i=r(5),o=r.n(i),s=r(24),c=r.n(s),a=(r(84),r(9)),n=r(11),l=r(13),m=(r(85),r(44)),b=r(8);function p(e){return e*(Math.PI/180)}function f(e){var t=e.dimensions,r=e.myRef,i=e.rotation,o=e.children;return console.log("rotation",i),Object(b.jsxs)(m.animated.mesh,Object(a.a)(Object(a.a)({visible:!1},e),{},{ref:r,rotation:i,children:[Object(b.jsx)("boxGeometry",{args:t}),Object(b.jsx)("meshStandardMaterial",{}),o]}))}var h=r(19),d=r(92),j=r(50),u=r(31),g=r(58);var x=function(e){var t=e.imgSrc,r=e.name,i=e.networth,o=e.opacity,s=e.onClick,c=e.hrefProfile;return Object(b.jsx)(j.a.div,{className:"wrapper",onClick:s,children:Object(b.jsx)("div",{className:"box",style:{},children:Object(b.jsxs)(j.a.div,{className:"inner-box",style:{opacity:o},children:[Object(b.jsxs)("div",{className:"top-row",children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{className:"img-prof-pic",src:t})}),Object(b.jsxs)("div",{className:"net-worth-amount",children:["$",i]})]}),Object(b.jsxs)("div",{style:{display:"flex",flexGrow:1},children:[Object(b.jsx)("div",{className:"name-container",children:Object(b.jsx)("div",{children:r})}),Object(b.jsx)("button",{className:"btn-view-profile",children:Object(b.jsx)("a",{href:c,target:"_blank",children:"Read Full Profile"})})]})]})})})},O=[140,90,20.5],v=function(e){var t=e.count,r=e.userHasClicked,o=e.direction,s=function(){var e=Object(i.useState)({width:void 0,height:void 0}),t=Object(n.a)(e,2),r=t[0],o=t[1];return Object(i.useEffect)((function(){function e(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r}().width<=576,c=Object(i.useRef)(),a=[0,-60,-50],h=[0,-1e3,-350],j=[{name:"Jeff Bezos",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",networth:"177 Billion",hrefProfile:"https://www.forbes.com/profile/jeff-bezos/?list=billionaires"},{name:"Elon Musk",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704",networth:"151 Billion",hrefProfile:"https://www.forbes.com/profile/elon-musk/?list=billionaires"},{name:"Bernard Arnault",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc05518ca425400079c659f%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4000%26cropY1%3D1209%26cropY2%3D5212",networth:"150 Billion",hrefProfile:"https://www.forbes.com/profile/bernard-arnault/?list=billionaires"},{name:"Bill Gates",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",networth:"124 Billion",hrefProfile:"https://www.forbes.com/profile/bill-gates/?list=billionaires"},{name:"Mark Zuckerberg",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401",networth:"97 Billion",hrefProfile:"https://www.forbes.com/profile/mark-zuckerberg/?list=billionaires"},{name:"Warren Buffet",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babb7f1a7ea4342a948b79a%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D748%26cropX2%3D3075%26cropY1%3D1753%26cropY2%3D4082",networth:"96 Billion",hrefProfile:"https://www.forbes.com/profile/warren-buffett/?list=billionaires"},{name:"Larry Ellison",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e8b62cfc095010007bffea0%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4529%26cropY1%3D652%26cropY2%3D5184",networth:"93 Billion",hrefProfile:"https://www.forbes.com/profile/larry-ellison/?list=billionaires"},{name:"Larry Page",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76bcaaa7ea43100043c836%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D227%26cropX2%3D2022%26cropY1%3D22%26cropY2%3D1817",networth:"91.5 Billion",hrefProfile:"https://www.forbes.com/profile/larry-page?list=billionaires"},{name:"Sergey Brin",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7c254bbe6f78090d831f%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D475%26cropX2%3D2887%26cropY1%3D168%26cropY2%3D2582",networth:"89 Billion",hrefProfile:"https://www.forbes.com/profile/sergey-brin/?list=billionaires"},{name:"Mukesh Ambani",imgSrc:"https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089",networth:"84.5 Billion",hrefProfile:"https://www.forbes.com/profile/mukesh-ambani/?list=billionaires"}],g=[0,0,0],v=Object(m.useSprings)(j.length,j.map((function(e,i){var s=i-t;s<0&&(s=j.length+s);var c=s===j.length-1,n="backwards"===o,m=c&&!n||0===s&&n,b={opacity:1,position:[0,0,0],rotation:[p(-70),0,0]},f=[{opacity:0,position:h,rotation:[p(-150),0,0],config:{duration:0}},{opacity:.2,position:a.map((function(e,t){return e+8*a[t]})),rotation:[p(-70),0,0],config:{duration:400,easing:u.a.overshoot(.45)}}],d=[{opacity:0,position:a.map((function(e,t){return e+8*a[t]})),rotation:[p(-70),0,0],config:{duration:0,easing:void 0}},{opacity:.2,position:[0,-60,50],rotation:[p(-100),0,0],config:{duration:500,easing:u.b}}];return{from:b,to:[].concat(Object(l.a)(n&&m?d:[]),[{rotation:[p(!n&&c?-100:-70),0,0],opacity:0===s?1:.2,position:r&&!n&&c?[0,-60,50]:g.map((function(e,t){return 0+e+a[t]*s})),config:{duration:r&&m?c?400:300:800,easing:r&&c?u.a.overshoot(1):u.b}}],Object(l.a)(r&&!n&&m?f:[])).slice(r?0:-1)}})));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{}),Object(b.jsx)("pointLight",{position:[10,10,10]}),Object(b.jsx)("group",{position:[0,s?90:180,50],children:v.map((function(e,t){var r=e.position,i=e.opacity,o=j[t],s=o.name,a=o.imgSrc,n=o.networth,l=o.hrefProfile;return Object(b.jsx)(f,{rotation:e.rotation,myRef:c,position:r,dimensions:O,children:Object(b.jsx)(d.a,{className:"content",position:[0,0,10.25],transform:!0,distanceFactor:200,children:Object(b.jsx)(x,{index:!0,name:s,imgSrc:a,networth:n,hrefProfile:l,opacity:i})})},t)}))})]})};var w=function(){var e=Object(i.useRef)(),t="ADD_COUNT",r="SUB_COUNT",s=o.a.useReducer((function(e,i){switch(i.type){case t:var o=e.count+1;return{count:o>=10?0:o,direction:"forwards"};case r:var s=e.count-1;return{count:s<0?9:s,direction:"backwards"};default:return e}}),{count:0,direction:void 0}),c=Object(n.a)(s,2),l=c[0],m=l.count,p=l.direction,f=c[1],d=function(){return f({type:t})},j=function(){return f({type:r})},u=Object(i.useState)(!1),x=Object(n.a)(u,2),O=x[0],w=x[1],F={count:m,userHasClicked:O,direction:p};return Object(b.jsxs)(g.a,{className:"App",style:{display:"flex",transform:"scale(1.0)"},children:[Object(b.jsxs)("div",{className:"page-title-mobile",children:[Object(b.jsxs)("div",{className:"title-line-1-mobile",children:[Object(b.jsx)("span",{style:{color:"#1ea394"},children:"Top"})," 10 Richest People"]}),Object(b.jsxs)("div",{className:"title-line-2-mobile",children:[Object(b.jsx)("span",{style:{colorz:"#1ea394"},children:"Reimagined"})," by ",Object(b.jsx)("span",{style:{color:"#1ea394"},children:"Ben Wexler"})]})]}),Object(b.jsxs)("h1",{className:"page-title",children:[Object(b.jsxs)("div",{className:"title-line-1",children:[Object(b.jsx)("span",{style:{color:"#1ea394"},children:"Top"})," 10 Richest People"]}),Object(b.jsxs)("div",{className:"title-line-2",children:[Object(b.jsx)("span",{style:{colorz:"#1ea394"},children:"Reimagined"})," by ",Object(b.jsx)("span",{style:{color:"#1ea394"},children:"Ben Wexler"})]}),Object(b.jsxs)("div",{style:{display:"flex"},className:"heading-rank2",children:[Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("button",{className:"previous",onClick:function(){w(!0),j()},children:Object(b.jsx)("i",{className:"fas fa-arrow-left icon-previous"})}),Object(b.jsx)("h1",{className:"rankNum",style:{margin:0},children:m+1}),Object(b.jsx)("div",{className:"m-auto next-prev-text"})]}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{className:"m-auto next-prev-text"}),Object(b.jsx)("button",{className:"next",onClick:function(){w(!0),d()},children:Object(b.jsx)("i",{className:"fas fa-arrow-right icon-next"})})]})]})]}),Object(b.jsxs)("div",{style:{display:"none"},className:"heading-rank2",children:[Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{className:"previous",onClick:function(){w(!0),j()},children:Object(b.jsx)("i",{className:"fas fa-arrow-left icon-previous"})}),Object(b.jsx)("h1",{style:{margin:0,minWidth:90},children:m+1}),Object(b.jsx)("div",{className:"m-auto next-prev-text"})]}),Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{className:"m-auto next-prev-text"}),Object(b.jsx)("div",{className:"next",onClick:function(){w(!0),d()},children:Object(b.jsx)("i",{className:"fas fa-arrow-right icon-next"})})]})]}),Object(b.jsx)(h.a,{ref:e,className:"canvas-container",camera:{position:[-60,480,180],fov:45},children:Object(b.jsx)(v,Object(a.a)({},F))})]})},F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,93)).then((function(t){var r=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),i(e),o(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),F()}},[[90,1,2]]]);
//# sourceMappingURL=main.922a7526.chunk.js.map