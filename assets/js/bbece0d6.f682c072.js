"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},s="Docusaurus Installation",i={unversionedId:"main/Get started/Installation/Docusaurus Installation",id:"main/Get started/Installation/Docusaurus Installation",title:"Docusaurus Installation",description:"Step 3: Install Docusaurus",source:"@site/docs/main/1. Get started/1. Installation/3. Docusaurus Installation.md",sourceDirName:"main/1. Get started/1. Installation",slug:"/main/Get started/Installation/Docusaurus Installation",permalink:"/docs/main/Get started/Installation/Docusaurus Installation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"main",previous:{title:"Setup Repository",permalink:"/docs/main/Get started/Installation/Setup Git Repo"},next:{title:"Vault Setup",permalink:"/docs/main/Get started/Installation/Vault Setup"}},l={},u=[{value:"Step 3: Install Docusaurus",id:"step-3-install-docusaurus",level:2},{value:"1) Install Docusaurus",id:"1-install-docusaurus",level:3},{value:"2) ### Verify installation",id:"2--verify-installation",level:3},{value:"4) Delete the <code>blog</code> &amp; <code>docs</code> folder",id:"4-delete-the-blog--docs-folder",level:3},{value:"5) Save progess",id:"5-save-progess",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docusaurus-installation"},"Docusaurus Installation"),(0,o.kt)("h2",{id:"step-3-install-docusaurus"},"Step 3: Install Docusaurus"),(0,o.kt)("p",null,"Next, let's proceed with setting up Docusaurus."),(0,o.kt)("admonition",{title:"Offical Docusaurus Documentation",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For additional information and detailed instructions about Docusaurus, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"official Documentation"),".\nPlease note that we won't cover everything here.")),(0,o.kt)("h3",{id:"1-install-docusaurus"},"1) Install Docusaurus"),(0,o.kt)("p",null,"To install Docusaurus, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx create-docusaurus@latest website classic\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can use different names for your vault and Docusaurus installation. However, you would need to modify these in your Obsidian / Obsidiosaurus Plugin settings.\nI recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"website")," for your Docusaurus installation and ",(0,o.kt)("inlineCode",{parentName:"p"},"vault")," for your Obsidian vault.")),(0,o.kt)("h3",{id:"2--verify-installation"},"2) ### Verify installation"),(0,o.kt)("p",null,"After executing the installation command, your folder structure should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 blog\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 docs \n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u251c\u2500\u2500 babel.config.js\n\u2514\u2500\u2500 package-lock.json\n")),(0,o.kt)("p",null,"To confirm that Docusaurus has been installed correctly, let's run the Docusaurus development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd my-website\nnpm run start\n")),(0,o.kt)("p",null,"By default, this should open a browser window at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")),(0,o.kt)("admonition",{title:"Closing the Development Server Session",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Dont forget to terminate the development server session by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," in your terminal")),(0,o.kt)("h3",{id:"4-delete-the-blog--docs-folder"},"4) Delete the ",(0,o.kt)("inlineCode",{parentName:"h3"},"blog")," & ",(0,o.kt)("inlineCode",{parentName:"h3"},"docs")," folder"),(0,o.kt)("p",null,"Lastly, delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folders which contain pre-built files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 blog <- DELETE FOLDER\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 docs <- DELETE FOLDER\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u251c\u2500\u2500 babel.config.js\n\u2514\u2500\u2500 package-lock.json\n")),(0,o.kt)("h3",{id:"5-save-progess"},"5) Save progess"),(0,o.kt)("p",null,"Save your progress by creating a git commit, in your terminal run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "Install Docusaurus"\ngit push\n')))}d.isMDXComponent=!0}}]);