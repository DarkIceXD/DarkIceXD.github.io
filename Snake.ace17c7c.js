import{c as O,d as p,e as i,r as f,i as R,u as h,t as y}from"./chunks/web.217e897e.js";const _=y('<button class="px-6 py-2.5 bg-blue-600 text-white rounded shadow hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-300">Start</button>'),x=y('<h5 class="text-xl font-medium"></h5>'),I=y('<canvas class="w-full sm:w-2/3 border" width="800" height="600"></canvas>'),o={GAME_TIMEOUT:100,CANVAS_BACKGROUND_COLOUR:"black",SNAKE_COLOUR:"black",SNAKE_BORDER_COLOUR:"white",FOOD_COLOUR:"black",FOOD_BORDER_COLOUR:"red",SIZE:20},A=(t,r)=>{t.fillStyle=o.CANVAS_BACKGROUND_COLOUR,t.fillRect(0,0,r.x,r.y)},Z=(t,r)=>{r.parts.forEach((r=>{t.fillStyle=o.SNAKE_COLOUR,t.fillRect(r.x*o.SIZE,r.y*o.SIZE,o.SIZE,o.SIZE),t.strokeStyle=o.SNAKE_BORDER_COLOUR,t.lineWidth=2,t.strokeRect(r.x*o.SIZE,r.y*o.SIZE,o.SIZE,o.SIZE)}))},g=(t,r)=>{t.fillStyle=o.FOOD_COLOUR,t.fillRect(r.x*o.SIZE,r.y*o.SIZE,o.SIZE,o.SIZE),t.strokeStyle=o.FOOD_BORDER_COLOUR,t.strokeRect(r.x*o.SIZE,r.y*o.SIZE,o.SIZE,o.SIZE)},w=o=>{o.parts.unshift({x:o.parts[0].x+o.direction.x,y:o.parts[0].y+o.direction.y})},E=o=>({x:Math.floor(Math.random()*o.x),y:Math.floor(Math.random()*o.y)}),C=(o,t)=>{for(let t=4;t<o.parts.length;t++)if(o.parts[t].x===o.parts[0].x&&o.parts[t].y===o.parts[0].y)return!0;return o.parts[0].x<0||o.parts[0].x>t.x||o.parts[0].y<0||o.parts[0].y>t.y};let c=!1,s={coord:{x:0,y:1},updated:!1};const[m,n]=O("Press Start"),S=(t,r,e,a,d,i)=>{if(C(a,e))return c=!1,void n("GAME OVER, Score: "+i);setTimeout((()=>{a.direction=s.coord,s.updated=!1,A(t,r),g(t,d),w(a),a.parts[0].x===d.x&&a.parts[0].y===d.y?(n("Score: "+(i+=1)),d=E(e)):a.parts.pop(),Z(t,a),S(t,r,e,a,d,i)}),o.GAME_TIMEOUT)},u=o=>{const t=o.code;s.updated||("ArrowLeft"!==t&&"KeyA"!==t||1===s.coord.x?"ArrowUp"!==t&&"KeyW"!==t||1===s.coord.y?"ArrowRight"!==t&&"KeyD"!==t||-1===s.coord.x?("ArrowDown"===t||"KeyS"===t)&&-1!==s.coord.y&&(s.coord.x=0,s.coord.y=1,s.updated=!0):(s.coord.x=1,s.coord.y=0,s.updated=!0):(s.coord.x=0,s.coord.y=-1,s.updated=!0):(s.coord.x=-1,s.coord.y=0,s.updated=!0))};function v(){let t;const r=()=>{if(t.setAttribute("tabindex","0"),t.focus(),c)return;c=!0,t.removeEventListener("keydown",u),t.addEventListener("keydown",u),s.coord={x:0,y:1};const r={x:t.width,y:t.height},e={x:r.x/o.SIZE-1,y:r.y/o.SIZE-1};n("Score: 0"),S(t.getContext("2d",{alpha:!1}),r,e,{direction:s.coord,parts:[{x:3,y:3}]},E(e),0)};return[(()=>{const o=i(_);return o.$$click=r,f(),o})(),(()=>{const o=i(x);return R(o,m),o})(),(()=>{const o=i(I);return"function"==typeof t?h(t,o):t=o,o})()]}p(["click"]);export{v as default};