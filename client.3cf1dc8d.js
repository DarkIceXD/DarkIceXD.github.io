import{o as u,p as h,q as b,h as m}from"./chunks/web.a6dc0034.js";var w=r=>(n,s,o,{client:a})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!r.hasAttribute("ssr"))return;const d=a==="only"?h:b;let t={};if(Object.keys(o).length>0)if(u.context)r.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,f]of Object.entries(o))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=f;const{default:l,...i}=t,c=r.dataset.solidRenderId;d(()=>m(n,{...s,...i,children:l}),r,{renderId:c})};export{w as default};
