import {

addSchedule,
getSchedules,
deleteSchedule

}

from "./firestore.js";

const form=document.getElementById("scheduleForm");

const list=document.getElementById("scheduleList");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await addSchedule({

title:title.value,

date:date.value,

time:time.value,

place:place.value,

description:description.value

});

alert("일정이 등록되었습니다.");

form.reset();

load();

});

async function load(){

list.innerHTML="";

const schedules=await getSchedules();

schedules.forEach(s=>{

list.innerHTML+=`

<div class="card">

<h3>${s.title}</h3>

<p>📅 ${s.date}</p>

<p>🕒 ${s.time}</p>

<p>📍 ${s.place}</p>

<p>${s.description}</p>

<button onclick="removeSchedule('${s.id}')">

삭제

</button>

</div>

`;

});

}

window.removeSchedule=async(id)=>{

if(confirm("삭제하시겠습니까?")){

await deleteSchedule(id);

load();

}

}

load();
