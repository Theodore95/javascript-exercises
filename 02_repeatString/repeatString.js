const repeatString = function (str, repeat) {
  let stringBuilder = "";
  if (repeat < 0) return "ERROR";
  for (let i = 0; i < repeat; i++) {
    stringBuilder += str;
  }
  return stringBuilder;
};

// Do not edit below this line
module.exports = repeatString;
