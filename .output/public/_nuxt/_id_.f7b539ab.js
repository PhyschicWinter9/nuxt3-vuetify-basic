import{d as b,G as g,x,c as _,i as e,b as t,e as s,w as n,a,o as i,t as l,f as y}from"./entry.994f4589.js";import{u as k}from"./fetch.22926a17.js";const C={class:"mb-5"},B={key:0},N={class:"wrapper"},V={class:"text-center"},$={class:"ui-title font-weight-bold text-white mb-4 mt-5"},D=["src","alt"],G={class:"my-4"},j={class:"my-4"},A=["href"],F=t("br",null,null,-1),H={key:1,class:"text-center py-10"},S=b({__name:"[id]",async setup(L){let c,r;const d=g(),{data:o,pending:m}=([c,r]=x(()=>k(`https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news/${d.params.id}`,"$gCGZlHWk1Q")),c=await c,r(),c);return(p,u)=>{const f=a("v-col"),h=a("v-row"),v=a("v-icon"),w=a("v-btn"),E=a("v-container");return i(),_("div",C,[e(m)?(i(),_("div",H,"Loading...")):(i(),_("div",B,[t("div",N,[s(h,{justify:"center"},{default:n(()=>[s(f,{cols:"12",sm:"10",md:"9",lg:"7"},{default:n(()=>[t("div",V,[t("h2",$,l(e(o).topic),1)])]),_:1})]),_:1})]),s(E,null,{default:n(()=>[t("img",{src:e(o).imageurl,alt:e(o).topic,class:"w-100"},null,8,D),t("h3",G,l(e(o).detail),1),t("p",j,l(e(o).created_at),1),t("a",{href:e(o).linkurl,target:"_blank"},"\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",8,A),F,s(w,{color:"primary",fab:"",dark:"",fixed:"",bottom:"",left:"",class:"mb-5 ml-5",onClick:u[0]||(u[0]=()=>p.$router.go(-1))},{default:n(()=>[s(v,null,{default:n(()=>[y("mdi-arrow-left")]),_:1})]),_:1})]),_:1})]))])}}});export{S as default};
