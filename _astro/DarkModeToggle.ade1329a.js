import{c as s,j as c,d as i,g as l,i as u,b as a,r as d,t as m,S as g}from"./web.14707a3e.js";import{a as k,b as f}from"./index.a3a4e828.js";const p=m("<button class=mx-4>"),n=24;var e=function(e){return e[e.Dark=0]="Dark",e[e.Light=1]="Light",e}(e||{});const D=()=>{const a=parseInt(localStorage.theme);return isNaN(a)?e.Dark:a},[r,h]=s(D()),o=()=>{r()===e.Dark?(document.documentElement.classList.add("dark"),localStorage.theme=e.Dark):(document.documentElement.classList.remove("dark"),localStorage.theme=e.Light)};function L(){return(()=>{const t=l(p);return t.$$click=()=>h(r()===e.Dark?e.Light:e.Dark),u(t,a(g,{get when(){return r()===e.Dark},get fallback(){return a(k,{size:n})},get children(){return a(f,{size:n})}})),d(),t})()}c(o),document.addEventListener("astro:after-swap",o),i(["click"]);export{L as default};