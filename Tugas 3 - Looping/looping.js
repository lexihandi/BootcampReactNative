//No 1
//Looping Pertama
counter = 2;
console.log("Nomer 1");
console.log("Looping Pertama");
while (counter <= 20) {
  console.log(counter + " - I Love Coding");
  counter += 2;
}
console.log("\n");

//Looping Kedua
console.log("Looping Kedua");
while (counter > 2) {
  counter -= 2;
  console.log(counter + " - I will become a mobile developer");
}
console.log("\n");

//No 2
console.log("Nomer 2");
for (var i = 1; i < 20; i++) {
  if (i % 3 === 0 && i % 2 === 1) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else if (i % 1 === 0) {
    console.log(i + " - Santai");
  }
}
console.log("\n");

//No 3
console.log("Nomer 3");
for (var j = 1; j <= 4; j++) {
  var str = "";
  for (var k = 1; k <= 8; k++) {
    str += "#";
  }
  console.log(str);
}
console.log("\n");

//No 4
console.log("Nomer 4");
for (var j = 1; j <= 7; j++) {
  var str = "";
  for (var k = 1; k <= j; k++) {
    str += "#";
  }
  console.log(str);
}
console.log("\n");

//No 5
console.log("Nomer 5");
for (var j = 1; j <= 8; j++) {
  var str = "";
  for (var k = 1; k <= 8; k++) {
    if ((j + k) % 2 !== 0) {
      str += "#";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
console.log("\n");
