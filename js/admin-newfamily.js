import {

getNewFamily,
deleteNewFamily

}

from "./firestore.js";

const list=document.getElementById("familyList");

async function load(){

list.innerHTML="";

const family=await getNewFamily();

family.forEach(f=>{

list.innerHTML+=`

<div class="card">

<h3>${f.name}</h3>

<p>${f.phone}</p>

<p>${f.age}</p>

<p>${f.address}</p>

<p>${f.prayer}</p>

<button onclick="removeFamily('${f.id}')">

삭제

</button>

</div>

`;

});

}

window.removeFamily=async(id)=>{

if(confirm("삭제하시겠습니까?")){

await deleteNewFamily(id);

load();

}

}

load();
