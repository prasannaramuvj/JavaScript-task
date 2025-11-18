const swap = (a,b)=>{


  a = a + b;
  b = a - b;
  a = a - b;

  return [a,b];
}

console.log(swap(43,5));


//---------------------------------------------//


const swap1 = (a,b)=>{


  [a,b] = [b,a]

  return [a,b]
}

console.log(swap1(4,5));

//-----------------------------------------------//


const swap3 = (a,b)=>{


  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a,b];
}

console.log(swap3(437,5));



// node swap1.js
