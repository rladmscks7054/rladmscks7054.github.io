import { auth } from "./firebase-config.js";

import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

onAuthStateChanged(auth,(user)=>{

if(!user){

location.href="login.html";

return;

}

new QRCode(

document.getElementById("qrcode"),

{

text:user.uid,

width:250,

height:250

}

);

});
