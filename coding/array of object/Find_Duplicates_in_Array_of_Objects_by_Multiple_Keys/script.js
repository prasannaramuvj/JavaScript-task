const users = [
  {id:1,name:"prasanna",email:"prasannaramu2004@gmail.com"},
  {id:2,name:"jagadish",email:"jagadish@gmail.com"},
  {id:1,name:"prasanna",email:"prasannaramu20094@gmail.com"},
  {id:2,name:"jagadish",email:"jagadish@gmail.com"}



];

// function extractDuplicate(arr,key){

//   let map = {};
//   let duplicates = [];

//   for(let i=0;i<arr.length;i++){
//     let item = arr[i];

//     let keyValue = item[key];

//     if(map[keyValue]){
//       duplicates.push(item);
//     }
//     else{
//       map[keyValue] = true;
//     }
//   }
//   return duplicates
// }

// let duplicateUsersByEmail = extractDuplicate(users, 'email');
// console.log(duplicateUsersByEmail);



//---------------------------------------------------------//


function extractDuplicate1(arr,key){
  let map = {};
  let duplicates = [];
  

  for(let i=0;i<arr.length;i++){
    let item = arr[i];

    let keyValue = key.map(function (k){
      return item[k];
    }).join('|');

    if(map[keyValue]){
      duplicates.push(item);
    }
    else{
      map[keyValue] = true;
    }
  }
  return duplicates
}

var duplicateUsers1 = extractDuplicate1(users, ['name', 'email']);
console.log(duplicateUsers1);