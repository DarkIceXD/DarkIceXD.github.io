import{c as s,j as o,d as c,g as l,i,b as t,r as m,t as d,S as u}from"./web.Bu1xcW7n.js";import{a as g,b as f}from"./index.BBXjoZ-P.js";var p=d("<button class=mx-4>");const r=24,S=()=>{const t=parseInt(localStorage.theme);return isNaN(t)?0:t},[a,h]=s(S()),n=()=>{0===a()?(document.documentElement.classList.add("dark"),localStorage.theme=0):(document.documentElement.classList.remove("dark"),localStorage.theme=1)};function v(){return(e=l(p)).$$click=()=>h(0===a()?1:0),i(e,t(u,{get when(){return 0===a()},get fallback(){return t(g,{size:r})},get children(){return t(f,{size:r})}})),m(),e;var e}o(n),document.addEventListener("astro:after-swap",n),c(["click"]);export{v as default};