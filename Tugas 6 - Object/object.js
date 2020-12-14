//nomer 1
console.log("Nomer 1");
function arrayToObject(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr.length !== 0) {
      var arrs = arr[i];
      var now = new Date();
      var thisYear = now.getFullYear();
      var people = {};

      function calculateYear(year) {
        var age;
        if (year < thisYear) {
          age = thisYear - year;
        } else if (!year || year > thisYear) {
          age = "Invalid birth year";
        }
        return age;
      }

      var people = {
        firstName: arrs[0],
        lastName: arrs[1],
        gender: arrs[2],
        age: calculateYear(arrs[3]),
      };
      var objName = `${i + 1}. ${people.firstName} ${people.lastName} `;
      console.log(objName + ": ");
      console.log(people);
    } else {
      console.log("");
    }
  }
}

var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people);
console.log("\n");
arrayToObject(people2);
arrayToObject([]); //Error Case
console.log("\n");

//nomer 2
console.log("Nomer 2");
function shoppingTime(memberId, money) {
  var saleItems = [
    {
      itemName: "Sepatu Stacattu",
      price: 1500000,
    },
    {
      itemName: "Baju Zoro",
      price: 500000,
    },
    {
      itemName: "Baju H&N",
      price: 250000,
    },
    {
      itemName: "Sweater Uniklooh",
      price: 175000,
    },
    {
      itemName: "Casing Handphone",
      price: 50000,
    },
  ];

  function itemPurchased(money, name) {
    var list = [];
    var pushName = name;
    var item;
    for (item of saleItems) {
      if (item.price <= money) {
        list.push(item[pushName]);
      }
    }
    return list;
  }

  function moneyRemain(coin) {
    var pay = coin;
    var listprice = itemPurchased(coin, "price");
    for (var i = 0; i < listprice.length; i++) {
      pay -= listprice[i];
    }
    return pay;
  }

  if (memberId && money > 50000) {
    return {
      memberId: memberId,
      money: money,
      listPurchased: itemPurchased(money, "itemName"),
      changeMoney: moneyRemain(money),
    };
  } else if (memberId && money < 50000) {
    return "Mohon maaf uang tidak cukup";
  } else if (!memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
}
console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("82Ku8Ma742", 170000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime("234JdhweRxa53", 15000));
console.log(shoppingTime());

console.log("\n");

//nomer 3
console.log("Nomer 3");
function naikAngkot(listPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var transaksi = [];
  for (var i = 0; i < listPenumpang.length; i++) {
    var obj = {
      penumpang: listPenumpang[i][0],
      naikDari: listPenumpang[i][1],
      tujuan: listPenumpang[i][2],
      bayar:
        (rute.indexOf(listPenumpang[i][2]) -
          rute.indexOf(listPenumpang[i][1])) *
        2000,
    };
    transaksi.push(obj);
  }
  return transaksi;
}
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
