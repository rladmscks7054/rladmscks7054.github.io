import { auth } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

export async function signup(email,password){

return await createUserWithEmailAndPassword(
auth,
email,
password
);

}

export async function login(email,password){

return await signInWithEmailAndPassword(
auth,
email,
password
);

}
import {
sendEmailVerification
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

document

.getElementById("sendVerify")

.addEventListener("click",async()=>{

    await sendEmailVerification(auth.currentUser);

    alert("인증 메일을 다시 보냈습니다.");

});
