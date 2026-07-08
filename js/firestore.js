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
import {
collection,
addDoc,
getDocs,
deleteDoc,
updateDoc,
doc,
query,
orderBy,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// 일정 등록
export async function addSchedule(data){

    await addDoc(collection(db,"schedule"),{

        ...data,

        createdAt:serverTimestamp()

    });

}

// 일정 조회
export async function getSchedules(){

    const q=query(

        collection(db,"schedule"),

        orderBy("date","asc")

    );

    const snapshot=await getDocs(q);

    return snapshot.docs.map(d=>({

        id:d.id,

        ...d.data()

    }));

}

// 일정 수정
export async function updateSchedule(id,data){

    await updateDoc(doc(db,"schedule",id),data);

}

// 일정 삭제
export async function deleteSchedule(id){

    await deleteDoc(doc(db,"schedule",id));

}
import {
collection,
addDoc,
getDocs,
deleteDoc,
doc,
serverTimestamp,
query,
orderBy
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// 새가족 등록
export async function addNewFamily(data){

    await addDoc(collection(db,"newfamily"),{

        ...data,

        createdAt:serverTimestamp()

    });

}

// 새가족 조회
export async function getNewFamily(){

    const q=query(

        collection(db,"newfamily"),

        orderBy("createdAt","desc")

    );

    const snapshot=await getDocs(q);

    return snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data()

    }));

}

// 삭제
export async function deleteNewFamily(id){

    await deleteDoc(doc(db,"newfamily",id));

}
import {
collection,
addDoc,
getDocs,
deleteDoc,
updateDoc,
doc,
serverTimestamp,
query,
orderBy
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

export async function addMember(data){

    await addDoc(collection(db,"members"),{

        ...data,

        createdAt:serverTimestamp()

    });

}

export async function getMembers(){

    const q=query(

        collection(db,"members"),

        orderBy("name")

    );

    const snapshot=await getDocs(q);

    return snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data()

    }));

}

export async function deleteMember(id){

    await deleteDoc(doc(db,"members",id));

}

export async function updateMember(id,data){

    await updateDoc(doc(db,"members",id),data);

}
import {

doc,
getDoc,
setDoc,
serverTimestamp

}

from

"https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

export async function getProfile(uid){

const ref=doc(db,"members",uid);

const snap=await getDoc(ref);

if(snap.exists()){

return snap.data();

}

return null;

}

export async function saveProfile(uid,data){

await setDoc(

doc(db,"members",uid),

{

...data,

updatedAt:serverTimestamp()

},

{

merge:true

}

);

}
export async function addAttendance(data){

    await addDoc(collection(db,"attendance"),{

        ...data,

        createdAt:serverTimestamp()

    });

}

export async function getAttendance(){

    const snapshot=await getDocs(collection(db,"attendance"));

    return snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data()

    }));

}
import {
collection,
query,
where,
getDocs,
deleteDoc,
doc
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// 오늘 출석 확인

export async function checkAttendance(uid,date,service){

    const q=query(

        collection(db,"attendance"),

        where("uid","==",uid),

        where("date","==",date),

        where("service","==",service)

    );

    const snapshot=await getDocs(q);

    return snapshot;

}

// 출석취소

export async function deleteAttendance(id){

    await deleteDoc(doc(db,"attendance",id));

}
