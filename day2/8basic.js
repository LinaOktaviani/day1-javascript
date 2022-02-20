function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return console.log(x + y);
}
// myFunction(5); // will return 15


function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return console.log(sum);
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x)

