const a={context:void 0,registry:void 0};function Y(e){a.context=e}function ye(){return{...a.context,id:`${a.context.id}${a.context.count++}-`,count:0}}const be=(e,t)=>e===t,H=Symbol("solid-proxy"),we=Symbol("solid-track"),U={equals:be};let ie=fe;const E=1,_=2,le={owned:null,cleanups:null,context:null,owner:null};var y=null;let J,R=null,g=null,b=null,p=null,K=0;function I(e,t){const n=g,o=y,r=0===e.length,s=r?le:{owned:null,cleanups:null,context:null,owner:void 0===t?o:t},l=r?e:()=>e((()=>S((()=>F(s)))));y=s,g=null;try{return j(l,!0)}finally{g=n,y=o}}function me(e,t){const n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},U,t):U).equals||void 0};return[oe.bind(n),e=>("function"==typeof e&&(e=e(n.value)),re(n,e))]}function $(e,t,n){k(Q(e,t,!1,E))}function We(e,t,n){ie=Se;const o=Q(e,t,!1,E),r=J&&ae(y,J.id);r&&(o.suspense=r),(!n||!n.render)&&(o.user=!0),p?p.push(o):k(o)}function B(e,t,n){n=n?Object.assign({},U,n):U;const o=Q(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,k(o),oe.bind(o)}function S(e){if(null===g)return e();const t=g;g=null;try{return e()}finally{g=t}}function xe(e){return null===y||(null===y.cleanups?y.cleanups=[e]:y.cleanups.push(e)),e}function oe(){if(this.sources&&this.state)if(this.state===E)k(this);else{const e=b;b=null,j((()=>v(this)),!1),b=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function re(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&j((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],o=R&&R.running;o&&R.disposed.has(n),(o?!n.tState:!n.state)&&(n.pure?b.push(n):p.push(n),n.observers&&ce(n)),o||(n.state=E)}if(b.length>1e6)throw b=[],new Error}),!1)),t}function k(e){if(!e.fn)return;F(e);const t=y,n=g,o=K;g=y=e,Ae(e,e.value,o),g=n,y=t}function Ae(e,t,n){let o;try{o=e.fn(t)}catch(t){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(F),e.owned=null),e.updatedAt=n+1,ue(t)}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?re(e,o):e.value=o,e.updatedAt=n)}function Q(e,t,n,o=E,r){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return null===y||y!==le&&(y.owned?y.owned.push(s):y.owned=[s]),s}function q(e){if(0===e.state)return;if(e.state===_)return v(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if((e=t[n]).state===E)k(e);else if(e.state===_){const n=b;b=null,j((()=>v(e,t[0])),!1),b=n}}function j(e,t){if(b)return e();let n=!1;t||(b=[]),p?n=!0:p=[],K++;try{const t=e();return pe(n),t}catch(e){n||(p=null),b=null,ue(e)}}function pe(e){if(b&&(fe(b),b=null),e)return;const t=p;p=null,t.length&&j((()=>ie(t)),!1)}function fe(e){for(let t=0;t<e.length;t++)q(e[t])}function Se(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:q(o)}for(a.context&&Y(),t=0;t<n;t++)q(e[t])}function v(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const e=o.state;e===E?o!==t&&(!o.updatedAt||o.updatedAt<K)&&q(o):e===_&&v(o,t)}}}function ce(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=_,n.pure?b.push(n):p.push(n),n.observers&&ce(n))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const e=o.pop(),r=t.observerSlots.pop();n<o.length&&(e.sourceSlots[r]=n,o[n]=e,t.observerSlots[n]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ue(e){throw e}function ae(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:ae(e.owner,t):void 0}const Ee=Symbol("fallback");function Z(e){for(let t=0;t<e.length;t++)e[t]()}function Ne(e,t,n={}){let o=[],r=[],s=[],l=0,i=t.length>1?[]:null;return xe((()=>Z(s))),()=>{let u,c,a=e()||[];return a[we],S((()=>{let e,t,d,p,h,g,y,b,v,m=a.length;if(0===m)0!==l&&(Z(s),s=[],o=[],r=[],l=0,i&&(i=[])),n.fallback&&(o=[Ee],r[0]=I((e=>(s[0]=e,n.fallback()))),l=1);else if(0===l){for(r=new Array(m),c=0;c<m;c++)o[c]=a[c],r[c]=I(f);l=m}else{for(d=new Array(m),p=new Array(m),i&&(h=new Array(m)),g=0,y=Math.min(l,m);g<y&&o[g]===a[g];g++);for(y=l-1,b=m-1;y>=g&&b>=g&&o[y]===a[b];y--,b--)d[b]=r[y],p[b]=s[y],i&&(h[b]=i[y]);for(e=new Map,t=new Array(b+1),c=b;c>=g;c--)v=a[c],u=e.get(v),t[c]=void 0===u?-1:u,e.set(v,c);for(u=g;u<=y;u++)v=o[u],c=e.get(v),void 0!==c&&-1!==c?(d[c]=r[u],p[c]=s[u],i&&(h[c]=i[u]),c=t[c],e.set(v,c)):s[u]();for(c=g;c<m;c++)c in d?(r[c]=d[c],s[c]=p[c],i&&(i[c]=h[c],i[c](c))):r[c]=I(f);r=r.slice(0,l=m),o=a.slice(0)}return r}));function f(e){if(s[c]=e,i){const[e,n]=me(c);return i[c]=n,t(a[c],e)}return t(a[c])}}}let de=!1;function Ce(){de=!0}function Qe(e,t){if(de&&a.context){const n=a.context;Y(ye());const o=S((()=>e(t||{})));return Y(n),o}return S((()=>e(t||{})))}function D(){return!0}const X={get:(e,t,n)=>t===H?n:e.get(t),has:(e,t)=>t===H||e.has(t),set:D,deleteProperty:D,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:D,deleteProperty:D}),ownKeys:e=>e.keys()};function V(e){return(e="function"==typeof e?e():e)?e:{}}function Oe(){for(let e=0,t=this.length;e<t;++e){const t=this[e]();if(void 0!==t)return t}}function Je(...e){let t=!1;for(let n=0;n<e.length;n++){const o=e[n];t=t||!!o&&H in o,e[n]="function"==typeof o?(t=!0,B(o)):o}if(t)return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const o=V(e[n])[t];if(void 0!==o)return o}},has(t){for(let n=e.length-1;n>=0;n--)if(t in V(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(V(e[n])));return[...new Set(t)]}},X);const n={},o={};let r=!1;for(let t=e.length-1;t>=0;t--){const s=e[t];if(!s)continue;const l=Object.getOwnPropertyNames(s);r=r||0!==t&&!!l.length;for(let e=0,t=l.length;e<t;e++){const t=l[e];if("__proto__"!==t&&"constructor"!==t)if(t in n){const e=o[t],r=Object.getOwnPropertyDescriptor(s,t);e?r.get?e.push(r.get.bind(s)):void 0!==r.value&&e.push((()=>r.value)):void 0===n[t]&&(n[t]=r.value)}else{const e=Object.getOwnPropertyDescriptor(s,t);e.get?Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:Oe.bind(o[t]=[e.get.bind(s)])}):n[t]=e.value}}}return n}function Ze(e,...t){if(H in e){const n=new Set(t.length>1?t.flat():t[0]),o=t.map((t=>new Proxy({get:n=>t.includes(n)?e[n]:void 0,has:n=>t.includes(n)&&n in e,keys:()=>t.filter((t=>t in e))},X)));return o.push(new Proxy({get:t=>n.has(t)?void 0:e[t],has:t=>!n.has(t)&&t in e,keys:()=>Object.keys(e).filter((e=>!n.has(e)))},X)),o}const n={},o=t.map((()=>({})));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let i=!1,u=0;for(const e of t)e.includes(r)&&(i=!0,l?o[u][r]=s.value:Object.defineProperty(o[u],r,s)),++u;i||(l?n[r]=s.value:Object.defineProperty(n,r,s))}return[...o,n]}const $e=e=>`Stale read from <${e}>.`;function ze(e){const t="fallback"in e&&{fallback:()=>e.fallback};return B(Ne((()=>e.each),e.children,t||void 0))}function et(e){const t=e.keyed,n=B((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return B((()=>{const o=n();if(o){const r=e.children;return"function"==typeof r&&r.length>0?S((()=>r(t?o:()=>{if(!S(n))throw $e("Show");return e.when}))):r}return e.fallback}),void 0,void 0)}const Pe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Te=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Pe]),ke=new Set(["innerHTML","textContent","innerText","children"]),je=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Le=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Me(e,t){const n=Le[e];return"object"==typeof n?n[t]?n.$:void 0:n}const De=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ie={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function He(e,t,n){let o=n.length,r=t.length,s=o,l=0,i=0,u=t[r-1].nextSibling,c=null;for(;l<r||i<s;)if(t[l]!==n[i]){for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const t=s<o?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<r;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[r-1]){const o=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],o),t[r]=n[s]}else{if(!c){c=new Map;let e=i;for(;e<s;)c.set(n[e],e++)}const o=c.get(t[l]);if(null!=o)if(i<o&&o<s){let u,a=l,f=1;for(;++a<r&&a<s&&null!=(u=c.get(t[a]))&&u===o+f;)f++;if(f>o-i){const r=t[l];for(;i<o;)e.insertBefore(n[i++],r)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}const z="_$DX_DELEGATE";function Ue(e,t,n,o={}){let r;return I((o=>{r=o,t===document?e():Re(t,e(),t.firstChild?null:void 0,n)}),o.owner),()=>{r(),t.textContent=""}}function tt(e,t,n){let o;const r=()=>{const t=document.createElement("template");return t.innerHTML=e,n?t.content.firstChild.firstChild:t.content.firstChild},s=t?()=>S((()=>document.importNode(o||(o=r()),!0))):()=>(o||(o=r())).cloneNode(!0);return s.cloneNode=s,s}function _e(e,t=window.document){const n=t[z]||(t[z]=new Set);for(let o=0,r=e.length;o<r;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,he))}}function G(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function Be(e,t,n,o){null==o?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function qe(e,t){null==t?e.removeAttribute("class"):e.className=t}function ve(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=t=>o.call(e,n[1],t))}else e.addEventListener(t,n)}function Ke(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let s,l;for(s=0,l=r.length;s<l;s++){const o=r[s];!o||"undefined"===o||t[o]||(ee(e,o,!1),delete n[o])}for(s=0,l=o.length;s<l;s++){const r=o[s],l=!!t[r];!r||"undefined"===r||n[r]===l||!l||(ee(e,r,!0),n[r]=l)}return n}function Fe(e,t,n){if(!t)return n?G(e,"style"):t;const o=e.style;if("string"==typeof t)return o.cssText=t;let r,s;for(s in"string"==typeof n&&(o.cssText=n=void 0),n||(n={}),t||(t={}),n)null==t[s]&&o.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(o.setProperty(s,r),n[s]=r);return n}function nt(e,t={},n,o){const r={};return o||$((()=>r.children=P(e,t.children,r.children))),$((()=>t.ref&&t.ref(e))),$((()=>Ve(e,t,n,!0,r,!0))),r}function st(e,t,n){return S((()=>e(t,n)))}function Re(e,t,n,o){if(void 0!==n&&!o&&(o=[]),"function"!=typeof t)return P(e,t,o,n);$((o=>P(e,t(),o,n)),o)}function Ve(e,t,n,o,r={},s=!1){t||(t={});for(const o in r)if(!(o in t)){if("children"===o)continue;r[o]=te(e,o,null,r[o],n,s)}for(const l in t){if("children"===l){o||P(e,t.children);continue}const i=t[l];r[l]=te(e,l,i,r[l],n,s)}}function Ye(e,t,n={}){a.completed=globalThis._$HY.completed,a.events=globalThis._$HY.events,a.load=globalThis._$HY.load,a.gather=e=>se(t,e),a.registry=new Map,a.context={id:n.renderId||"",count:0},se(t,n.renderId);const o=Ue(e,t,[...t.childNodes],n);return a.context=null,o}function it(e){let t,n;if(!a.context||!(t=a.registry.get(n=Ge()))){if(a.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return a.completed&&a.completed.add(t),a.registry.delete(n),t}function lt(e){let t=e,n=0,o=[];if(a.context)for(;t;){if(8===t.nodeType){const e=t.nodeValue;if("#"===e)n++;else if("/"===e){if(0===n)return[t,o];n--}}o.push(t),t=t.nextSibling}return[t,o]}function ot(){a.events&&!a.events.queued&&(queueMicrotask((()=>{const{completed:e,events:t}=a;for(t.queued=!1;t.length;){const[n,o]=t[0];if(!e.has(n))return;he(o),t.shift()}})),a.events.queued=!0)}function Xe(e){return e.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase()))}function ee(e,t,n){const o=t.trim().split(/\s+/);for(let t=0,r=o.length;t<r;t++)e.classList.toggle(o[t],n)}function te(e,t,n,o,r,s){let l,i,u,c,a;if("style"===t)return Fe(e,n,o);if("classList"===t)return Ke(e,n,o);if(n===o)return o;if("ref"===t)s||n(e);else if("on:"===t.slice(0,3)){const r=t.slice(3);o&&e.removeEventListener(r,o),n&&e.addEventListener(r,n)}else if("oncapture:"===t.slice(0,10)){const r=t.slice(10);o&&e.removeEventListener(r,o,!0),n&&e.addEventListener(r,n,!0)}else if("on"===t.slice(0,2)){const r=t.slice(2).toLowerCase(),s=De.has(r);if(!s&&o){const t=Array.isArray(o)?o[0]:o;e.removeEventListener(r,t)}(s||n)&&(ve(e,r,n,s),s&&_e([r]))}else if("attr:"===t.slice(0,5))G(e,t.slice(5),n);else if((a="prop:"===t.slice(0,5))||(u=ke.has(t))||!r&&((c=Me(t,e.tagName))||(i=Te.has(t)))||(l=e.nodeName.includes("-")))a&&(t=t.slice(5),i=!0),"class"===t||"className"===t?qe(e,n):!l||i||u?e[c||t]=n:e[Xe(t)]=n;else{const o=r&&t.indexOf(":")>-1&&Ie[t.split(":")[0]];o?Be(e,o,t,n):G(e,je[t]||t,n)}return n}function he(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document}),a.registry&&!a.done&&(a.done=_$HY.done=!0);n;){const o=n[t];if(o&&!n.disabled){const r=n[`${t}Data`];if(void 0!==r?o.call(n,r,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function P(e,t,n,o,r){if(a.context){!n&&(n=[...e.childNodes]);let t=[];for(let e=0;e<n.length;e++){const o=n[e];8===o.nodeType&&"!$"===o.data.slice(0,2)?o.remove():t.push(o)}n=t}for(;"function"==typeof n;)n=n();if(t===n)return n;const s=typeof t,l=void 0!==o;if(e=l&&n[0]&&n[0].parentNode||e,"string"===s||"number"===s){if(a.context)return n;if("number"===s&&(t=t.toString()),l){let r=n[0];r&&3===r.nodeType?r.data=t:r=document.createTextNode(t),n=O(e,n,o,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===s){if(a.context)return n;n=O(e,n,o)}else{if("function"===s)return $((()=>{let r=t();for(;"function"==typeof r;)r=r();n=P(e,r,n,o)})),()=>n;if(Array.isArray(t)){const s=[],i=n&&Array.isArray(n);if(W(s,t,n,r))return $((()=>n=P(e,s,n,o,!0))),()=>n;if(a.context){if(!s.length)return n;for(let e=0;e<s.length;e++)if(s[e].parentNode)return n=s}if(0===s.length){if(n=O(e,n,o),l)return n}else i?0===n.length?ne(e,s,o):He(e,n,s):(n&&O(e),ne(e,s));n=s}else if(t.nodeType){if(a.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=O(e,n,o,t);O(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function W(e,t,n,o){let r=!1;for(let s=0,l=t.length;s<l;s++){let l,i=t[s],u=n&&n[s];if(null!=i&&!0!==i&&!1!==i)if("object"==(l=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))r=W(e,i,u)||r;else if("function"===l)if(o){for(;"function"==typeof i;)i=i();r=W(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||r}else e.push(i),r=!0;else{const t=String(i);u&&3===u.nodeType&&u.data===t?e.push(u):e.push(document.createTextNode(t))}}return r}function ne(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function O(e,t,n,o){if(void 0===n)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(r!==l){const t=l.parentNode===e;o||s?t&&l.remove():t?e.replaceChild(r,l):e.insertBefore(r,n)}else o=!0}}else e.insertBefore(r,n);return[r]}function se(e,t){const n=e.querySelectorAll("*[data-hk]");for(let e=0;e<n.length;e++){const o=n[e],r=o.getAttribute("data-hk");(!t||r.startsWith(t))&&!a.registry.has(r)&&a.registry.set(r,o)}}function Ge(){const e=a.context;return`${e.id}${e.count++}`}const rt=!1,ft=(...e)=>(Ce(),Ye(...e));export{ze as F,et as S,lt as a,$ as b,me as c,_e as d,Qe as e,qe as f,it as g,We as h,Re as i,Ze as j,nt as k,rt as l,Je as m,B as n,Ue as o,ft as p,a as q,ot as r,G as s,tt as t,st as u};