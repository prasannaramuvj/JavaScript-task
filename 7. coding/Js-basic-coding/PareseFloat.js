

let addPareseFloat = (a,b) => {

  a = parseFloat(a);
  b = parseFloat(b);

  return a*b

}

let parse = addPareseFloat(5.006,6.777);
console.log(parse.toFixed(2));


// node PareseFloat.js