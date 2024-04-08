// const reverseString = function (str) {
//   let index = str.length - 1;
//   let stringBuilder = "";

//   for (index; index >= 0; index--) {
//     stringBuilder += str[index];
//   }

//   return stringBuilder;
// };

const reverseString = function (str) {
  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
