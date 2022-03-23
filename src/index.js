// Session 2 coba-coba dolo

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Berhasil");
  }, 5000);
});

console.log(myPromise);

myPromise
  .then((data) => {
    console.log("resolved : " + data);
  })
  .catch((error) => {
    console.error(error);
  });
