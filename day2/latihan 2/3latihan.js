//function car() {


//    return console.log('it is my car');
//}
//car();


//animals = [
 //   'Tiger',
 //   'Mouse', 
 //   'Rabbit', 
 //   'Lion', 
 //   'Butterfly'
//];

//console.log(animals[4]);

//animals.map((hewan) => console.log(hewan));


//let data = 10;
//try {
//  data = 99999999999999999999999999;

//  console.log('Ini benar', data);
//} catch (error) {
//  console.log('ini error');
//}


//let text = 'Hi i am lalisa from BlackPink.';
//console.log(text.includes('blackpink'));
  

const animals = [
    'tiger',
    'lion',
    'mouse',
    'cat'
];
const keys = animals.keys();

//console.log(animals[1]);

let text = '';
for (let x of keys) {
    text += x + 'rawr';
    console.log(text);
}