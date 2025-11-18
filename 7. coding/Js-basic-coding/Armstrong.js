let armstrong = (n)=>{

  let a = n.toString().split('');
  let len = a.length;
  let sum = a.reduce((acc,cur)=>
    acc + Math.pow(cur,len),0);

  if(sum === n){
    return "armstrong number"
  }
  else{
    return "not armstrong number"
  }


}

let b = armstrong(1543);

console.log(b);


// node Armstrong.js