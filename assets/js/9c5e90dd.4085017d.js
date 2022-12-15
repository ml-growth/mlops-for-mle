"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(r),p=o,b=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var n=r(7462),o=r(7294),a=r(3905),i=r(5999);function c(e){let{className:t,name:r,children:n,githubUrl:a,linkedinUrl:i}=e;return o.createElement("div",{className:t},o.createElement("div",{className:"card card--full-height"},o.createElement("div",{className:"card__header"},o.createElement("div",{className:"avatar avatar--vertical"},o.createElement("img",{className:"avatar__photo avatar__photo--xl",src:`${a}.png`,alt:`${r}'s avatar`}),o.createElement("div",{className:"avatar__intro"},o.createElement("h3",{className:"avatar__name"},r)))),o.createElement("div",{className:"card__body"},n),o.createElement("div",{className:"card__footer"},o.createElement("div",{className:"button-group button-group--block"},a&&o.createElement("a",{className:"button button--secondary",href:a},"GitHub"),i&&o.createElement("a",{className:"button button--secondary",href:i},"LinkedIn")))))}function l(e){return o.createElement(c,(0,n.Z)({},e,{className:"col col--6 margin-bottom--lg"}))}function m(){return o.createElement("div",{className:"row"},o.createElement(l,{name:"Jongseob Jeon",githubUrl:"https://github.com/aiden-jeon",linkedinUrl:"https://www.linkedin.com/in/jongseob-jeon/"},o.createElement(i.Z,{id:"team.profile.Jongseob Jeon.body"},"Project Leader")),o.createElement(l,{name:"Dongmin Lee",githubUrl:"https://github.com/dongminlee94"},o.createElement(i.Z,{id:"team.profile.Dongmin Lee.body"},"Project Member")),o.createElement(l,{name:"Donghyun Kim",githubUrl:"https://github.com/Kimdongui",linkedinUrl:"https://www.linkedin.com/in/donghyun-kim-549718215/"},o.createElement(i.Z,{id:"team.profile.Donghyun Kim.body"},"Project Member")),o.createElement(l,{name:"Seokgi Kim",githubUrl:"https://github.com/datawhales"},o.createElement(i.Z,{id:"team.profile.Seokgi Kim.body"},"Project Member")))}function s(){return o.createElement("div",{className:"row"},o.createElement(l,{name:"Minjoo Lee",githubUrl:"https://github.com/LEEMINJOO",linkedinUrl:"https://www.linkedin.com/in/minjoolee218/"},o.createElement(i.Z,{id:"team.profile.Minjoo Lee.body"},"Project Leader")))}const u={sidebar_position:1},d="Contributors",p={unversionedId:"contributors",id:"contributors",title:"Contributors",description:"Main Authors",source:"@site/community/contributors.md",sourceDirName:".",slug:"/contributors",permalink:"/tutorial/community/contributors",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/community/contributors.md",tags:[],version:"current",lastUpdatedBy:"Jongseob Jeon",lastUpdatedAt:1671066712,formattedLastUpdatedAt:"Dec 15, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Discussion",permalink:"/tutorial/community/discussion"}},b={},f=[{value:"Main Authors",id:"main-authors",level:2},{value:"Reviewers",id:"reviewers",level:2}],h={toc:f};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributors"},"Contributors"),(0,a.kt)("h2",{id:"main-authors"},"Main Authors"),(0,a.kt)(m,{mdxType:"MainAuthorRow"}),(0,a.kt)("h2",{id:"reviewers"},"Reviewers"),(0,a.kt)("p",null,"Thank you for reviewing our tutorials!"),(0,a.kt)(s,{mdxType:"ReviewersRow"}))}y.isMDXComponent=!0}}]);