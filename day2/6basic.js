const myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(console.log('Berhasil RESOLVE')); // when successful
  myReject(); // when error
});

// // "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function (error) {
    console.log('Ini Error');
  },

  function () {
    console.log('Berhasil');
  }
);
