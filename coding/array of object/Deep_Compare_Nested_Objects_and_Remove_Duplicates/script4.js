const data = [
  { name: "prasanna", info: { age: 25, city: "chennai" } },
  { name: "prasanna", info: { age: 25, city: "chennai" } }, 
  { name: "jason",    info: { age: 30, city: "delhi" } }
];

console.log(removeDuplicates(data));

function removeDuplicates(arr){

  let result = [];

  for(let i = 0 ; i< arr.length;i++){

    let dup = false;


    for(let j = 0 ;j<result.length;j++){

      if(isEqual(arr[i],result[j])){
        dup = true;
        break;
      }
    }
  

  if(!dup){
    result.push(arr[i]);
  }
}

return result;
}

function isEqual(a,b){

  if(a === b) return true;

  if(typeof a!="object" || typeof b!="object" || a == null || b == null){
    return false;
  }

  if(Array.isArray(a) && (Array.isArray(b))){

    if(a.length !== b.length){
      return false;
    }

    for(let i =0 ; i<a.length;i++){
      if(!isEqual(a[i],b[i])) return false;
    }

    return true;
  }

  let keyA = Object.keys(a);
  let keyB = Object.keys(b);

  if(keyA.length!==keyB.length) return false;
  

  for(let key of keyA){
    if(!isEqual(a[key],b[key])) return false;
  }

  return true;
}