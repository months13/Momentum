const clockTitle = document.querySelector(".js-clock");
const clock = document.querySelector(".js-clock")

function getClock(){ 
  
  const d_day = new Date("December 25, 2022 00:00:00");
  const today = new Date();
  
  const day_left = d_day.getTime() - today.getTime();

  const days = Math.floor(day_left/(1000*60*60*24));
  const hours = Math.floor((day_left % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((day_left % (1000*60*60))/(1000*60));
  const seconds = Math.floor((day_left % (1000*60))/1000);

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
}

setInterval(getClock, 1000);