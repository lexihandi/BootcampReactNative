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
console.log("\n");

//Nomer 4
console.log("Nomer 4");
console.log("\n");

//Nomer 5
console.log("Nomer 5");
console.log("\n");

//Nomer 6
console.log("Nomer 6");
console.log("\n");
