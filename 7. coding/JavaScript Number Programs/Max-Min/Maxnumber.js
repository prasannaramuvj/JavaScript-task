const minmax = (min,max)=>{


  return Math.floor(Math.random() * (max-min-1)+min)
}

let min =50;
let max =60;

let cal = minmax(min,max);
console.log(cal)