import{c as x,d as C,g as c,r as E,i as b,u as R,t as p}from"./web.Bu1xcW7n.js";var S=p('<button class="px-6 py-2.5 bg-blue-600 text-white rounded shadow hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-300">Start'),L=p('<h5 class="text-xl font-medium">'),$=p('<canvas class="w-full sm:w-2/3 border"width=640 height=550>');const A="blue",k="red",O="yellow",P=80,I=10,a={x:7,y:6},w=(t,e,r)=>{e.fillStyle=A,e.fillRect(0,0,r.x,r.y);for(let r=0;r<a.x;r++)for(let l=0;l<a.y;l++){e.beginPath();const o=50;e.arc((r+1)*o+40*r,(l+1)*o+40*l,40,0,2*Math.PI),1===t[r][a.y-1-l]?e.fillStyle=k:2===t[r][a.y-1-l]?e.fillStyle=O:e.fillStyle="white",e.fill()}},j=(t,e)=>{for(let r=0;r<a.x;r++)if(t<(r+1)*e/a.x)return r;return a.x},m=(t,e)=>{if(a.x<=e)return-1;for(let r=0;r<a.y;r++)if(0===f[e][r])return f[e][r]=t,r;return-1},M=t=>{for(let e=0;e<a.x;e++)for(let r=0;r<a.y;r++)if(0===t[e][r])return!1;return!0},U=(t,e,r)=>{const l=t[e][r];{let o=1,f=e+1;for(;f<a.x&&t[f][r]===l;)f++,o++;for(f=e-1;f>=0&&t[f][r]===l;)f--,o++;if(o>=4)return!0}{let o=1,f=r+1;for(;f<a.y&&t[e][f]===l;)f++,o++;for(f=r-1;f>=0&&t[e][f]===l;)f--,o++;if(o>=4)return!0}{let o=1,f=e+1,n=r+1;for(;f<a.x&&n<a.y&&t[f][n]===l;)f++,n++,o++;for(f=e-1,n=r-1;f>=0&&n>=0&&t[f][n]===l;)f--,n--,o++;if(o>=4)return!0}{let o=1,f=e+1,n=r-1;for(;f<a.x&&n>=0&&t[f][n]===l;)f++,n--,o++;for(f=e-1,n=r+1;f>=0&&n<a.y&&t[f][n]===l;)f--,n++,o++;if(o>=4)return!0}return!1};let h,y,_,o,f,u=!1;const[W,d]=x("Press Start"),g=(t,e)=>{d(e?1===t?"Red player won":"Yellow player won":1===t?"Red players turn":"Yellow players turn")},v=t=>{if(!u)return;const e=j(t.offsetX,_),r=m(o,e);-1!==r&&(w(f,h,y),U(f,e,r)?(u=!1,g(o,!0)):M(f)?(u=!1,d("It's a tie")):(o=1===o?2:1,g(o,!1)))};function G(){let t;const e=()=>{if(t.setAttribute("tabindex","0"),t.focus(),!u){u=!0,t.removeEventListener("click",v),t.addEventListener("click",v),f=[];for(let t=0;t<a.x;t++){f[t]=[];for(let e=0;e<a.y;e++)f[t][e]=0}o=1,g(o,!1),y={x:t.width,y:t.height},_=t.clientWidth,h=t.getContext("2d",{alpha:!1}),w(f,h,y)}};return[(r=c(S),r.$$click=e,E(),r),(()=>{var t=c(L);return b(t,W),t})(),(()=>{var e=c($);return"function"==typeof t?R(t,e):t=e,e})()];var r}C(["click"]);export{G as default};