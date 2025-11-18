 const Palindrome = (n)=>{
  
  let a = n.toString();
  let b = a.split('').reverse().join('');
  console.log(n)
  console.log(b)


  let c = (a === b) ? "Plaindrome" : "not palindrome";
  console.log(c)

 }


 let c = Palindrome(121);