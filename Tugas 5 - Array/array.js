//nomer 1
console.log("Nomer 1");
function Range(start, end) {
  if (!start || !end) {
    return -1;
  } else {
    result = [];
    if (start < end) {
      for (var i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      for (var i = start; i >= end; i--) {
        result.push(i);
      }
    }
    return result;
  }
}
console.log(Range(1, 10));
console.log(Range(1));
console.log(Range(11, 18));
console.log(Range(54, 50));
console.log(Range());
console.log("\n");

//Nomer 2
console.log("Nomer 2");
function rangeWithStep(start, end, step = 1) {
  if (!start || !end) {
    return -1;
  } else {
    result = [];
    if (start < end) {
      for (var i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (var i = start; i >= end; i -= step) {
        result.push(i);
      }
    }
    return result;
  }
}
console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep(5, 2, 1));
console.log(rangeWithStep(29, 2, 4));
console.log("\n");

//Nomer 3
console.log("Nomer 3");
function sum(start, end, step = 1) {
  if (!start) {
    return 0;
  } else if (!end) {
    return start;
  } else {
    total = 0;
    if (start < end) {
      for (var i = start; i <= end; i += step) {
        total += i;
      }
    } else {
      for (var i = start; i >= end; i -= step) {
        total += i;
      }
    }
    return total;
  }
}
console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(15, 10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());
console.log("\n");

//Nomer 4
console.log("Nomer 4");
function dataHandling(data) {
  for (var i = 0; i < data.length; i++) {
    var dataa = data[i];
    console.log(
      `Nomor ID: ${dataa[0]} \nNama Lengkap: ${dataa[1]} \nTTL: ${dataa[2]} ${dataa[3]} \nHobi: ${dataa[4]} \n`
    );
  }
}

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
dataHandling(input);
console.log("\n");

//Nomer 5
console.log("Nomer 5");
function balikKata(word) {
  var reverse = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));
console.log("\n");

//Nomer 6
console.log("Nomer 6");
var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(textInput) {
  var addData = textInput.splice(4, 1, "Pria", "SMA Internasional Metro");
  var addName = textInput.splice(1, 1, "Roman Alamsyah Elsharawy");
  var addProvince = textInput.splice(2, 1, "Provinsi Bandar Lampung");
  console.log(textInput);

  var splitDate = textInput.splice(3, 1);
  var date = splitDate.toString().split("/");
  var month = date[1];

  switch (month) {
    case "01": {
      console.log("Januari");
      break;
    }
    case "02": {
      console.log("Februari");
      break;
    }
    case "03": {
      console.log("Maret");
      break;
    }
    case "04": {
      console.log("April");
      break;
    }
    case "05": {
      console.log("Mei");
      break;
    }
  }

  var sortDate = date.sort(function (a, b) {
    return b - a;
  });
  console.log(sortDate);

  var formattedDate = splitDate.toString().split("/").join("-");
  console.log(formattedDate);

  var name = textInput[1].toString().slice(0, 15);
  console.log(name);
}
dataHandling2(input);
console.log("\n");
