"use strict";

function fibonacci(num1 = 0, num2 = 1) {
  const fibonacciSequence = new Array();
  fibonacciSequence.push(num1);
  fibonacciSequence.push(num2);

  while (fibonacciSequence[fibonacciSequence.length - 1] < 350) {
    const newElement =
      fibonacciSequence[fibonacciSequence.length - 2] +
      fibonacciSequence[fibonacciSequence.length - 1];

    fibonacciSequence.push(newElement);
  }

  return fibonacciSequence;
}

function isFibonnaci(num) {
  const isFibonacciNumber = Boolean(
    fibonacci().find((element) => element === num)
  );

  return isFibonacciNumber;
}

module.exports = {
  fibonacci,
  isFibonnaci,
};
