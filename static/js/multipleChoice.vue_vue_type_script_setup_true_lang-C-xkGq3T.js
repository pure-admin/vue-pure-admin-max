import{t as l}from"./data-C5_mO919.js";import{d as b,a as p,e as c,f as C,k as v,i as a,u as s,g as k,w as d,h as u}from"./index-DUhDYU9H.js";const S={style:{"margin-top":"20px"}},y=b({__name:"multipleChoice",setup(x){const r=p(),f=p([]),i=t=>{const{toggleRowSelection:e,clearSelection:n}=r.value.getTableRef();t?t.forEach(o=>{e(o,void 0)}):n()},m=t=>{f.value=t},g=[{type:"selection",align:"left"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const n=c("pure-table"),o=c("el-button");return C(),v("div",null,[a(n,{ref_key:"tableRef",ref:r,data:s(l),columns:g,onSelectionChange:m},null,8,["data"]),k("div",S,[a(o,{onClick:e[0]||(e[0]=_=>i([s(l)[1],s(l)[2]]))},{default:d(()=>e[2]||(e[2]=[u(" Toggle selection status of second and third rows ")])),_:1}),a(o,{onClick:e[1]||(e[1]=_=>i())},{default:d(()=>e[3]||(e[3]=[u("Clear selection")])),_:1})])])}}});export{y as _};