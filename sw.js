if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>n(e,r),l={module:{uri:r},exports:c,require:f};i[r]=Promise.all(o.map((e=>l[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-8ccf3481.css",revision:null},{url:"assets/index-a795ded2.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"ae18ae829801c83c3f4c070acf932fb0"},{url:"favicon.ico",revision:"dfb2deaf705f575df9193681fec06567"},{url:"apple-touch-icon.png",revision:"1ead074b8b77879af86c579f95bb887a"},{url:"android-chrome-192x192.png",revision:"6f60638c5250c13d598e740cfa66a9cb"},{url:"android-chrome-512x512.png",revision:"d0816ffe6c38136c7394439b999fbbae"},{url:"donjon-logo-face-black-on-white-maskable-512.png",revision:"d0816ffe6c38136c7394439b999fbbae"},{url:"manifest.webmanifest",revision:"f4bac4a126ea96f9133c9c5ed9701bd3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
