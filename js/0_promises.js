var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!!!');
  }, 1000);
});

promise.then((value) => {
  console.log(value);
  // expected output: "Resolved!!!"
});

console.log(promise);
// expected output: [object Promise]
