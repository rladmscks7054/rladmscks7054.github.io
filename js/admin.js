import { addNotice,getNotice } from "./firestore.js";

const form=document.getElementById("noticeForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const title=document.getElementById("title").value;

const content=document.getElementById("content").value;

await addNotice(title,content);

alert("공지사항이 등록되었습니다.");

location.reload();

});

async function loadNotice(){

const list=document.getElementById("noticeList");

list.innerHTML="";

const notices=await getNotice();

notices.forEach(n=>{

list.innerHTML+=`

<div class="card">

<h3>${n.title}</h3>

<p>${n.content}</p>

</div>

`;

});

}

loadNotice();
import { auth } from "./firebase-config.js";

document.getElementById("adminName").innerHTML=

auth.currentUser.email;
