var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

console.log("Nomer 2");
function readPromise(time, index) {
  if (books[index] !== undefined) {
    readBooksPromise(time, books[index])
      .then(function (fulfilled) {
        index++;
        readPromise(fulfilled, index);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

readPromise(10000, 0);
