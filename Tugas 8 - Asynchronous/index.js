var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

const readBook = (initTime, index) => {
  if (books[index] !== undefined) {
    readBooks(initTime, books[index], function (sisaWaktu) {
      index++;
      readBook(sisaWaktu, index);
    });
  }
};

readBook(10000, 0);
