const palindromes = function (str) {
  const allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const originalMiddleIndex = _getMiddleIndex(str);

  let strArray = str.toLowerCase().split("");
  strArray = strArray.filter((char) => allowedChars.includes(char));
  const middleIndex = _getMiddleIndex(strArray);

  if (_isEven(originalMiddleIndex)) {
    const leftArr = strArray.slice(0, middleIndex);
    const rightArr = strArray.slice(middleIndex, strArray.length);

    let rightArrReversed = rightArr.reverse();
    return leftArr.join("") === rightArrReversed.join("");
  } else {
    const leftArr = strArray.slice(0, middleIndex);
    const rightArr = strArray.slice(middleIndex + 1, strArray.length);

    let rightArrReversed = rightArr.reverse();
    return leftArr.join("") === rightArrReversed.join("");
  }
};

function _isEven(num) {
  return num % 2 === 0;
}

function _getMiddleIndex(arr) {
  return Math.floor(arr.length / 2);
}

// Do not edit below this line
module.exports = palindromes;
