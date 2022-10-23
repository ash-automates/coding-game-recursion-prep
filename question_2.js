// Write a function power() that takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 0));
