/* DECT :: 2024 */
!function(){const n="wff_v5",t=["index.html","manifest.json","css/font.css","css/style.css","font/Lato.ttf","font/Lato.otf","font/Lato.woff2","js/app.js","js/frames.js","js/language.js","js/jszip.js","js/r9picker.min.js","img/badge/en-US.png","img/badge/pt-BR.png","img/badge/transp/en-US.png","img/badge/transp/pt-BR.png","img/btn/github.png","img/favicon/favicon.ico","img/icon/language/en-US.png","img/icon/language/pt-BR.png","img/icon/none.png"],e={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:2,9:2,10:1,11:2,12:2,13:2,14:3,15:2,16:2,17:3,18:2,19:2,20:2,21:1,22:1,23:1,24:1,25:3,26:3,27:2,28:1,29:1,30:2,31:2,32:2,33:2,34:2,35:2,36:1,37:1,38:2,39:2,40:4,41:2,42:3,43:2,44:3,45:3,46:4,47:4,48:2,49:2,50:3,51:3,52:1,53:1,54:2,55:2,56:1,57:5,58:4,59:1,60:1,61:1,62:1,63:2,64:1,65:1,66:1,67:1,68:1,69:1,70:1,71:2,72:2,73:1,74:1,75:2,76:1,77:2,78:1,79:1,80:1,81:1,82:1,83:1,84:1,85:1,86:1,87:1,88:1,c:17};self.addEventListener("install",(function(s){for(const[n,s]of Object.entries(e))for(let e=1;e<=s;e++)t.push("img/frame/"+n+"/"+e+".png");s.waitUntil(caches.open(n).then((function(n){n.addAll(t)})).then((function(){self.skipWaiting()})))})),self.addEventListener("activate",(function(t){t.waitUntil(caches.keys().then((function(t){return Promise.all(t.map((function(t){if(t!==n&&t.startsWith("wff_"))return caches.delete(t)})))})))})),self.addEventListener("fetch",(function(t){t.respondWith(async function(){try{const e=await caches.match(t.request);if(e)return e;const s=await fetch(t.request),i=await caches.open(n);return await i.put(t.request,s.clone()),console.info("Auto cached: "+t.request.url),s}catch(n){const e=await caches.match(t.request);if(e)return e}}())}))}();