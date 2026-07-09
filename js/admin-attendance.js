import {

getAllAttendance

}

from "./firestore.js";
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
async function loadStatistics(){

const data=

await getAllAttendance();

document

.getElementById("attendanceTotal")

.innerHTML=data.length;

const month=

new Date()

.toISOString()

.slice(0,7);

const monthData=

data.filter(a=>a.date.startsWith(month));

document

.getElementById("monthTotal")

.innerHTML=

monthData.length;

const rate=

Math.round(

(monthData.length/

data.length)*100

)||0;

document

.getElementById("attendanceRate")

.innerHTML=

rate+"%";

const members={};

data.forEach(a=>{

if(!members[a.name])

members[a.name]=0;

members[a.name]++;

});

const ranking=

Object.entries(members)

.sort((a,b)=>b[1]-a[1])

.slice(0,5);

let html="";

ranking.forEach(r=>{

html+=`

<div class="card">

<h3>${r[0]}</h3>

<p>

출석횟수 :

${r[1]}회

</p>

</div>

`;

});

document

.getElementById("topMembers")

.innerHTML=html;

}

loadStatistics();
document

.getElementById("downloadCSV")

.onclick=async()=>{

const data=

await getAllAttendance();

let csv=

"이름,날짜,예배,상태\n";

data.forEach(a=>{

csv+=

`${a.name},

${a.date},

${a.service},

${a.status}\n`;

});

const blob=

new Blob(

[csv],

{

type:"text/csv"

}

);

const url=

URL.createObjectURL(blob);

const link=

document.createElement("a");

link.href=url;

link.download="attendance.csv";

link.click();

}
document

.getElementById("printAttendance")

.onclick=()=>{

window.print();

}
