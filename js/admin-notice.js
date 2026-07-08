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
