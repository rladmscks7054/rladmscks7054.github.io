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
