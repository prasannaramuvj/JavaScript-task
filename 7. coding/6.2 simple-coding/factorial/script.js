

function factorial1(num){

  let fact = 1;


  for(let i = num; i > 0; i--){

    fact = fact * i;
  }
  return fact;
}


console.log(factorial1(5));




//-------------------------------------recursive-------------------------------------------------------------------//
// console.log(recursivefactorial(5));



// function recursivefactorial(num){
//   if(num ===1 || num === 0){
//     return 1;
//   }

//   return num * recursivefactorial(num-1)
// }