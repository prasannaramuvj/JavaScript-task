

const numberSplit = (n,n1)=>{

  let a = n.toString().split('')
  let b = n1.toString().split('').map(Number)


  return [a,b]


}




let a = numberSplit(123456,"123456")
console.log(a);