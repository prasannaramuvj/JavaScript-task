let users = [
    { id: 1, name: "Alice", email: "alice@gmail.com",number:{city:"thanjavur"} },
    { id: 2, name: "Bob", email: "bob@gmail.com",number:{city:"trichy" }},
    { id: 3, name: "Alice", email: "alice@gmail.com",number:{city:"thanr" } }
];

let finalUsers = removeDuplicatesKeepLast(users);
console.log(finalUsers);


function removeDuplicatesKeepLast(users){

  let map = new Map();

  for(let i=0;i<users.length;i++){
    let item = users[i];

    if(users[i].number.city === "thanjavur"){

    let key = item.email;

    map.set(key,item);

  }
}
  return map;
}