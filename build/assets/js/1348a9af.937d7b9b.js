"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70467],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var a=n(35318),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={},u="jetbrains-howto",f={unversionedId:"coding/Software/JetBrains/jetbrains-howto",id:"coding/Software/JetBrains/jetbrains-howto",title:"jetbrains-howto",description:"my recommended configuration",source:"@site/my-documents/docs/coding/Software/JetBrains/jetbrains-howto.md",sourceDirName:"coding/Software/JetBrains",slug:"/coding/Software/JetBrains/jetbrains-howto",permalink:"/docs/coding/Software/JetBrains/jetbrains-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/my-documents/docs/coding/Software/JetBrains/jetbrains-howto.md",tags:[],version:"current",lastUpdatedAt:1726564669,formattedLastUpdatedAt:"2024\u5e749\u670817\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"20220809",permalink:"/docs/coding/Software/JetBrains/activation/webstorm/20220809/"},next:{title:"miniprogramme-howto",permalink:"/docs/coding/Software/MiniProgramme/MiniProgramme-howto"}},b={},h=[{value:"my recommended configuration",id:"my-recommended-configuration",level:2},{value:"uncheck inspection on <code>redundant local variable</code>",id:"uncheck-inspection-on-redundant-local-variable",level:3},{value:"how to customize file template",id:"how-to-customize-file-template",level:2},{value:"\u6709\u54ea\u4e9b jb \u9884\u5b9a\u4e49\u7684\u53d8\u91cf",id:"\u6709\u54ea\u4e9b-jb-\u9884\u5b9a\u4e49\u7684\u53d8\u91cf",level:3},{value:"\u5982\u4f55\u5728\u5355\u6587\u4ef6\u5b9a\u4e49\u53d8\u91cf",id:"\u5982\u4f55\u5728\u5355\u6587\u4ef6\u5b9a\u4e49\u53d8\u91cf",level:3},{value:"\u5982\u4f55\u5f15\u7528\u5176\u4ed6\u6587\u4ef6",id:"\u5982\u4f55\u5f15\u7528\u5176\u4ed6\u6587\u4ef6",level:3},{value:"inspection on <code>suspicious.name.assignment</code>",id:"inspection-on-suspiciousnameassignment",level:2},{value:"nbsp \u7a7a\u683c\u663e\u793a\u8bbe\u7f6e",id:"nbsp-\u7a7a\u683c\u663e\u793a\u8bbe\u7f6e",level:2},{value:"jetbrains \u5404\u7248\u672c\u4e0b\u8f7d\u94fe\u63a5\u751f\u6210\u811a\u672c",id:"jetbrains-\u5404\u7248\u672c\u4e0b\u8f7d\u94fe\u63a5\u751f\u6210\u811a\u672c",level:2},{value:"BEST-PRACTICE: jetbrains version manage",id:"best-practice-jetbrains-version-manage",level:2},{value:"1. the plugin of <code>eval restart</code>",id:"1-the-plugin-of-eval-restart",level:3},{value:"2. the approach to manage versions",id:"2-the-approach-to-manage-versions",level:3},{value:"improve jetbrains efficiency",id:"improve-jetbrains-efficiency",level:2}],k={toc:h};function g(e){var t,o=e,{components:p}=o,m=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(o,["components"]);return(0,a.kt)("wrapper",(t=d(d({},k),m),i(t,r({components:p,mdxType:"MDXLayout"}))),(0,a.kt)("h1",d({},{id:"jetbrains-howto"}),"jetbrains-howto"),(0,a.kt)("h2",d({},{id:"my-recommended-configuration"}),"my recommended configuration"),(0,a.kt)("h3",d({},{id:"uncheck-inspection-on-redundant-local-variable"}),"uncheck inspection on ",(0,a.kt)("inlineCode",{parentName:"h3"},"redundant local variable")),(0,a.kt)("p",null,"config:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 2",src:n(68615).Z,width:"1964",height:"1424"}),"  "),(0,a.kt)("p",null,"reason: \u65b9\u4fbf\u968f\u65f6\u5f00\u5408\u4e00\u4e9b\u7a0b\u5e8f\u903b\u8f91\uff0cinline\u4e0d\u65b9\u4fbf"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 1",src:n(54252).Z,width:"1630",height:"376"}),"  "),(0,a.kt)("p",null,"if not:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 3",src:n(71467).Z,width:"1120",height:"378"}),"  "),(0,a.kt)("h2",d({},{id:"how-to-customize-file-template"}),"how to customize file template"),(0,a.kt)("admonition",d({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"jb \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"file template")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"live template")," \u662f\u4e24\u5957\u4e0d\u540c\u7684\u4f53\u7cfb\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"live template")," \u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"EDIT VARIABLES")," \u53bb\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u4f46\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file template")," \u4e2d\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"velocity")," \u8bed\u6cd5\uff0c\u5b9e\u73b0\u65b9\u5f0f\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u5177\u4f53\u89c1\u4e0b\u6587\u3002")),(0,a.kt)("p",null,"\u6253\u5f00\u6587\u4ef6\u6a21\u677f\u53ef\u4ee5\u770b\u5230\u6709\u4e2a ",(0,a.kt)("a",d({parentName:"p"},{href:"https://velocity.apache.org/engine/devel/user-guide.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"Apache Velocity"))," \u7684\u8d85\u94fe\u63a5\uff0c\u5b83\u8868\u793a jb \u7684\u6587\u4ef6\u6a21\u677f\u662f\u57fa\u4e8e Velocity \u8fd9\u95e8\u8bed\u8a00\u7684\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 1",src:n(19484).Z,width:"1964",height:"1416"}),"  "),(0,a.kt)("h3",d({},{id:"\u6709\u54ea\u4e9b-jb-\u9884\u5b9a\u4e49\u7684\u53d8\u91cf"}),"\u6709\u54ea\u4e9b jb \u9884\u5b9a\u4e49\u7684\u53d8\u91cf"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a",(0,a.kt)("a",d({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/file-template-variables.html"}),"File template variables | IntelliJ\xa0IDEA")),(0,a.kt)("p",null,"\u6709\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 5",src:n(71546).Z,width:"1478",height:"1806"}),"  "),(0,a.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6ca1\u6709\u73b0\u6210\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," \u683c\u5f0f\u7684\u65e5\u671f\u3002\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u9700\u8981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"velocity")," \u8bed\u6cd5\u53bb\u5b9e\u73b0\u3002"),(0,a.kt)("h3",d({},{id:"\u5982\u4f55\u5728\u5355\u6587\u4ef6\u5b9a\u4e49\u53d8\u91cf"}),"\u5982\u4f55\u5728\u5355\u6587\u4ef6\u5b9a\u4e49\u53d8\u91cf"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 4",src:n(42264).Z,width:"1964",height:"1416"}),"  "),(0,a.kt)("h3",d({},{id:"\u5982\u4f55\u5f15\u7528\u5176\u4ed6\u6587\u4ef6"}),"\u5982\u4f55\u5f15\u7528\u5176\u4ed6\u6587\u4ef6"),(0,a.kt)("p",null,"\u76f4\u63a5\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"#set")," \u7684\u90e8\u5206\u62c6\u51fa\u53bb\uff0c\u7136\u540e\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"#parse")," \u5bfc\u5165\u5373\u53ef\uff0c\u4e0d\u80fd\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"#include"),"\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"#include")," \u53ea\u662f\u7eaf\u6587\u672c\u5bfc\u5165\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"#parse")," \u53ef\u4ee5\u89e3\u6790\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 3",src:n(77759).Z,width:"1964",height:"1416"}),"  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"picture 2",src:n(3450).Z,width:"1964",height:"1416"}),"  "),(0,a.kt)("h2",d({},{id:"inspection-on-suspiciousnameassignment"}),"inspection on ",(0,a.kt)("inlineCode",{parentName:"h2"},"suspicious.name.assignment")),(0,a.kt)("p",null,"\u5b98\u65b9\u89e3\u91ca\uff1a",(0,a.kt)("a",d({parentName:"p"},{href:"https://www.jetbrains.com/help/phpstorm/javascript-and-typescript-suspicious-variable-parameter-name-combination.html"}),"Code Inspection: Suspicious variable/parameter name combination | PhpStorm")),(0,a.kt)("p",null,"stackoverflow \u7684\u8ba8\u8bba ",(0,a.kt)("a",d({parentName:"p"},{href:"https://stackoverflow.com/questions/34379580/intellij-says-should-probably-not-be-passed-as-parameter-x"}),"java - IntelliJ says, should probably not be passed as parameter x - Stack Overflow")),(0,a.kt)("p",null,"\u6307\u70b9\u7684 jb \u6e90\u7801\uff1a ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/JetBrains/intellij-community/blob/210e0ed138627926e10094bb9c76026319cec178/java/java-analysis-impl/src/com/intellij/codeInspection/suspiciousNameCombination/SuspiciousNameCombinationInspectionBase.java"}),"intellij-community/SuspiciousNameCombinationInspectionBase.java at 210e0ed138627926e10094bb9c76026319cec178 \xb7 JetBrains/intellij-community")),(0,a.kt)("h2",d({},{id:"nbsp-\u7a7a\u683c\u663e\u793a\u8bbe\u7f6e"}),"nbsp \u7a7a\u683c\u663e\u793a\u8bbe\u7f6e"),(0,a.kt)("p",null,"see: - ",(0,a.kt)("a",d({parentName:"p"},{href:"https://intellij-support.jetbrains.com/hc/en-us/community/posts/360009442799-2020-2-showing-NBSP-"}),"2020.2 showing |NBSP| \u2013 IDEs Support (IntelliJ Platform) | JetBrains")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Help | Find Action | Registry | editor.show.special.chars"),"\u91cc\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u9009\u62e9\u663e\u793a\u65f6\u7684\u6548\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",d({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/jetbrains-howto-1656906625520-b834c9aa7081ce0f8fea14255222028f1881e4618816dd8e13152c02a88fc208.png",alt:"picture 1"}))),(0,a.kt)("p",null,"\u9009\u62e9\u4e0d\u663e\u793a\u65f6\u7684\u6548\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",d({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/jetbrains-howto-1656906688216-fb4ab848042da8b9b6ae1b6cc157f786e80670190c1c525ca4d1a1c77c5873f8.png",alt:"picture 2"}))),(0,a.kt)("h2",d({},{id:"jetbrains-\u5404\u7248\u672c\u4e0b\u8f7d\u94fe\u63a5\u751f\u6210\u811a\u672c"}),"jetbrains \u5404\u7248\u672c\u4e0b\u8f7d\u94fe\u63a5\u751f\u6210\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),'def gen_download_url(software="webstorm", name="WebStorm", version="2020.3.3", suffix="exe"):\n    """\n    download page (webstorm as the example): https://www.jetbrains.com/webstorm/download/other.html\n    software: {pycharm, webstorm, ...}\n    suffix: {exe, dmg}\n    """\n    url_pycharm_professional = "https://download-cdn.jetbrains.com/python/pycharm-professional-2020.3.5.dmg"\n    url_webstorm = "https://download-cdn.jetbrains.com/webstorm/WebStorm-2020.3.3.exe"\n    return f"https://download-cdn.jetbrains.com/{software}/{name}-{version}.{suffix}"\n')),(0,a.kt)("h2",d({},{id:"best-practice-jetbrains-version-manage"}),"BEST-PRACTICE: jetbrains version manage"),(0,a.kt)("h3",d({},{id:"1-the-plugin-of-eval-restart"}),"1. the plugin of ",(0,a.kt)("inlineCode",{parentName:"h3"},"eval restart")),(0,a.kt)("p",null,"plugin repo: ",(0,a.kt)("a",d({parentName:"p"},{href:"https://plugins.zhile.io"}),"https://plugins.zhile.io")),(0,a.kt)("p",null,"plugin name: 'IDE Eval Reset'"),(0,a.kt)("p",null,(0,a.kt)("img",d({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/jetbrains-howto-1642485827260-f451b4ff7ea352b26fd4c6d13a512ff88c8ff067dd754cb9d51e1d979e6af907.png",alt:"picture 6"}))),(0,a.kt)("h3",d({},{id:"2-the-approach-to-manage-versions"}),"2. the approach to manage versions"),(0,a.kt)("p",null,"Download the toolbox at here: ","[JetBrains Toolbox App: Manage Your Tools with Ease]","(https://w ww.jetbrains.com/toolbox-app/)"),(0,a.kt)("p",null,"And then download or uninstall specific versions of jetbrains products."),(0,a.kt)("p",null,"For example, since the hack plugin of ",(0,a.kt)("inlineCode",{parentName:"p"},"eval start")," (which allows you to use jetbrains product periodically freely) won't support the versions of webstorm after 2021.2, we can easily download the old version in toolbox."),(0,a.kt)("p",null,(0,a.kt)("img",d({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/jetbrains-howto-1642485538134-6f36f7277858541772744c00ac24f01f243fcfd7b282a5aceddd5df6fc72c798.png",alt:"picture 4"}))),(0,a.kt)("p",null,(0,a.kt)("img",d({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/jetbrains-howto-1642485565528-42c0dec28204e8878ecf4f1a59ed5d70ef5d6cb428377f11fcb7cc885e842fd1.png",alt:"picture 5"}))),(0,a.kt)("p",null,"ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",d({parentName:"p"},{href:"https://www.macwk.com/article/jetbrains-crack"}),"JetBrains \u5168\u7cfb\u5217\u8f6f\u4ef6\u6fc0\u6d3b\u6559\u7a0b\u6fc0\u6d3b\u7801\u4ee5\u53ca JetBrains \u7cfb\u5217\u8f6f\u4ef6\u6c49\u5316\u5305"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",d({parentName:"p"},{href:"https://stackoverflow.com/questions/18519560/how-to-downgrade-intellij-to-older-version"}),"ide - How to downgrade IntelliJ to older version - Stack Overflow")))),(0,a.kt)("h2",d({},{id:"improve-jetbrains-efficiency"}),"improve jetbrains efficiency"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Disable all unnecessary plugins"),(0,a.kt)("li",{parentName:"ol"},"Increase memory for IntelliJ IDEA ","[Help / Change memory settings]"),(0,a.kt)("li",{parentName:"ol"},"Exclude folders and Unload modules"),(0,a.kt)("li",{parentName:"ol"},"Disable on-the-fly import management"),(0,a.kt)("li",{parentName:"ol"},"Pause inspections check")),(0,a.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640194669995-jetbrains-howto-bb60024de03a0f70a741740db732e6d44c514c077f1132051728b80595dcc2ae.png",width:"480"}),(0,a.kt)("p",null,"reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://blog.jetbrains.com/kotlin/2021/06/simple-steps-for-improving-your-ide-performance/"}),"Simple Steps for Improving Your IDE Performance | The Kotlin Blog"))))}g.isMDXComponent=!0},19484:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1659944256968-9c28020077b46cb3e832fb4e82592c773f7f7d3938d6220f798ee9aade0495ee-ac113e6fd5f1ff6f1c7ff155d87e95eb.png"},3450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1659944458582-903788f41d1c9ea4ca160995f91283837613adae08d1db577ca25f6a832d12a8-7a4f0e0126edb012b23fb30cba099c7f.png"},77759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1659944466625-76cfbfb2b60451d539b4650f0d4a8e3590cb6aa67801f925b5c1e379f2d5a3c7-7661f38b0c986cd333125bc825b1e767.png"},42264:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1659944488621-5a0c2ba00d050233eb31e308197c0d328da4e17f87ce8e6580da3dfb0d32cd2f-f493c046efd654f00ca89efbc098fc78.png"},71546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1659944611452-4585ddf5d80c3623410b937ac2d4da212df93a075e3d0f59d693b4f9bad2e842-3f022bbb6c4de715daa3805c6995f114.png"},54252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1660213177132-b4d99c8577d1ba67a26296ab2651dca3715c6447b3c38e77d0188fbaa222768d-075280e97503885aa082608abb417275.png"},68615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1660213190102-79e0a167e1914be5ced868e4f23dffa6d3648cfbdc8d3e1f6365c8755327aee1-cd7b2724133212c7db32c29bc97294a1.png"},71467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-howto-1660213284017-d9e0e69952e24660cdd6bbc61780a80284396c6cf2802776ee6a15ed74960ec9-061922674af7d54536dbcccd21b48a36.png"}}]);