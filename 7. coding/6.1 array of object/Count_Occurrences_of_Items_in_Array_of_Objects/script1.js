const users = [
  {id:1,name: "prasanna",email:"prasanna@gmail.com"},
  {id:2,name: "prasanna",email:"prasannaa@gmail.com"},
  {id:3,name: "jason",email:"jason@gmail.com"},
  {id:4,name: "jason",email:"jason@gmail.com"}



]
let countno = countoccurence(users, ['name', 'email']);
console.log(countno);


function countoccurence(arr,key){


  let count ={};

  for(let i=0;i<arr.length;i++){

    let item = arr[i];

    let dummycount = key.map(function (k){
      return item[k];
    }).join('|');

    if(count[dummycount]){
      count[dummycount] +=1;
    }
    else{
      count[dummycount] = 1;
    }

  }
  return count;
}