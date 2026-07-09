import {

realtimeAttendance

}

from "./firestore.js";

const calendar=

document.getElementById("calendar");

const statistics=

document.getElementById("monthStatistics");

realtimeAttendance(data=>{

drawCalendar(data);

});
