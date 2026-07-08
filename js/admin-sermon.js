import {

addSermon,
getSermons,
deleteSermon

}

from "./firestore.js";

const form=document.getElementById("sermonForm");

const list=document.getElementById("sermonList");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await addSermon({

title:title.value,

pastor:pastor.value,

bible:bible.value,

youtube:youtube.value

});

alert("설교가 등록되었습니다.");

form.reset();

load();

});

async function load(){

list.innerHTML="";

const sermons=await getSermons();

sermons.forEach(s=>{

list.innerHTML+=`

<div class="card">

<h3>${s.title}</h3>

<p>${s.pastor}</p>

<p>${s.bible}</p>

<a href="${s.youtube}" target="_blank">

영상보기

</a>

<button onclick="remove('${s.id}')">

삭제

</button>

</div>

`;

});

}

window.remove=async(id)=>{

await deleteSermon(id);

load();

}

load();
