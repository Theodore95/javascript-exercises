const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (intArr) {
  return intArr.reduce((acc, next) => acc + next, 0);
};

const multiply = function (intArr) {
  return intArr.reduce((acc, elem) => acc * elem, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  if (x <= 1) return 1;
  else return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
