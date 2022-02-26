myFunction = async () => {
 await console.log('Hi Friends');
 console.log('Hi Mama');
 console.log('Hi Papa');
};
//myFunction();


async function myDisplay() {
    console.log('Hi Ana');
    let myPromise = new Promise(function(resolve) {
        setTimeout(function () {
            resolve;
            console.log('Hello Everyone !!');
        }, 1000);
    });
    console.log('Hi Elsa');

    await myPromise;
}
myDisplay();