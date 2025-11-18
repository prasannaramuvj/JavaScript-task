

const checkEvenorAdd = (a,b)=>{

  if(a%2 == 0){
    return "Given number is even"
  }
  else{
    return "Given number is odd"
  }
}


const a = checkEvenorAdd(8);

console.log(a);




//-------------------------------------------//

function ternary(a){
let b = (a%2 == 0) ? "Even" : "Odd";
console.log(b);
}

let ter = ternary(5);
//---------------------------------//

// node usingMod.js