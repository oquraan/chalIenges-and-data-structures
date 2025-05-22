
function reverseCharacters(params) {
  let stringCharacters = params;
  if (typeof params == "number") {
    stringCharacters = params.toString();
  } else if (params instanceof Array) {
    stringCharacters = params.join("");
  }

  let reverseChars = "";
  for (let i = stringCharacters.length - 1; i >= 0; i--) {
    reverseChars  += stringCharacters[i];
  }
  return reverseChars;
}
console.log(reverseCharacters("ramo"));
console.log(reverseCharacters("epircsavaj"));
console.log(reverseCharacters("nadroj"));
console.log(reverseCharacters("465cba"));
console.log(reverseCharacters(123456789));
console.log(reverseCharacters([1, 2, 3, 4, 5]));
console.log(reverseCharacters(12.25));