const isPrime = (n)=>{

  let prime = true;


  if(n<=1){
      prime = false;
  }
  else{

    for(let i=2;i*i <=n ;i++){
      if(n%i == 0){
        prime = false
      }
    }
  }


  console.log(prime?`${n} is prime`:`${n} is not prime`);
}

let  a = isPrime(15);


// node Primenumber.js
//check less than value n =15 of squart root i*i