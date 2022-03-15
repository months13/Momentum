const gameForm = document.querySelector("#game-form");
const guessInput = gameForm.querySelector(".guess_number");
const maxInput = gameForm.querySelector(".max_number");
const gameButton = gameForm.querySelector("button");
const hiddenMessage1 = document.querySelector(".number_pick");
const hiddenMessage2 = document.querySelector(".win_or_lose");

console.log("starting!!");

let guess_num = 0;
let max_num = 0;
let machine_num = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값은 제외, 최솟값은 포함
}


function onGameSubmit(event){
  event.preventDefault();
  
  max_num = maxInput.value;
  guess_num = guessInput.value;
  machine_num = getRandomInt(0, max_num);

  hiddenMessage1.innerText = `You chose: ${guess_num}, the machine chose: ${machine_num}.`;
  
  if(machine_num == guess_num){
    hiddenMessage2.innerText = `You won!`
  }else{
    hiddenMessage2.innerText = `You lost!`
  }
}

gameForm.addEventListener("submit", onGameSubmit);