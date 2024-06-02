var F=Object.defineProperty;var L=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var S=(o,e,t)=>e in o?F(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,x=(o,e)=>{for(var t in e||(e={}))G.call(e,t)&&S(o,t,e[t]);if(L)for(var t of L(e))W.call(e,t)&&S(o,t,e[t]);return o};import{fR as w,p as A,fV as q,fK as P,V as z,a as C,ax as B,fW as O,av as V,fC as H,fU as _,fX as Q}from"./index-DwVaZ8zA.js";import{u as U}from"./app-D5QfrJyh.js";import{u as M}from"./epTheme-D8Hwiz4S.js";function K(){const{$storage:o,$config:e}=w(),t=()=>{var r,v,i,m,h,c,p,$,g,b,u,l,f,d,s,T,y;q().multiTagsCache&&(!o.tags||o.tags.length===0)&&(o.tags=P),o.locale||(o.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},z().locale.value=(v=e==null?void 0:e.Locale)!=null?v:"zh"),o.layout||(o.layout={layout:(i=e==null?void 0:e.Layout)!=null?i:"vertical",theme:(m=e==null?void 0:e.Theme)!=null?m:"light",darkMode:(h=e==null?void 0:e.DarkMode)!=null?h:!1,sidebarStatus:(c=e==null?void 0:e.SidebarStatus)!=null?c:!0,epThemeColor:(p=e==null?void 0:e.EpThemeColor)!=null?p:"#409EFF",themeColor:($=e==null?void 0:e.Theme)!=null?$:"light",overallStyle:(g=e==null?void 0:e.OverallStyle)!=null?g:"light"}),o.configure||(o.configure={grey:(b=e==null?void 0:e.Grey)!=null?b:!1,weak:(u=e==null?void 0:e.Weak)!=null?u:!1,hideTabs:(l=e==null?void 0:e.HideTabs)!=null?l:!1,hideFooter:(f=e.HideFooter)!=null?f:!0,showLogo:(d=e==null?void 0:e.ShowLogo)!=null?d:!0,showModel:(s=e==null?void 0:e.ShowModel)!=null?s:"smart",multiTagsCache:(T=e==null?void 0:e.MultiTagsCache)!=null?T:!1,stretch:(y=e==null?void 0:e.Stretch)!=null?y:!1})},a=A(()=>o==null?void 0:o.layout.layout),n=A(()=>o.layout);return{layout:a,layoutTheme:n,initStorage:t}}const k={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/Users/zhangyi/Desktop/vue-pure-admin-max/node_modules/.pnpm/@pureadmin+theme@3.2.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #000000d9 !default;
        $menuBg: #fff !default;
        $menuHover: #f6f6f6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: rgb(0 0 0 / 60%) !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
        $menuBorderColor: rgb(5 5 5 / 6%) !default;
      `},{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: rgb(64 145 247 / 15%) !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
        $menuBorderColor: rgb(253 253 253 / 12%) !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: rgb(105 58 201 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
        $menuBorderColor: rgb(253 253 253 / 12%) !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: rgb(216 68 147 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
        $menuBorderColor: rgb(253 253 253 / 12%) !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: rgb(225 60 57 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
        $menuBorderColor: rgb(253 253 253 / 12%) !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: rgb(232 95 51 / 15%) !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
        $menuBorderColor: rgb(253 253 253 / 12%) !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: rgb(89 191 193 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
        $menuBorderColor: rgb(253 253 253 / 12%) !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: rgb(96 172 128 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
        $menuBorderColor: rgb(253 253 253 / 12%) !default;
      `}]},X="/vue-pure-admin-max/",J="assets",D=o=>{let e=o.replace("#","").match(/../g);for(let t=0;t<3;t++)e[t]=parseInt(e[t],16);return e},R=(o,e,t)=>{let a=[o.toString(16),e.toString(16),t.toString(16)];for(let n=0;n<3;n++)a[n].length==1&&(a[n]=`0${a[n]}`);return`#${a.join("")}`},Y=(o,e)=>{let t=D(o);for(let a=0;a<3;a++)t[a]=Math.floor(t[a]*(1-e));return R(t[0],t[1],t[2])},Z=(o,e)=>{let t=D(o);for(let a=0;a<3;a++)t[a]=Math.floor((255-t[a])*e+t[a]);return R(t[0],t[1],t[2])},E=o=>`(^${o}\\s+|\\s+${o}\\s+|\\s+${o}$|^${o}$)`,N=({scopeName:o,multipleScopeVars:e})=>{const t=Array.isArray(e)&&e.length?e:k.multipleScopeVars;let a=document.documentElement.className;new RegExp(E(o)).test(a)||(t.forEach(n=>{a=a.replace(new RegExp(E(n.scopeName),"g"),` ${o} `)}),document.documentElement.className=a.replace(/(^\s+|\s+$)/g,""))},I=({id:o,href:e})=>{const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t.id=o,t},ee=o=>{const e=x({scopeName:"theme-default",customLinkHref:r=>r},o),t=e.themeLinkTagId||k.themeLinkTagId;let a=document.getElementById(t);const n=e.customLinkHref(`${X.replace(/\/$/,"")}${`/${J}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(a){a.id=`${t}_old`;const r=I({id:t,href:n});a.nextSibling?a.parentNode.insertBefore(r,a.nextSibling):a.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{a.parentNode.removeChild(a),a=null},60),N(e)};return}a=I({id:t,href:n}),N(e),document[(e.themeLinkTagInjectTo||k.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(a)};function le(){var g,b;const{layoutTheme:o,layout:e}=K(),t=C([{color:"#ffffff",themeColor:"light"},{color:"#1b2a47",themeColor:"default"},{color:"#722ed1",themeColor:"saucePurple"},{color:"#eb2f96",themeColor:"pink"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"}]),{$storage:a}=w(),n=C((g=a==null?void 0:a.layout)==null?void 0:g.darkMode),r=C((b=a==null?void 0:a.layout)==null?void 0:b.overallStyle),v=document.documentElement;function i(u,l,f){const d=f||document.body;let{className:s}=d;s=s.replace(l,"").trim(),d.className=u?`${s} ${l}`:s}function m(u=(f=>(f=B().Theme)!=null?f:"light")(),l=!0){var s,T;o.value.theme=u,ee({scopeName:`layout-theme-${u}`});const d=a.layout.themeColor;if(a.layout={layout:e.value,theme:u,darkMode:n.value,sidebarStatus:(s=a.layout)==null?void 0:s.sidebarStatus,epThemeColor:(T=a.layout)==null?void 0:T.epThemeColor,themeColor:l?u:d,overallStyle:r.value},u==="default"||u==="light")c(B().EpThemeColor);else{const y=t.value.find(j=>j.themeColor===u);c(y.color)}}function h(u,l,f){document.documentElement.style.setProperty(`--el-color-primary-${u}-${l}`,n.value?Y(f,l/10):Z(f,l/10))}const c=u=>{M().setEpThemeColor(u),document.documentElement.style.setProperty("--el-color-primary",u);for(let l=1;l<=2;l++)h("dark",l,u);for(let l=1;l<=9;l++)h("light",l,u)};function p(u){r.value=u,M().epTheme==="light"&&n.value?m("default",!1):m(M().epTheme,!1),n.value?document.documentElement.classList.add("dark"):(a.layout.themeColor==="light"&&m("light",!1),document.documentElement.classList.remove("dark"))}function $(){O(),V().clear();const{Grey:u,Weak:l,MultiTagsCache:f,EpThemeColor:d,Layout:s}=B();U().setLayout(s),c(d),H().multiTagsCacheChange(f),i(u,"html-grey",document.querySelector("html")),i(l,"html-weakness",document.querySelector("html")),_.push("/login"),H().handleTags("equal",[...P]),Q()}return{body:v,dataTheme:n,overallStyle:r,layoutTheme:o,themeColors:t,onReset:$,toggleClass:i,dataThemeChange:p,setEpThemeColor:c,setLayoutThemeColor:m}}export{K as a,ee as t,le as u};
