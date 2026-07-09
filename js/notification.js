import {

messaging

}

from "./firebase-config.js";

import {

getToken,
onMessage

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js";

Notification.requestPermission()

.then(async(permission)=>{

if(permission==="granted"){

const token=

await getToken(

messaging,

{

vapidKey:"YOUR_VAPID_KEY"

}

);

console.log(token);

}

});

onMessage(

messaging,

(payload)=>{

alert(

payload.notification.title+

"\n"+

payload.notification.body

);

});
