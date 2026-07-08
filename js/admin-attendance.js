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
id="searchName"
placeholder="교인 이름">

<button id="searchBtn">

조회

</button>

</div>

<hr>

<h3>

총 출석인원 :
<span id="totalCount">0</span>명

</h3>

<div id="attendanceList"></div>
