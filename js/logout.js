import { auth } from "./firebase-config.js";

import {
signOut
}
from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

document.getElementById("logoutBtn")
.addEventListener("click",async()=>{

await signOut(auth);

alert("로그아웃되었습니다.");

location.href="login.html";

});
