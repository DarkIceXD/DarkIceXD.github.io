import{c as p,d as Q,g as h,a as U,i as l,e as b,b as f,r as u,t as m,s as A,F as E,f as V}from"./web.edff3902.js";import{B as W}from"./index.4d8b2a78.js";import{r as X}from"./readFile.fb16cf44.js";const Y=m('<div class="bg-white dark:bg-slate-800 shadow rounded-md space-y-6 p-6"><input type="file" accept=".json"><textarea rows="4" placeholder="Filter" class="form-textarea shadow w-full rounded bg-gray-50 dark:bg-slate-800"></textarea><table class="w-full text-center"><thead class="border-b"><tr><th class="px-1">Avatar</th><th class="px-1">Name</th><th class="px-1">Real name</th><th class="px-1">Creation date</th><th class="px-1">Remove</th></tr></thead><tbody class="border-b"></tbody></table><div class="flex justify-center"><ul class="inline-flex items-center justify-center"><li><a class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a></li><!#><!/><li><a class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">'),Z=m('<tr><td><a target="_blank" rel="noopener noreferrer"><img alt="" srcset=""></a></td><td></td><td></td><td></td><td><button class="bg-red-600 text-white rounded shadow hover:bg-red-700 hover:shadow-lg active:bg-red-800 active:shadow-lg transition duration-300">'),ee=m("<li><a>"),x=100,F=10;let R=[];const[$,j]=p([]),[te,re]=p([]),[n,ae]=p(parseInt(localStorage.getItem("page")??1)),v=new Set(JSON.parse(localStorage.getItem("blackList"))),le=e=>{R=JSON.parse(e),B(localStorage.getItem("filter")??"")},z=()=>Math.ceil($().length/x),se=(e,r)=>{for(let t=1;t<=2;t++)if(e[t]&&e[t].toLowerCase().split(" ").some(s=>r.includes(s)))return!1;return!0},B=e=>{const r=e.split(/[ ,]+/);j(R.filter(t=>!v.has(t[0])&&se(t,r))),d(n()),localStorage.setItem("filter",e)},d=e=>{if(e<=0||e>z())return;const r=(e-1)*x,t=r+x;ae(e),re($().slice(r,t)),localStorage.setItem("page",e)},ie=e=>{const r=parseInt(e)*1e3;return new Date(r).toLocaleDateString()},ne=e=>{j($().filter(r=>r[0]!=e)),d(n()),v.add(e),localStorage.setItem("blackList",JSON.stringify(Array.from(v)))},oe=(e,r)=>{const t=Math.max(0,e-F),s=Math.min(r,e+F);return Array.from({length:s-t},(_,c)=>c+t)};function he(){return(()=>{const e=h(Y),r=e.firstChild,t=r.nextSibling,s=t.nextSibling,_=s.firstChild,c=_.nextSibling,D=s.nextSibling,y=D.firstChild,k=y.firstChild,J=k.firstChild,O=k.nextSibling,[w,T]=U(O.nextSibling),H=w.nextSibling,q=H.firstChild;return r.$$input=a=>X(a.target.files[0],le),t.addEventListener("change",a=>B(a.currentTarget.value)),l(c,b(E,{get each(){return te()},children:a=>(()=>{const o=h(Z),i=o.firstChild,S=i.firstChild,G=S.firstChild,C=i.nextSibling,I=C.nextSibling,L=I.nextSibling,K=L.nextSibling,N=K.firstChild;return l(C,()=>a[1]),l(I,()=>a[2]),l(L,()=>ie(a[4])),N.$$click=()=>ne(a[0]),l(N,b(W,{size:64})),f(g=>{const M="https://steamcommunity.com/profiles/"+a[0],P="https://avatars.steamstatic.com/"+a[3]+"_full.jpg";return M!==g._v$&&A(S,"href",g._v$=M),P!==g._v$2&&A(G,"src",g._v$2=P),g},{_v$:void 0,_v$2:void 0}),u(),o})()})),J.$$click=()=>d(n()-1),l(y,b(E,{get each(){return oe(n(),z())},children:a=>(()=>{const o=h(ee),i=o.firstChild;return i.$$click=()=>d(a+1),l(i,a+1),f(()=>V(i,n()==a+1?"z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white":"px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white")),u(),o})()}),w,T),q.$$click=()=>d(n()+1),f(()=>t.value=localStorage.getItem("filter")||""),u(),e})()}Q(["input","click"]);export{he as default};
