import{d as _,a as c,b as l,w as e,e as a,f as m,i as u,h as i,g as t}from"./index-CcH4JEIi.js";const d={BASE_URL:"/vue-pure-admin-max/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CDN:"false",VITE_COMPRESSION:"none",VITE_HIDE_HOME:"false",VITE_PORT:"8848",VITE_PUBLIC_PATH:"/vue-pure-admin-max/",VITE_ROUTER_HISTORY:"hash"},p=t("div",{class:"card-header"},[t("span",{class:"font-medium"},"通过 iframe 引入按钮页面")],-1),f=["src"],I=_({name:"ButtonPage",__name:"button",setup(h){const{VITE_PUBLIC_PATH:s}=d,n=c(`${s}html/button.html`);return(v,E)=>{const o=a("el-link"),r=a("el-card");return m(),l(r,{shadow:"never"},{header:e(()=>[p,u(o,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/button.vue",target:"_blank"},{default:e(()=>[i(" 代码位置 src/views/components/button.vue ")]),_:1})]),default:e(()=>[t("iframe",{src:n.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,f)]),_:1})}}});export{I as default};