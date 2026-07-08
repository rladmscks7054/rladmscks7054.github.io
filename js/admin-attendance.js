import {

getAttendance

}

from "./firestore.js";

const list=document.getElementById("attendanceList");

async function load(){

const data=await getAttendance();

list.innerHTML="";

data.forEach(a=>{

list.innerHTML+=`

<div class="card">

<h3>${a.name}</h3>

<p>${a.date}</p>

<p>${a.service}</p>

<p>${a.status}</p>

</div>

`;

});

}

load();
