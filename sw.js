if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2e83a7c6.js",revision:"dfa61f88e10759b9c080c24869c5562d"},{url:"416f6cc6.js",revision:"6dfb42a035669fe4c76c04d3f6d5d243"},{url:"56e33e5f.js",revision:"213f4ea5171b90ef43eb7ee689b2adcc"},{url:"7f8dfa15.js",revision:"48c62f68d528f56329af2e45b4e0d4da"},{url:"a90012eb.js",revision:"5046a57774b8ebc86e31764356955842"},{url:"b5715470.js",revision:"385f6295e03f7e7165bc2ac47a0ba50e"},{url:"cbacb656.js",revision:"bb33dd18b4a6674d3d3b312294c45f8b"},{url:"index.html",revision:"89059af1ad7724f847d3633926f0c893"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
