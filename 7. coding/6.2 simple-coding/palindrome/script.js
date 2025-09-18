

function isPalindrome(num){
  let dup = num;
  let num1=0;

  while(num > 0){

     

     num1 = (num%10) +  num1 * 10;

    num = Math.floor(num/10);
  }
  if(num1 === dup) return palindrome;
  
  else  return "not-palindrome";


}



console.log(isPalindrome(123));


//----------------------------------------------string-----------------------------------------//


function isPalindromeString(str){


  let ans = str.split('').reverse().join('');

  return str === ans;
}

console.log(isPalindromeString("ollo"));


//--------------------------------------------array-------------------------------------------------------//

function isPalindromeArray(arr){


  let start = 0;
  let end = arr.length - 1;

  while(start < end) {

    if(arr[start] !== arr[end]) return false;

    start++;
    end--;
  }
  return true;
}

console.log(isPalindromeArray([1,2,34,5]));

