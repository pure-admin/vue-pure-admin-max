import{az as e}from"./index-CRNrcdxt.js";const r=t=>e.request("post","/user",{data:t}),o=()=>e.request("get","/list-all-role"),n=t=>e.request("post","/list-role-ids",{data:t}),u=t=>e.request("post","/role",{data:t}),g=t=>e.request("post","/menu",{data:t}),i=t=>e.request("post","/dept",{data:t}),l=t=>e.request("post","/online-logs",{data:t}),a=t=>e.request("post","/login-logs",{data:t}),c=t=>e.request("post","/operation-logs",{data:t}),p=t=>e.request("post","/system-logs",{data:t}),q=t=>e.request("post","/system-logs-detail",{data:t}),L=t=>e.request("post","/role-menu",{data:t}),d=t=>e.request("post","/role-menu-ids",{data:t}),m=()=>e.request("get","/dict-tree"),D=t=>e.request("post","/dict-detail",{data:t});export{c as a,q as b,p as c,l as d,i as e,D as f,a as g,m as h,g as i,L as j,u as k,d as l,o as m,r as n,n as o};