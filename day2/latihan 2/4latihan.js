function myFunction(x, y = 10) {
 //   return console.log(x + y);
  }
  //myFunction(7); 
  
  
  function sum(...args) {
      let sum = 0;
      for (let arg of args) sum += arg;
      return console.log(sum);
    }
    
//    let x = sum(4, 9, 16, 25, 29, 100, 66, 77);




try {
  data = 1111111111111;

  console.log('Ini benar', data);
} catch (error) {
  console.log('ini error');
}
