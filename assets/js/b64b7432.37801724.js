"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={},r="Deploying to Github Pages",s={unversionedId:"main/Get started/Deployment/Github Pages",id:"main/Get started/Deployment/Github Pages",title:"Deploying to Github Pages",description:"For more information refer to the official Docs",source:"@site/docs/main/1. Get started/3. Deployment/1. Github Pages.md",sourceDirName:"main/1. Get started/3. Deployment",slug:"/main/Get started/Deployment/Github Pages",permalink:"/obsidiosaurus-docs/docs/main/Get started/Deployment/Github Pages",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"main",previous:{title:"How to use Obsidiosaurus",permalink:"/obsidiosaurus-docs/docs/main/Get started/Usage"},next:{title:"Netlify",permalink:"/obsidiosaurus-docs/docs/main/Get started/Deployment/Netlify"}},u={},l=[{value:"Adjust your Docusaurus Config",id:"adjust-your-docusaurus-config",level:2},{value:"Automated Deployment with Github Actions",id:"automated-deployment-with-github-actions",level:2},{value:"Deploy with push to main branch",id:"deploy-with-push-to-main-branch",level:3},{value:"Deploy with tags",id:"deploy-with-tags",level:3},{value:"Adjust your Github Repository Settings",id:"adjust-your-github-repository-settings",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-to-github-pages"},"Deploying to Github Pages"),(0,a.kt)("p",null,"For more information refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"},"official Docs")),(0,a.kt)("p",null,"If you already have a Github Repo an easy way is to use Github Pages for your deployment of Docusaurus."),(0,a.kt)("admonition",{title:"Public vs. Private Repository",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Please note that with a free Github subscription, you cannot use Github Pages without ",(0,a.kt)("strong",{parentName:"p"},"making your repository public, and thus, accessible to every user on the internet.")," This implies that your ",(0,a.kt)("strong",{parentName:"p"},"vault with all files & settings, including files in draft mode will be fully exposed.")," If you wish to keep your repository private, you will need to either upgrade your Github account to enable Github Pages on a private repository, or explore alternative deployment methods.")),(0,a.kt)("h2",{id:"adjust-your-docusaurus-config"},"Adjust your Docusaurus Config"),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n  ...\n  url: 'https://{your-username}.github.io',\n  baseUrl: '/{repository-name}/',\n  ...\n  }\n")),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"{your-username}")," with your Github Username or Organisation and the ",(0,a.kt)("inlineCode",{parentName:"p"},"{repository-name}")," with your actual repository name on Github."),(0,a.kt)("h2",{id:"automated-deployment-with-github-actions"},"Automated Deployment with Github Actions"),(0,a.kt)("p",null,"Manually releasing can be time-consuming."),(0,a.kt)("p",null,"In the root directory ",(0,a.kt)("inlineCode",{parentName:"p"},".../repository/.github/workflows/")," create a ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{REPOSITORY}/\n\u2514\u2500\u2500 .github/\n    \u2514\u2500\u2500 workflows/\n        \u2514\u2500\u2500 deploy.yml <- Create this file\n")),(0,a.kt)("p",null,"Use either ",(0,a.kt)("inlineCode",{parentName:"p"},"push to main branch")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," deploy method see below:"),(0,a.kt)("h3",{id:"deploy-with-push-to-main-branch"},"Deploy with push to main branch"),(0,a.kt)("p",null,"This deploy method works whenever use ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")),(0,a.kt)("p",null,"Change your ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file to following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n          cache: npm\n          cache-dependency-path: ./website/package-lock.json\n      - name: Install dependencies\n        run: |\n          cd website\n          npm ci\n      - name: Build website\n        run: |\n          cd website\n          npm run build\n\n      # Popular action to deploy to GitHub Pages:\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # Build output to publish to the `gh-pages` branch:\n          publish_dir: ./website/build\n          # The following lines assign commit authorship to the official\n          # GH-Actions bot for deploys to `gh-pages` branch:\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # The GH actions bot is used by default if you didn't specify the two fields.\n          # You can swap them out with your own user credentials.\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n")),(0,a.kt)("admonition",{title:"Renamed Docusaurus Folder",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you have renamed your Docusaurus folder make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," with your changed name.")),(0,a.kt)("h3",{id:"deploy-with-tags"},"Deploy with tags"),(0,a.kt)("p",null,"If you don't want to release your current state with every ",(0,a.kt)("inlineCode",{parentName:"p"},"git push")," you can use tags"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},".yml")," script as shown above, change the first part of the ",(0,a.kt)("inlineCode",{parentName:"li"},"deploy.yml"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'on:\n  push:\n    tags:\n      - "*"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a tag that matches the version in the ",(0,a.kt)("inlineCode",{parentName:"li"},"manifest.json")," file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git tag -a 1.0.1\ngit push origin 1.0.1\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," ",(0,a.kt)("inlineCode",{parentName:"p"},"-a")," creates an ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging#_creating_tags"},"annotated tag"),".")),(0,a.kt)("h2",{id:"adjust-your-github-repository-settings"},"Adjust your Github Repository Settings"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github_pages_repository_settings",src:n(6473).Z,width:"2500",height:"1509"})))}d.isMDXComponent=!0},6473:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/github_pages_repository_settings-ce5fdfbfd087abaf2e9ddebb69050789.webp"}}]);