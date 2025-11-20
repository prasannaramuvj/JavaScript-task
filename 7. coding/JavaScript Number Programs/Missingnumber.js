

const missingNumber = (arr)=>{

   let len = arr.length+1;
   let sumarr = (len*(len+1))/2;
  //  console.log(len);
  let sum = 0;
   for(let i=0;i<arr.length;i++){
    sum+=arr[i];


   }

   return sumarr-sum;

}


let a = missingNumber([1,2,3,5,6,7])
console.log(a);