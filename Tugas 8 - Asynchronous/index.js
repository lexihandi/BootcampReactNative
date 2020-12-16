var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

console.log("Nomer 1");
const readBook = (time, index) => {
  if (books[index] !== undefined) {
    readBooks(time, books[index], function (sisaWaktu) {
      index++;
      readBook(sisaWaktu, index);
    });
  } else {
    console.log("waktu habis");
  }
};

readBook(10000, 0);
