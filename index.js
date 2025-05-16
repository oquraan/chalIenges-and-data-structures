function ArrayReversal(params) {
  //this is a  first solution  .
  var arr = [];
  for (let index = params.length - 1; index >= 0; index--) {
    arr.push(params[index]);
  }
  console.log(arr);
  //this is a  secound  solution  .
  arr = [];
  for (let index = 0; index < params.length; index++) {
    arr.push(params[params.length - 1 - index]);
  }
  console.log(arr);
}

ArrayReversal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function MostFrequentNumber(params) {
  var count = 0,
    fre = 0;
  var num;
  for (let index = 0; index < params.length; index++) {
    for (let index2 = 0; index2 < params.length; index2++) {
      if (params[index] == params[index2]) {
        count++;
      }
    }
    if (count > fre) {
      fre = count;
      num = params[index];
    } else if (count == fre) {
      count = 0;
      continue;
    }
    count = 0;
  }
  console.log("Most Frequent Number is: " + num);
}
MostFrequentNumber([
  1, 1, 2, 3, 3, 3, 1, 1, 5, 5, 6, 7, 2, 1, 1, 8, 8, 8, 8, 8, 8,
]);

function ArrayIsNotValid(params) {
  return Array.isArray(params) == false;
}

function ArrayIsEmpty(params) {
  return params.length == 0;
}

function ArrayIsNotNumber(params) {
  for (let index = 0; index < params.length; index++) {
    if (typeof params[index] != "number") {
      return true;
    }
  }
}

function MinimumValue(params) {
  if (ArrayIsNotValid(params)) {
    return "Please enter an array";
  }
  if (ArrayIsEmpty(params)) {
    return "Please enter a non-empty array";
  }
  if (ArrayIsNotNumber(params)) {
    return "Please enter an array of numbers";
  }

  var min = params[0];
  for (let index = 1; index < params.length; index++) {
    if (params[index] < min) {
      min = params[index];
    }
  }
  return "The minimum number is :  " + min;
}

console.log(MinimumValue([-41, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1]));
console.log(MinimumValue([2, 3, 4, 5, 6, 7, 8, 9, 10, -1]));
console.log(MinimumValue([3, 4, 5, 6, 7, 8, 9, 10]));
console.log(MinimumValue([7, 8, 9, 10]));
console.log(MinimumValue());
console.log(MinimumValue([1, 2]));
console.log(MinimumValue([7, "`", 9, 10]));
console.log(MinimumValue(["s", 8, 9, 10, 1]));
console.log(MinimumValue([]));
console.log(MinimumValue(["S", "ss", "ssdd"]));
