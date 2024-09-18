//DIGITAL CLOCK PROGRAM 

function UpDateClock()
{
    const now= new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const min= now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const TimeString = `${hours}:${min}:${sec}  ${meridiem}`;
    document.getElementById("Clock").textContent = TimeString;
}

UpDateClock();
setInterval(UpDateClock,1000);