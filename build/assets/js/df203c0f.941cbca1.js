"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99924],{92186:(e,t,l)=>{l.r(t),l.d(t,{default:()=>F});var r=l(27378),a=l(38944),n=l(35029),o=l(24755),c=l(41148),s=l(36609),i=l(65001),u=l(69782),m=Object.defineProperty,g=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,E=(e,t,l)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,b=(e,t)=>{for(var l in t||(t={}))f.call(t,l)&&E(e,l,t[l]);if(p)for(var l of p(t))h.call(t,l)&&E(e,l,t[l]);return e},w=(e,t)=>g(e,d(t));function y(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,i.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}();return(0,i.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:t(e.tag.count),tagName:e.tag.label})}function P({doc:e}){return r.createElement("article",{className:"margin-vert--lg"},r.createElement(n.Z,{to:e.permalink},r.createElement("h2",null,e.title)),e.description&&r.createElement("p",null,e.description))}function O({title:e}){return r.createElement(r.Fragment,null,r.createElement(c.d,{title:e}),r.createElement(u.Z,{tag:"doc_tag_doc_list"}))}function v({tag:e,title:t}){return r.createElement(c.FG,{className:(0,a.Z)(s.k.page.docsTagDocListPage)},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,t),r.createElement(n.Z,{href:e.allTagsPath},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement("section",{className:"margin-vert--lg"},e.items.map((e=>r.createElement(P,{key:e.id,doc:e}))))))))}function F(e){const t=y(e);return r.createElement(r.Fragment,null,r.createElement(O,w(b({},e),{title:t})),r.createElement(v,w(b({},e),{title:t})))}},24755:(e,t,l)=>{l.d(t,{c:()=>i});var r=l(27378),a=l(21638);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=s();return{selectMessage:(t,l)=>function(e,t,l){const r=e.split("|");if(1===r.length)return r[0];r.length>l.pluralForms.length&&console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=l.select(t),n=l.pluralForms.indexOf(a);return r[Math.min(n,r.length-1)]}(l,t,e)}}}}]);