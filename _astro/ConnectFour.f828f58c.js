import{c as C,d as E,g as c,r as b,i as R,u as S,t as p}from"./web.8890ad50.js";const v=p('<button class="px-6 py-2.5 bg-blue-600 text-white rounded shadow hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-300">Start'),L=p('<h5 class="text-xl font-medium">'),$=p('<canvas class="w-full sm:w-2/3 border" width="640" height="550">'),A="blue",k="red",O="yellow",P=80,I=10,n={x:7,y:6},_=(t,e,r)=>{e.fillStyle=A,e.fillRect(0,0,r.x,r.y);for(let r=0;r<n.x;r++)for(let l=0;l<n.y;l++){e.beginPath();const o=50;e.arc((r+1)*o+40*r,(l+1)*o+40*l,40,0,2*Math.PI),1===t[r][n.y-1-l]?e.fillStyle=k:2===t[r][n.y-1-l]?e.fillStyle=O:e.fillStyle="white",e.fill()}},j=(t,e)=>{for(let r=0;r<n.x;r++)if(t<(r+1)*e/n.x)return r;return n.x},m=(t,e)=>{if(n.x<=e)return-1;for(let r=0;r<n.y;r++)if(0===f[e][r])return f[e][r]=t,r;return-1},M=t=>{for(let e=0;e<n.x;e++)for(let r=0;r<n.y;r++)if(0===t[e][r])return!1;return!0},U=(t,e,r)=>{const l=t[e][r];{let o=1,f=e+1;for(;f<n.x&&t[f][r]===l;)f++,o++;for(f=e-1;f>=0&&t[f][r]===l;)f--,o++;if(o>=4)return!0}{let o=1,f=r+1;for(;f<n.y&&t[e][f]===l;)f++,o++;for(f=r-1;f>=0&&t[e][f]===l;)f--,o++;if(o>=4)return!0}{let o=1,f=e+1,i=r+1;for(;f<n.x&&i<n.y&&t[f][i]===l;)f++,i++,o++;for(f=e-1,i=r-1;f>=0&&i>=0&&t[f][i]===l;)f--,i--,o++;if(o>=4)return!0}{let o=1,f=e+1,i=r-1;for(;f<n.x&&i>=0&&t[f][i]===l;)f++,i--,o++;for(f=e-1,i=r+1;f>=0&&i<n.y&&t[f][i]===l;)f--,i++,o++;if(o>=4)return!0}return!1};let h,y,x,o,f,u=!1;const[W,d]=C("Press Start"),g=(t,e)=>{d(e?1===t?"Red player won":"Yellow player won":1===t?"Red players turn":"Yellow players turn")},w=t=>{if(!u)return;const e=j(t.offsetX,x),r=m(o,e);-1!==r&&(_(f,h,y),U(f,e,r)?(u=!1,g(o,!0)):M(f)?(u=!1,d("It's a tie")):(o=1===o?2:1,g(o,!1)))};function G(){let t;const e=()=>{if(t.setAttribute("tabindex","0"),t.focus(),!u){u=!0,t.removeEventListener("click",w),t.addEventListener("click",w),f=[];for(let t=0;t<n.x;t++){f[t]=[];for(let e=0;e<n.y;e++)f[t][e]=0}o=1,g(o,!1),y={x:t.width,y:t.height},x=t.clientWidth,h=t.getContext("2d",{alpha:!1}),_(f,h,y)}};return[(()=>{const t=c(v);return t.$$click=e,b(),t})(),(()=>{const t=c(L);return R(t,W),t})(),(()=>{const e=c($);return"function"==typeof t?S(t,e):t=e,e})()]}E(["click"]);export{G as default};