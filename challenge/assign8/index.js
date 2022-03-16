const clockTitle = document.querySelector(".js-clock");
const clock = document.querySelector(".js-clock")

function getClock(){ 
  
  const d_day = new Date("December 25, 2022 00:00:00");
  const today = new Date();
  
  const day_left = d_day.getTime() - today.getTime();

  const days = String(Math.floor(day_left/(1000*60*60*24))).padStart(2, "0");
  const hours = String(Math.floor((day_left % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");
  const minutes = String(Math.floor((day_left % (1000*60*60))/(1000*60))).padStart(2, "0");
  const seconds = String(Math.floor((day_left % (1000*60))/1000)).padStart(2, "0");

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
}

setInterval(getClock, 1000);