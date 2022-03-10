let odd_print = function(i){
  if(i % 2 == 0){
    console.log(i);
  }
}

let printing = function(n, f){
  for(let i = 0; i<n; i++){
    f(i);
  }
}

printing(10,odd_print);