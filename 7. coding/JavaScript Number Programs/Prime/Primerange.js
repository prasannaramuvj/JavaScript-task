const primeRange = (start,end)=>{


  for(let n=start;n<=end;n++){
    let isPrime = true;

      if(n <=1){
        continue;
      }
      

      for(let i=2;i*i<=n;i++){
        if(n%i ==0){
          isPrime = false;
          break;
        }
      }

      if(isPrime){
        console.log(n)
      }

  }




}


const a =primeRange(5,18)