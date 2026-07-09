const CACHE_NAME="church-v1";

const FILES=[

"/",

"/index.html",

"/about.html",

"/pastor.html",

"/worship.html",

"/sermon.html",

"/schedule.html",

"/newfamily.html",

"/css/style.css",

"/images/logo.png"

];

self.addEventListener("install",(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(FILES);

})

);

});

self.addEventListener("fetch",(event)=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});
.catch(()=>{

return caches.match("offline.html");

});
