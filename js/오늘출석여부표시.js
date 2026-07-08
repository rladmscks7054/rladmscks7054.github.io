const result=

await checkAttendance(

user.uid,

today,

service.value

);

if(result.empty){

todayState.innerHTML="❌ 아직 출석하지 않았습니다.";

}else{

todayState.innerHTML="✅ 오늘 출석 완료";

}
