"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Create your first notes",s={unversionedId:"main/Get started/Installation/Create notes",id:"main/Get started/Installation/Create notes",title:"Create your first notes",description:"Multiple Languages",source:"@site/docs/main/1. Get started/1. Installation/7. Create notes.md",sourceDirName:"main/1. Get started/1. Installation",slug:"/main/Get started/Installation/Create notes",permalink:"/docs/main/Get started/Installation/Create notes",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"main",previous:{title:"Docusaurus config setup",permalink:"/docs/main/Get started/Installation/Docusaurus Configuration"},next:{title:"Usage",permalink:"/docs/main/Get started/Usage"}},l={},c=[{value:"Multiple Languages",id:"multiple-languages",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-your-first-notes"},"Create your first notes"),(0,a.kt)("h1",{id:"single-language"},"Single Language"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sidebar\n\u251c\u2500\u2500 1. First topic \n\u2502   \u251c\u2500\u2500 1. First note.md\n\u2502   \u2514\u2500\u2500 1. Second note.md\n\u2514\u2500\u2500 2. Second topic\n    \u2514\u2500\u2500 ...\n")),(0,a.kt)("h2",{id:"multiple-languages"},"Multiple Languages"),(0,a.kt)("p",null,"If you want to directly write multiple language notes from you vault you have to follow this structure in your Obsidian Vault:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sidebar\n\u251c\u2500\u2500 1. First topic \n\u2502   \u251c\u2500\u2500 1. First note+ // the '+' indicates contains multiple languages\n\u2502   \u2502   \u251c\u2500\u2500 first_note__en.md\n\u2502   \u2502   \u2514\u2500\u2500 first_note__de.md\n\u2502   \u2514\u2500\u2500 1. Second note+ // the '+' indicates contains multiple languages\n\u2502       \u251c\u2500\u2500 second_note__en.md\n\u2502       \u2514\u2500\u2500 second_note__de.md\n\u2514\u2500\u2500 2. Second topic\n    \u2514\u2500\u2500 ...\n")))}d.isMDXComponent=!0}}]);