const minmax = (min,max)=>{


  return (Math.random() * (max-min)+min)
}

let min =5.5;
let max =6.0;

let cal = minmax(min,max);
console.log(cal)