if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1bf7a573.js",revision:null},{url:"assets/index-38444ad4.css",revision:null},{url:"index.html",revision:"719c0a2551114ab77e549152370dbc1b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"dfb2deaf705f575df9193681fec06567"},{url:"apple-touch-icon.png",revision:"380e46e903c32db741231c0ea5c9f17c"},{url:"android-chrome-192x192.png",revision:"61cba505d2e0d88061b3d0ab47535a6f"},{url:"android-chrome-512x512.png",revision:"e5e3b5a62919e8b8b4f4464c192726db"},{url:"donjon-maskable.png",revision:"2244c8cd2c2480200ce408cc79f55297"},{url:"manifest.webmanifest",revision:"6de148d469c4fdc0f11f522474693b8a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
