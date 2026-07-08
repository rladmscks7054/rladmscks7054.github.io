import { auth } from "./firebase-config.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
doc,
getDoc,
getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const db=getFirestore();

export async function checkAdmin(){

return new Promise((resolve)=>{

onAuthStateChanged(auth,async(user)=>{

if(!user){

location.href="login.html";

return;

}

const ref=doc(db,"admins",user.uid);

const snap=await getDoc(ref);

if(!snap.exists()){

alert("관리자 권한이 없습니다.");

location.href="index.html";

return;

}

resolve(user);

});

});

}
