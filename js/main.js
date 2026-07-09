let deferredPrompt;

window.addEventListener(

"beforeinstallprompt",

(e)=>{

e.preventDefault();

deferredPrompt=e;

});

document

.getElementById("installApp")

.onclick=async()=>{

if(!deferredPrompt){

alert("설치할 수 없습니다.");

return;

}

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt=null;

}
await addDoc(

collection(db,"notifications"),

{

title:"공지사항",

body:"새로운 공지가 등록되었습니다.",

type:"notice",

createdAt:serverTimestamp()

}

);
