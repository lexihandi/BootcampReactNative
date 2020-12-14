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
      var objName = [i + 1] + ". " + people.firstName + " " + people.lastName;
      console.log(objName + ": ");
      console.log(people);
    } else {
      console.log(' "" ');
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
arrayToObject(people2);
arrayToObject([]); //Error Case
console.log("\n");

//nomer 2
console.log("Nomer 2");
console.log("\n");

//nomer 3
console.log("Nomer 3");
console.log("\n");
