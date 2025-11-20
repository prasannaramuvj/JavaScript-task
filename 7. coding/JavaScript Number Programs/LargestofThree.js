

const LargestofThree = (a,b,c)=>{

  const larger = (a>b && a>c)?a:(b>a && b>c)?b:c;

  return larger
}

let a = LargestofThree(5,45,67);
console.log(a);


// node LargestofThree.js