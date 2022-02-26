 myFunction = async () => {
   console.log('Halllo Mars');
   await console.log('Halllo Dunia');
   console.log('Halllo Jupiter');
 };

 //myFunction();

async function myDisplay() {
  console.log('HI John');
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve;
      console.log('Hello World !!');
    }, 3000);
  });
  console.log('HI Doe');

  await myPromise;
}

myDisplay();
