var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

const readBook = (time, index) => {
  if (books[index] !== undefined) {
    readBooks(time, books[index], function (sisaWaktu) {
      index++;
      readBook(sisaWaktu, index);
    });
  }
};

readBook(10000, 0);
