import { auth } from "./firebase-config.js";

import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {

getProfile,
saveProfile

}

from "./firestore.js";

const form=document.getElementById("profileForm");

onAuthStateChanged(auth,async(user)=>{

if(!user){

location.href="login.html";

return;

}

const profile=await getProfile(user.uid);

if(profile){

name.value=profile.name||"";

phone.value=profile.phone||"";

birth.value=profile.birth||"";

address.value=profile.address||"";

gender.value=profile.gender||"남";

department.value=profile.department||"";

position.value=profile.position||"";

}

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await saveProfile(user.uid,{

name:name.value,

phone:phone.value,

birth:birth.value,

address:address.value,

gender:gender.value,

department:department.value,

position:position.value

});

alert("프로필이 저장되었습니다.");

});

});
import { auth } from "./firebase-config.js";

import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

onAuthStateChanged(auth,(user)=>{

    if(!user) return;

    document.getElementById("verifyStatus").textContent=

    user.emailVerified ?

    "✅ 인증 완료"

    :

    "❌ 미인증";

});
