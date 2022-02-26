const myPromise = new Promise(function (myResolve, myReject) {

  myResolve(console.log('Berhasil'));
  myReject();
});

myPromise.then(
  function (error) {
    console.log('ini error');
  },
  function () {
    console.log('berhasil')
  }
);
