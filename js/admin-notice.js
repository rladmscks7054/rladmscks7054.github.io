import {

addNotice,
getNotice,
removeNotice,
updateNotice

}

from "./firestore.js";
import {
addNotice,
getNotice,
removeNotice
} from "./firestore.js";

const form = document.getElementById("noticeForm");
const list = document.getElementById("noticeList");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const title = document.getElementById("title").value;

    const content = document.getElementById("content").value;

    await addNotice(title, content);

    alert("공지사항이 등록되었습니다.");

    form.reset();

    loadNotice();

});

async function loadNotice() {

    list.innerHTML = "";

    const notices = await getNotice();

    notices.forEach(n => {

        list.innerHTML += `

<div class="card">

<h3>${n.title}</h3>

<p>${n.content}</p>

<button onclick="deleteNotice('${n.id}')">

삭제

</button>

</div>

`;

    });

}

window.deleteNotice = async function(id){

    if(confirm("삭제하시겠습니까?")){

        await removeNotice(id);

        loadNotice();

    }

}

loadNotice();
<input
type="hidden"
id="editId">

<input
type="text"
id="editTitle"
placeholder="수정할 제목">

<textarea
id="editContent"
placeholder="수정할 내용"></textarea>

<button
id="updateBtn">

수정하기

</button>
list.innerHTML+=`

<div class="card">

<h3>${n.title}</h3>

<p>${n.content}</p>

<button onclick="editNotice('${n.id}','${n.title}','${n.content}')">

수정

</button>

<button onclick="deleteNotice('${n.id}')">

삭제

</button>

</div>

`;
window.editNotice=function(id,title,content){

document.getElementById("editId").value=id;

document.getElementById("editTitle").value=title;

document.getElementById("editContent").value=content;

}
document

.getElementById("updateBtn")

.addEventListener("click",async()=>{

const id=document.getElementById("editId").value;

const title=document.getElementById("editTitle").value;

const content=document.getElementById("editContent").value;

await updateNotice(id,title,content);

alert("수정되었습니다.");

loadNotice();

});
