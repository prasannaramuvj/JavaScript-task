

// const checkSign = (a)=>{

//   if(a < 0){
//     return "negative"
//   }
//   else if(a > 0 ){
//     return "positive"
//   }
//   else{
//     return "zero"
//   }
// }

// let a  = checkSign(0);
// console.log(a);


 let b =-8 ;

switch (Math.sign(b)){
   

case 1:
  console.log("postive");
  break;
case -1:
  console.log("negative");
  break;
default:
   console.log("zero")
   break
}