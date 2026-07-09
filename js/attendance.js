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
const churchLat=37.4619;
const churchLng=126.6802;

let canAttendance=false;

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat=position.coords.latitude;

const lng=position.coords.longitude;

const distance=

Math.sqrt(

Math.pow(lat-churchLat,2)+

Math.pow(lng-churchLng,2)

);

if(distance<0.005){

locationStatus.innerHTML=

"✅ 교회 근처입니다.";

canAttendance=true;

}else{

locationStatus.innerHTML=

"❌ 교회에서만 출석 가능합니다.";

}

}

);
function checkTime(){

const now=new Date();

const hour=now.getHours();

const minute=now.getMinutes();

const current=hour*60+minute;

const sundayMorning=

11*60;

const sundayMorningEnd=

12*60+30;

if(

current>=sundayMorning &&

current<=sundayMorningEnd

){

timeStatus.innerHTML=

"✅ 출석 가능한 시간";

return true;

}

timeStatus.innerHTML=

"❌ 예배 시간이 아닙니다.";

return false;

}
gpsAttendanceBtn.onclick=async()=>{

if(!canAttendance){

alert("교회 근처에서만 가능합니다.");

return;

}

if(!checkTime()){

return;

}

await addAttendance({

uid:user.uid,

name:user.email,

date:today,

service:"주일오전예배",

status:"출석"

});

alert("출석 완료");

}
const history=

await getMyAttendance(user.uid);

let html="";

history.forEach(h=>{

html+=`

<div class="card">

<h3>${h.service}</h3>

<p>${h.date}</p>

<p>${h.status}</p>

</div>

`;

});

myAttendanceList.innerHTML=html;
