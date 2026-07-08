import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {

apiKey:"AIzaSyAi0yoqEuwwui6lItbS1g6uUShEPX5Phas",

authDomain:"truthandpraisechurch.firebaseapp.com",

projectId:"truthandpraisechurch",

storageBucket:"truthandpraisechurch.firebasestorage.app",

messagingSenderId:"764723618419",

appId:"1:764723618419:web:3b83c218904a067656c006"

};

const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);

export async function addNotice(title,content){

await addDoc(collection(db,"notice"),{

title,

content,

createdAt:serverTimestamp()

});

}

export async function getNotice(){

const snapshot=await getDocs(collection(db,"notice"));

return snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}));

}

export async function deleteNotice(id){

await deleteDoc(doc(db,"notice",id));

}
import {
doc,
updateDoc
}
from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

export async function updateNotice(id,title,content){

    const ref=doc(db,"notice",id);

    await updateDoc(ref,{

        title:title,

        content:content

    });

}
import {
collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc,
query,
orderBy,
serverTimestamp
}
from
"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

export async function addSermon(data){

await addDoc(collection(db,"sermons"),{

...data,

createdAt:serverTimestamp()

});

}

export async function getSermons(){

const q=query(

collection(db,"sermons"),

orderBy("createdAt","desc")

);

const snapshot=await getDocs(q);

return snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}));

}

export async function deleteSermon(id){

await deleteDoc(doc(db,"sermons",id));

}

export async function updateSermon(id,data){

await updateDoc(doc(db,"sermons",id),data);

}
