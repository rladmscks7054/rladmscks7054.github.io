import {

addNewFamily

}

from "./firestore.js";

const form=document.getElementById("familyForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

await addNewFamily({

name:name.value,

phone:phone.value,

age:age.value,

address:address.value,

prayer:prayer.value

});

alert("새가족 등록이 완료되었습니다.");

form.reset();

});
