import{d as y,fZ as w,e as d,A as g,f as i,k,g as r,t as B,u as o,B as p,a2 as x,i as s,w as e,h as t,gh as u,b as a,j as b}from"./index-ap0ALObO.js";const C={class:"mb-2"},N={class:"mb-2"},P=r("div",{class:"card-header"},"组件方式判断权限",-1),V=r("div",{class:"card-header"},"函数方式判断权限",-1),D=r("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),H=y({name:"PermissionButtonLogin",__name:"perms",setup(S){const{permissions:f}=w();return(j,A)=>{var h;const v=d("el-link"),n=d("el-button"),m=d("Perms",!0),l=d("el-space"),c=d("el-card"),_=g("perms");return i(),k("div",null,[r("p",C,"当前拥有的code列表："+B(o(f)),1),p(r("p",N," *:*:* 代表拥有全部按钮级别权限 ",512),[[x,((h=o(f))==null?void 0:h[0])==="*:*:*"]]),s(c,{shadow:"never",class:"mb-2"},{header:e(()=>[P,s(v,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/permission/button/perms.vue",target:"_blank"},{default:e(()=>[t(" 代码位置 src/views/permission/button/perms.vue ")]),_:1})]),default:e(()=>[s(l,{wrap:""},{default:e(()=>[s(m,{value:"permission:btn:add"},{default:e(()=>[s(n,{plain:"",type:"warning"},{default:e(()=>[t(" 拥有code：'permission:btn:add' 权限可见 ")]),_:1})]),_:1}),s(m,{value:["permission:btn:edit"]},{default:e(()=>[s(n,{plain:"",type:"primary"},{default:e(()=>[t(" 拥有code：['permission:btn:edit'] 权限可见 ")]),_:1})]),_:1}),s(m,{value:["permission:btn:add","permission:btn:edit","permission:btn:delete"]},{default:e(()=>[s(n,{plain:"",type:"danger"},{default:e(()=>[t(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")]),_:1})]),_:1})]),_:1})]),_:1}),s(c,{shadow:"never",class:"mb-2"},{header:e(()=>[V]),default:e(()=>[s(l,{wrap:""},{default:e(()=>[o(u)("permission:btn:add")?(i(),a(n,{key:0,plain:"",type:"warning"},{default:e(()=>[t(" 拥有code：'permission:btn:add' 权限可见 ")]),_:1})):b("",!0),o(u)(["permission:btn:edit"])?(i(),a(n,{key:1,plain:"",type:"primary"},{default:e(()=>[t(" 拥有code：['permission:btn:edit'] 权限可见 ")]),_:1})):b("",!0),o(u)(["permission:btn:add","permission:btn:edit","permission:btn:delete"])?(i(),a(n,{key:2,plain:"",type:"danger"},{default:e(()=>[t(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")]),_:1})):b("",!0)]),_:1})]),_:1}),s(c,{shadow:"never"},{header:e(()=>[D]),default:e(()=>[s(l,{wrap:""},{default:e(()=>[p((i(),a(n,{plain:"",type:"warning"},{default:e(()=>[t(" 拥有code：'permission:btn:add' 权限可见 ")]),_:1})),[[_,"permission:btn:add"]]),p((i(),a(n,{plain:"",type:"primary"},{default:e(()=>[t(" 拥有code：['permission:btn:edit'] 权限可见 ")]),_:1})),[[_,["permission:btn:edit"]]]),p((i(),a(n,{plain:"",type:"danger"},{default:e(()=>[t(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")]),_:1})),[[_,["permission:btn:add","permission:btn:edit","permission:btn:delete"]]])]),_:1})]),_:1})])}}});export{H as default};