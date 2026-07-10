import { auth } from "./firebase-config.js";

import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {

getRole

}

from "./firestore.js";

onAuthStateChanged(auth,async(user)=>{

if(!user){

location.href="login.html";

return;

}

const role=

await getRole(user.uid);

if(role==="member"){

alert("관리자만 접근 가능합니다.");

location.href="index.html";

}

});
