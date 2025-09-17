let users = [
    { id: 1, name: "Alice", email: "alice@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" },
    { id: 3, name: "Alice", email: "alice@gmail.com" } 
];

let finalUsers = removeDuplicatesKeepLast(users);
console.log(finalUsers);


function removeDuplicatesKeepLast(users){

  let map = new Map();

  for(let i=0;i<users.length;i++){
    let item = users[i];

    let key = item.email;

    map.set(key,item);

  }
  return map;
}