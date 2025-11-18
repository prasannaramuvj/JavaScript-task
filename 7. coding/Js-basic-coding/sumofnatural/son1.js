


// const son1 = (n)=>{

//   let sum = 0;

//   if(n!==0){
//     for(let i=1;i<=n;i++){
//       sum+=i
//     }

//     console.log(sum)
//   }

// }

// let a = son1(5);

//-------------------------------------------//

const son2 = (n)=>{

  let sum = 0;

  if(n!==0){
    return n+ son2(n-1)
    }

  else {
    return n
  }

  }



let b = son2(5);
console.log(b)
//------------------------------------------//


