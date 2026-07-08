import {

addMember,
getMembers,
deleteMember

}

from "./firestore.js";

const form=document.getElementById("memberForm");

const list=document.getElementById("memberList");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await addMember({

name:name.value,

gender:gender.value,

phone:phone.value,

birth:birth.value,

address:address.value,

department:department.value,

position:position.value

});

alert("교인이 등록되었습니다.");

form.reset();

load();

});

async function load(){

list.innerHTML="";

const members=await getMembers();

members.forEach(m=>{

list.innerHTML+=`

<div class="card">

<h3>${m.name}</h3>

<p>성별 : ${m.gender}</p>

<p>전화 : ${m.phone}</p>

<p>생년월일 : ${m.birth}</p>

<p>주소 : ${m.address}</p>

<p>부서 : ${m.department}</p>

<p>직분 : ${m.position}</p>

<button onclick="removeMember('${m.id}')">

삭제

</button>

</div>

`;

});

}

window.removeMember=async(id)=>{

if(confirm("삭제하시겠습니까?")){

await deleteMember(id);

load();

}

}

load();
