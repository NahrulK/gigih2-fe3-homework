// Session 2 coba-coba dolo
/*
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

// another trying
var janji = new Janji(function (resolve, reject) {
  if (1 > 2) {
    resolve("stuf worked");
  } else {
    reject(Error("it broke"));
  }
});

janji.then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log(err);
  }
);
*/
// another promise exaple again

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log("world!"));

console.log("hello!");
