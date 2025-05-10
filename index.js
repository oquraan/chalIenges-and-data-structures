function ArrayReversal(params) {
  //this is a  a first solution  .
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
  var count = 0,fre = 0;
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
MostFrequentNumber([1, 1, 2, 3, 3, 3, 1, 1, 5, 5, 6, 7, 2, 1, 1, 8, 8, 8, 8, 8,8,]);
