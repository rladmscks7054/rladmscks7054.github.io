cancelAttendance.onclick=async()=>{

const result=

await checkAttendance(

user.uid,

today,

service.value

);

if(result.empty){

alert("출석기록이 없습니다.");

return;

}

await deleteAttendance(result.docs[0].id);

alert("출석이 취소되었습니다.");

location.reload();

}
