(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(146),c=a(152),n=a(161),l=a(162),d=a.n(l),o=function(){return i.a.createElement(s.b,{query:"299725501",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:n})},u=a(150);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"h1 Hello world"),i.a.createElement("h2",null,"h2 Hello world"),i.a.createElement("h3",null,"h3 Hello world"),i.a.createElement("h4",null,"h4 Hello world"),i.a.createElement("p",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(o,null)),i.a.createElement(s.a,{to:"/page-2/"},"Go to page 2"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var r=a(0),i=a.n(r),s=a(4),c=a.n(s),n=a(33),l=a.n(n);a.d(t,"a",function(){return l.a});a(147);var d=i.a.createContext({}),o=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,a){var r;e.exports=(r=a(149))&&r.default||r},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),s=a(4),c=a.n(s),n=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},150:function(e,t,a){"use strict";var r=a(151),i=a(0),s=a.n(i),c=a(4),n=a.n(c),l=a(154),d=a.n(l);function o(e){var t=e.description,a=e.lang,i=e.meta,c=e.keywords,n=e.title,l=r.data.site,o=t||l.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:a},title:n,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:n},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:o}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(i)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.arrayOf(n.a.object),keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},t.a=o},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var r=a(148),i=a(0),s=a.n(i),c=a(4),n=a.n(c),l=a(146),d=function(e){var t=e.siteTitle;return s.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:n.a.string},d.defaultProps={siteTitle:""};var o=d,u=(a(153),function(e){var t=e.children;return s.a.createElement(l.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,t),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});u.propTypes={children:n.a.node.isRequired};t.a=u},161:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3e%3cpath d='M344 7c-2 2-2 2-6 1-6-2-14-2-21-1-13 3-27 12-27 18 0 12 51 41 74 43 9 0 11-2 11-13 0-14-5-25-15-34-6-6-6-7-6-10 0-5-7-9-10-4m-30 3c-7 2-19 9-19 11l6 1c17 2 51 19 66 33 6 6 7 6 5-6-2-18-15-32-34-38-7-2-18-3-24-1m-18 16c-6 2 12 17 35 27 13 7 17 9 20 8 1-1 0-2-6-4-17-8-34-18-42-27l-7-4m-7 31c-14 4-24 19-23 34 2 24 28 39 49 28 12-6 18-15 19-28 1-25-22-42-45-34m4 6c-5 2-6 2-11 7-4 3-8 11-8 15 0 3 2 4 19 16l18 12 4-3c10-6 17-28 9-26l-8 2c-5 1-6 1-6 3s1 2 2 2c9-1 10-1 10 1 0 3-5 12-8 14l-3 2-16-11c-18-12-18-12-13-20 6-10 20-13 30-7 3 3 4 3 5 1s-2-5-9-8h-15M189 84c-7 1-14 4-19 9-4 3-5 4-12 4-12 1-17 6-18 17 0 6-1 7-3 7-2 1-2 2-2 5 0 4-1 7-4 13-7 15-7 25 1 31l3 4 1 3c2 2-1 5-5 4-2 0-15-14-22-24-2-3-2-7 2-12 3-4 1-6-4-6l-4 1-1-7c-2-7-4-10-6-8l-2 3c0 2 0 2-2 0-1-4-5-4-6-1 0 1-1 2-2 1-3 0-4 2-2 6 1 3 1 3-2 2s-3 5 1 8l4 7 7 10 4 7 5 6c4 4 5 6 4 6-3 3 5 12 9 11 3-1 7 2 7 4l3 5c3 6 8 6 12 0l6-6 3-3v4c5 28 6 31 12 34l3 1-2 3c-2 2-2 4-2 9s-1 9-4 18l-5 18-2 7c-2 0-5 13-5 19l-1 5c-4 0-7 10-4 15l2 7c2 7 5 10 8 10s3 0 3 7c1 5 1 8 3 10 2 5 2 11-1 17-2 5 0 18 3 20 9 7 27-1 27-11v-14c0-10-1-11-4-15-2-3-3-6-3-10l-3-13c-2-4-3-8-2-10l-1-5c-3-2-3-18-1-21 2-2 3-6 2-8-1-1 5-19 9-26l5-8 5-6c3-8 10-8 13-1l6 6c5 3 17 21 15 23-1 2 1 7 3 7s2 10-1 11l-2 6c0 5-3 13-6 15l-2 5-2 4-1 6-1 12c-2 9-1 11 6 15 11 6 17 0 17-18 0-10 0-10 3-14l5-12c1-5 3-7 4-8 2 0 3-3 5-7 3-8 3-11 0-13l-4-7-4-6-2-8-6-14-3-10-1-6-2-3 3-1c6 0 11-6 12-16 1-7 3-10 3-5 0 2 4 5 7 5s5-2 10-7l8-8c2 0 6-4 6-5l4-6 8-10 9-10c5-5 5-5 14-5 16-2 27-5 28-9l7-3c9-3 11-5 11-9-1-9-35-16-71-15-14 1-19 1-32 4h-4v-25l-4-3c-4-5-8-6-16-6-6 0-7 0-11-4-8-7-18-10-30-9m-5 3c-9 3-18 11-21 19-3 6-2 6 2 1 5-5 12-10 19-11h5V86l-5 1m17 4v5l5 1c9 2 17 8 21 14 3 7 2 1-1-5-4-9-9-13-17-17-7-3-8-3-8 2m75 8c4 9 11 15 22 16h7l-15-10-15-10 1 4m-124 1c-4 0-9 6-10 11-1 9 0 26 2 29 4 6 10 8 14 5 3-2 1-6-3-8s-5-5-5-16c0-9 0-9 3-12l5-3 3-3 2-4h-4l-7 1m27 0c-24 9-26 43-3 54 7 4 29 4 37 0 23-11 20-47-4-54h-30m47 0l5 6 5 3c3 3 3 3 3 12l-1 12v2l6-2 4-1v-12c0-13-1-17-8-19-4-2-14-3-14-1m-44 4c-20 4-26 32-9 44 8 6 35 6 43 0 6-4 9-10 9-19 0-12-5-20-14-24-5-2-22-2-29-1m0 3c-7 2-12 7-12 13 0 3 0 3 5-2s7-5 18 0c11 4 14 5 20 2 4-1 5-2 5-4s0-2-1-1c-3 5-14 7-18 3-2-2-2-2 0-1l6 1h5l-4-1c-3 0-7-2-9-4l-8-3c-2 0-3 0-2-1 1-2 5-1 10 2s6 2 3-2c-2-3-3-3-9-3l-9 1m-6 14l-5 4c-3-1-6 1-6 3 0 6 2 8 6 8 3-1 4 0 2 2-1 1-1 2 1 5 3 4 4 5 6 3 1-2 8-7 10-7l1 2c1 2 2 2 4 2 4-1 5-4 2-8-2-3-2-6 0-6l1 2 6 9 5 3c4 3 4 3 7-1 1-3 1-3-1-5-1-1-1-1 2-1 5 0 6-1 6-6 0-4-3-6-7-5l-2-1h-3c-4 2-10 1-19-4-10-4-11-4-16 1m-88 7l2 6c3 8 0 9-4 1l-3-4 3 6c3 7 2 9-2 5s-5-3-1 1l5 8c3 7 4 7 9 6s8-3 9-7l2-6 2-3c-1-1-5 1-6 4l-2 2-4 2-3 1c-1-1 3-5 5-5s2-2 1-6a9509 9509 0 0 1-4-8c2 11 0 12-4 3-3-5-5-8-5-6m185 2c-25 2-42 8-38 14 4 7 35 12 68 11 55-2 71-16 26-23-12-2-42-3-56-2m5 2c-20 2-33 6-31 10 1 5 19 8 47 8 34 0 51-3 49-10-2-6-36-10-65-8m4 8c-11 0-29 4-28 5a197 197 0 0 0 81-1c3-3-34-6-53-4m-142 2c-2 2-6 12-6 15s3 7 5 7l2-4c1-4 6-9 10-10 3 0 3-2 0-2l-6-3c-4-5-3-4-5-3m45 5c-6 2-4 3 9 3 12 0 18-1 15-2-4-3-17-3-24-1m-27 2l-3 6c-1 4-1 4 5 9 5 4 6 5 10 0 2-2 2-2-3-9-7-9-7-9-9-6m65 6c-6 10-6 9-2 12l3 2 6-5c5-6 5-6 4-9-1-4-4-8-5-8l-6 8m-3-2c-4 4-11 6-26 6-14 0-15 0-20-2l-5-3 7 9c3 3 11 4 23 4 13-1 15-2 20-10 3-5 4-8 1-4m24 0c6 5 7 10 5 22-1 6-1 6 2 12l3 6 4-7c0-2 3-5 5-5l1-1 3-4c9-9 9-14 1-14-9-2-15-4-17-7l-6-4h-3l2 2m-7 4c0 3 1 5 3 7l5 7 2 4 1-6c0-7-1-12-5-14-4-3-6-2-6 2m17-2c3 3 11 4 38 5 26 0 34-1 42-4a274 274 0 0 1-81-1m23 9c0 3 4 6 8 6 5 1 10-1 12-5l2-2h-11l-11 1m-41 2c-4 3-1 13 5 15 5 1 6-6 0-14-1-2-2-2-5-1m-80 15l-8 9 3 15c3 18 2 17 6 20 4 4 5 4 5-3 0-5 0-7 2-8 1-2 2-41 0-41l-8 8m70 13c0 16 0 19 2 20l1 8c-1 7 0 7 5 4 4-2 6-5 7-15l1-9-7-13-8-14-1 19m-48-15c-3 1-4 3-4 12 0 13 0 13 21 13s20 0 21-10v-8l-4-4-3-4h-15l-16 1m-50 11c-3 6-3 7-1 8h8c2-2 2-2 0-8-2-8-4-8-7 0m55-3c-5 5-2 11 5 11 5 0 8-8 4-11-2-3-7-2-9 0m6 34v7h12v-14h-12v7m-28 12l-1 6v4l4 1c5 0 11 3 15 6 3 3 5 2 7-3 1-5 1-7-7-11-6-4-16-5-18-3m51 1c-4 2-10 8-10 10l3 4 3 4 1-3c3-3 11-8 15-9 4 0 4-1 4-3l-1-4c-2-2-11-1-15 1m22 46v8c0 8 1 10 7 10 3 0 3 0 4-5 0-4 0-12-2-14-1-2-8-1-9 1m-90 17c-2 6-1 19 1 22s2 3 7 2c7-2 8-2 7-15l-1-12-7-2h-6l-1 5m73 22l-2 8-1 6c-2 1-2 15 0 17l2 3 1 2 1-1h3c4 1 8-1 9-4s1-3-1-2l-2 1-2 3c-1 1-1 1-1-1 1-2 0-3-2-5-4-3-6-8-4-10 1-1 1-1 1 1 0 6 5 10 10 9l1-8 1-9c1-3 1-3-4-5l-5-3-1 5-2 4v-7c2-2 2-4 1-5-1-3-2-3-3 1m-46 37v3l-1 9c0 8-1 10-5 12-3 1-4 2-3 4v4l-2-3-3-4-3-3v9c1 7 13 7 20 1 2-2 2-3 1-12 0-8 0-9 2-12 2-4-2-11-6-8m-4 13l-3 1c-4 0-9 2-9 4-1 4 1 5 6 5 6-1 7-3 7-8l-1-2' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",srcWebp:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/9ea76/gatsby-astronaut.webp",srcSetWebp:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/9533b/gatsby-astronaut.webp 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/87efd/gatsby-astronaut.webp 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/9ea76/gatsby-astronaut.webp 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/75154/gatsby-astronaut.webp 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6fae7/gatsby-astronaut.webp 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/c6096/gatsby-astronaut.webp 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,s=r(a(7)),c=r(a(35)),n=r(a(75)),l=r(a(76)),d=r(a(0)),o=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",c=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+c+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,c=e.onLoad,o=e.onError,u=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:c,onError:o,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,n=p(t);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:s,hasNoScript:l,seenBefore:n},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,c.default)((0,c.default)(a))),a.handleRef=a.handleRef.bind((0,c.default)((0,c.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,c=e.imgStyle,n=void 0===c?{}:c,o=e.placeholderStyle,f=void 0===o?{}:o,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,w=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:E?1:0,transition:L?"opacity "+w+"ms":"none"},n),I="boolean"==typeof y?"lightgray":y,x={transitionDelay:w+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&x,n,f),O={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(m){var z=m;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),I&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&x)}),z.base64&&d.default.createElement(b,(0,l.default)({src:z.base64},O)),z.tracedSVG&&d.default.createElement(b,(0,l.default)({src:z.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},z))}}))}if(h){var q=h,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},s);return"inherit"===s.display&&delete j.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},I&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},L&&x)}),q.base64&&d.default.createElement(b,(0,l.default)({src:q.base64},O)),q.tracedSVG&&d.default.createElement(b,(0,l.default)({src:q.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,q.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),d.default.createElement(b,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},q))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var w=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),v=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-cb72a0f905bad9772a1b.js.map