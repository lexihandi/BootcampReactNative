var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

console.log("Nomer 2");
const readBooks = (time, books) => {
  readBooksPromise(time, books[0])
    .then(function (sisaWaktu) {
      readBooks(sisaWaktu, books.slice(1));
    })
    .catch(function (sisaWaktu) {
      console.log("waktu habis");
    });
};

readBooks(10000, books);
