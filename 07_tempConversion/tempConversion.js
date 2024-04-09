const convertToCelsius = function (fahrenheitTemperature) {
  return parseFloat(((fahrenheitTemperature - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (celsiusTemperature) {
  return parseFloat((celsiusTemperature * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
