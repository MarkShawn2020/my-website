"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23617],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,b=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>b,toc:()=>g});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={},f="ubuntu",b={unversionedId:"coding/OS/Linux/ubuntu-index",id:"coding/OS/Linux/ubuntu-index",title:"ubuntu",description:"basic info",source:"@site/my-documents/docs/coding/OS/Linux/ubuntu-index.md",sourceDirName:"coding/OS/Linux",slug:"/coding/OS/Linux/ubuntu-index",permalink:"/docs/coding/OS/Linux/ubuntu-index",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/my-documents/docs/coding/OS/Linux/ubuntu-index.md",tags:[],version:"current",lastUpdatedAt:1726564669,formattedLastUpdatedAt:"2024\u5e749\u670817\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"linux terminator howto",permalink:"/docs/coding/OS/Linux/linux-terminator-howto"},next:{title:"ubuntu init manual",permalink:"/docs/coding/OS/Linux/ubuntu-init-manual"}},m={},g=[{value:"basic info",id:"basic-info",level:2},{value:"init configuration / utilities",id:"init-configuration--utilities",level:2},{value:"feat: enable back/front search commands",id:"feat-enable-backfront-search-commands",level:3},{value:"change apt sources to speed up package installation",id:"change-apt-sources-to-speed-up-package-installation",level:3},{value:"how to increase partition space from free space",id:"how-to-increase-partition-space-from-free-space",level:3}],y={toc:g};function O(e){var t,a=e,{components:p}=a,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(a,["components"]);return(0,r.kt)("wrapper",(t=l(l({},y),d),i(t,o({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("h1",l({},{id:"ubuntu"}),"ubuntu"),(0,r.kt)("h2",l({},{id:"basic-info"}),"basic info"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"version: 18.04.6\n")),(0,r.kt)("h2",l({},{id:"init-configuration--utilities"}),"init configuration / utilities"),(0,r.kt)("h3",l({},{id:"feat-enable-backfront-search-commands"}),"feat: enable back/front search commands"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-sh"}),'echo \'"\\e[A": history-search-backward     # arrow up      --\x3e backward\n"\\e[B": history-search-forward      # arrow down    --\x3e forward\' >> ~/.inputrc\n\n# reload ~/.inputrc, ref: https://superuser.com/a/1064223/1365851\nbind -f ~/.inputrc\n')),(0,r.kt)("h3",l({},{id:"change-apt-sources-to-speed-up-package-installation"}),"change apt sources to speed up package installation"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-sh"}),'APT_SOURCES_LIST_FILE=/etc/apt/sources.list\nAPT_SOURCE="http://mirrors.yun-idc.com/ubuntu/"\n\n# backup & change source file\nsudo sed -i.bak -E  "s|deb \\S+|deb $APT_SOURCE|g" $APT_SOURCES_LIST_FILE\n\n# update source (\u8981\u4fdd\u6301\u7f51\u7edc\u987a\u7545)\nsudo apt update\nsudo apt upgrade\n')),(0,r.kt)("h3",l({},{id:"how-to-increase-partition-space-from-free-space"}),"how to increase partition space from free space"),(0,r.kt)("p",null,"via built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"disk")," app:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 1",src:n(62744).Z,width:"1590",height:"1488"})))}O.isMDXComponent=!0},62744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ubuntu-index-1663570593373-eeacafb9adf917d2acba07d7ff547e015b89cdf48c70c8a38007fd7eb12fff9d-67db42c65daefe517dd2d30d0138d833.png"}}]);