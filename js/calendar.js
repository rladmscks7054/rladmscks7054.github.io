import {

realtimeAttendance

}

from "./firestore.js";

const calendar=

document.getElementById("calendar");

const statistics=

document.getElementById("monthStatistics");

realtimeAttendance(data=>{

drawCalendar(data);

});
function drawCalendar(data){

let html="";

const today=new Date();

const year=today.getFullYear();

const month=today.getMonth()+1;

const lastDay=

new Date(year,month,0).getDate();

for(let i=1;i<=lastDay;i++){

const day=

`${year}-${String(month).padStart(2,"0")}-${String(i).padStart(2,"0")}`;

const count=

data.filter(a=>a.date==day).length;

html+=`

<div class="day">

<b>${i}일</b>

<br>

${count}명

</div>

`;

}

calendar.innerHTML=html;

}
function drawStatistics(data){

const month=

new Date()

.toISOString()

.slice(0,7);

const monthData=

data.filter(a=>

a.date.startsWith(month)

);

statistics.innerHTML=`

<h3>

이번달 총 출석

${monthData.length}명

</h3>

`;

}
function departmentStatistics(data){

const department={};

data.forEach(a=>{

if(!department[a.department])

department[a.department]=0;

department[a.department]++;

});

let html="";

Object.keys(department).forEach(d=>{

html+=`

<div>

${d}

${department[d]}명

</div>

`;

});

statistics.innerHTML+=html;

}
const today=

new Date()

.toISOString()

.slice(0,10);

const todayCount=

data.filter(

a=>a.date==today

).length;

statistics.innerHTML+=`

<h3>

오늘 출석

${todayCount}명

</h3>

`;
