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

if(!user) return;

const role=

await getRole(user.uid);

if(role!="member"){

document

.getElementById("adminMenu")

.style.display="block";

}

});
