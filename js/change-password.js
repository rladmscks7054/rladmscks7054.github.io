import { auth } from "./firebase-config.js";

import {

updatePassword,
onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const form=document.getElementById("passwordForm");

onAuthStateChanged(auth,(user)=>{

if(!user){

location.href="login.html";

return;

}

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const password=

document.getElementById("newPassword").value;

const confirm=

document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("비밀번호가 일치하지 않습니다.");

return;

}

if(password.length<6){

alert("비밀번호는 6자 이상이어야 합니다.");

return;

}

try{

await updatePassword(user,password);

alert("비밀번호가 변경되었습니다.");

form.reset();

}catch(error){

alert(error.message);

}

});

});
