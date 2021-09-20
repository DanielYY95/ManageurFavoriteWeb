const Clock = document.querySelector(".clock");

function GetTime() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  if (parseInt(Hours)>12){
    const Hours = String(date.getHours()-12).padStart(2, "0");
    Clock.innerText = `pm ${Hours} : ${Minutes}`;
  }

  else {
    Clock.innerText = `am ${Hours} : ${Minutes}`;
    }
}

GetTime();
setInterval(GetTime, 1000);
