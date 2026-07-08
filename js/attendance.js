import { auth } from "./firebase-config.js";

import {

addAttendance

}

from "./firestore.js";

import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const form=document.getElementById("attendanceForm");

onAuthStateChanged(auth,(user)=>{

if(!user){

location.href="login.html";

return;

}

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await addAttendance({

uid:user.uid,

name:user.email,

date:new Date().toLocaleDateString(),

service:service.value,

status:"출석"

});

alert("출석이 완료되었습니다.");

});

});
