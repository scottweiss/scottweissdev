(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(56),o=a(160),l=a(158);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Scott Weiss"}}}}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(1),l=a.n(o),c=a(161),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Scott Weiss",description:"Placeholder description",author:"@scottweiss"}}}}},160:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(1),l=a.n(o),c=a(56),s=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(c.Link,{to:"/"},t))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,d=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Scott Weiss")))},data:n})};d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-page-2-js-892f8c955bdfe753ed64.js.map