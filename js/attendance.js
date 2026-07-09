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
import {

addAttendance,
checkAttendance,
deleteAttendance

}

from "./firestore.js";

const today=new Date().toISOString().slice(0,10);

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const result=

await checkAttendance(

user.uid,

today,

service.value

);

if(!result.empty){

alert("오늘 이미 출석했습니다.");

return;

}

await addAttendance({

uid:user.uid,

name:user.email,

date:today,

service:service.value,

status:"출석"

});

alert("출석되었습니다.");

location.reload();

});
const scanner=

new Html5Qrcode("reader");

scanner.start(

{

facingMode:"environment"

},

{

fps:10,

qrbox:250

},

async(decodedText)=>{

console.log(decodedText);

alert("QR 인식 완료");

}

);
