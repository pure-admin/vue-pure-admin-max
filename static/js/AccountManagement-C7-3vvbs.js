import{d as v,a as b,e as s,f as n,k as a,g as t,F as g,l as k,t as o,i as l,w as i,h as r,v as y,u as C,X as w,J as h,_ as A}from"./index-DUhDYU9H.js";const B={class:"flex items-center"},M={class:"flex-1"},N=v({name:"AccountManagement",__name:"AccountManagement",setup(V){const u=b([{title:"账户密码",illustrate:"当前密码强度：强",button:"修改"},{title:"密保手机",illustrate:"已经绑定手机：158****6789",button:"修改"},{title:"密保问题",illustrate:"未设置密保问题，密保问题可有效保护账户安全",button:"修改"},{title:"备用邮箱",illustrate:"已绑定邮箱：pure***@163.com",button:"修改"}]);function _(m){h("请根据具体业务自行实现",{type:"success"})}return(m,c)=>{const d=s("el-text"),p=s("el-button"),f=s("el-divider");return n(),a("div",{class:y(["min-w-[180px]",C(w)()?"max-w-[100%]":"max-w-[70%]"])},[c[0]||(c[0]=t("h3",{class:"my-8"},"账户管理",-1)),(n(!0),a(g,null,k(u.value,(e,x)=>(n(),a("div",{key:x},[t("div",B,[t("div",M,[t("p",null,o(e.title),1),l(d,{class:"mx-1",type:"info"},{default:i(()=>[r(o(e.illustrate),1)]),_:2},1024)]),l(p,{type:"primary",text:"",onClick:F=>_()},{default:i(()=>[r(o(e.button),1)]),_:2},1032,["onClick"])]),l(f)]))),128))],2)}}}),D=A(N,[["__scopeId","data-v-c4b71ab0"]]);export{D as default};