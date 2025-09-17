  



  function anagram(str1,str2){


    if(str1.length !== str2.length ) return false;


    str1  = str1.toLowerCase().split('').sort().join('');
    str2  = str2.toLowerCase().split('').sort().join('');



    if(str1 === str2){
      return true;
    }
  }

  console.log(anagram("listen", "silent"));

  //---------------------------------------------//
    



  function anagram1(num1,num2){


    


    num1  = num1.toString().split('').sort().join('');
    num2  = num2.toString().split('').sort().join('');



    if(num1 === num2){
      return true;
    }

    return false;
  }

  console.log(anagram1(123,321));

  //-----------------------------------------array----------------------------------------------//



  function anagramarray(arr1,arr2){

    if(arr1.length !== arr2.length)  return false;

    arr1 = arr1.sort();
    arr2 = arr2.sort();

    for(let i = 0 ; i<arr1.length;i++){

      if(arr1[i] !== arr2[i]) return false;


    }
    return true;
  }

  console.log(anagramarray([1,2,3],[3,2,1]));