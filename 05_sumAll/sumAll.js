const sumAll = function (x, y) {
  if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0)
    return "ERROR";
  fromInt = Math.min(x, y);
  toInt = Math.max(x, y);
  sum = 0;
  for (let i = fromInt; i <= toInt; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
