"use strict";(self.webpackChunktutsnips=self.webpackChunktutsnips||[]).push([[555],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6167:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l=function(e){e.target.src="/tutsnips/img/tutorial/c-sharp-tut/c-sharp-features.jpg"},s={toc:[],handleError:l};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:r.src,width:r.width?r.width:"80%",onError:l})))}u.isMDXComponent=!0;var c=["components"],p={sidebar_position:1,title:"C# Overview"},d=void 0,m={unversionedId:"C-Sharp-Tutorial/c-sharptutorial",id:"C-Sharp-Tutorial/c-sharptutorial",title:"C# Overview",description:"What Is C# (C-Sharp)",source:"@site/docs/C-Sharp-Tutorial/c-sharptutorial.mdx",sourceDirName:"C-Sharp-Tutorial",slug:"/C-Sharp-Tutorial/c-sharptutorial",permalink:"/tutsnips/docs/C-Sharp-Tutorial/c-sharptutorial",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/C-Sharp-Tutorial/c-sharptutorial.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"C# Overview"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/tutsnips/docs/tutorial-extras/translate-your-site"}},h=[{value:"What Is C# (C-Sharp)",id:"what-is-c-c-sharp",children:[],level:2},{value:"C# Features",id:"c-features",children:[],level:2},{value:"C# Pros &amp; Cons",id:"c-pros--cons",children:[{value:"Pros",id:"pros",children:[],level:3},{value:"Cons",id:"cons",children:[],level:3}],level:2},{value:"Where C# is used?",id:"where-c-is-used",children:[],level:2}],f={toc:h};function v(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-c-c-sharp"},"What Is C# (C-Sharp)"),(0,i.kt)("p",null,"C# (pronounced as \u201cSee Sharp\u201d) is a modern, object-oriented, type-shape programming language. C# allows developers to build a wide variety of secure and powerful applications that run in .NET. C# is derived from the C family of languages \u200b\u200band will be immediately familiar to C, C, Java and JavaScript programmers."),(0,i.kt)("h2",{id:"c-features"},"C# Features"),(0,i.kt)(u,{src:"/img/tutorial/c-sharp-tut/c-sharp-features.jpg",mdxType:"Img"}),(0,i.kt)("div",{class:"list-askt pdl"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Garbage collection automatically reclaims memory occupied by unreachable unused objects."),(0,i.kt)("li",{parentName:"ul"},"Nullable types guard against variables that don\u2019t refer to allocated objects."),(0,i.kt)("li",{parentName:"ul"},"Exception handling provides a structured and extensible approach to error detection and recovery."),(0,i.kt)("li",{parentName:"ul"},"Lambda expressions support functional programming techniques."),(0,i.kt)("li",{parentName:"ul"},"Language Integrated Query (LINQ) syntax creates a common pattern for working with data from any source."),(0,i.kt)("li",{parentName:"ul"},"Language support for asynchronous operations provides syntax for building distributed systems."))),(0,i.kt)("h2",{id:"c-pros--cons"},"C# Pros & Cons"),(0,i.kt)("h3",{id:"pros"},"Pros"),(0,i.kt)("div",{class:"list-thumb-up pdl"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C-family of languages"),(0,i.kt)("li",{parentName:"ul"},"Object-oriented"),(0,i.kt)("li",{parentName:"ul"},"Inbuilt garbage collector"),(0,i.kt)("li",{parentName:"ul"},"Type-safe language with dynamic capabilities"),(0,i.kt)("li",{parentName:"ul"},"Thorough documentation"),(0,i.kt)("li",{parentName:"ul"},"Visual Studio as a native IDE"),(0,i.kt)("li",{parentName:"ul"},"Large community"))),(0,i.kt)("h3",{id:"cons"},"Cons"),(0,i.kt)("div",{class:"list-thumb-down pdl"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C# performance isn\u2019t the absolute best"),(0,i.kt)("li",{parentName:"ul"},"Dependence on .NET platform"),(0,i.kt)("li",{parentName:"ul"},"Hard learning curve"))),(0,i.kt)("h2",{id:"where-c-is-used"},"Where C# is used?"),(0,i.kt)("div",{class:"list-check pdl"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows desktop applications"),(0,i.kt)("li",{parentName:"ul"},"Web services and apps"),(0,i.kt)("li",{parentName:"ul"},"Linux and macOS applications"),(0,i.kt)("li",{parentName:"ul"},"Mobile development"),(0,i.kt)("li",{parentName:"ul"},"Game development"))))}v.isMDXComponent=!0}}]);