// Write function all() that accepts an array and a callback and returns true if the callback returns true for every item in the array

function all(items, callback, tail = items.length - 1) {
  if (tail == 0) {
    return callback(items[0]);
  }
  return callback(items[tail]) && all(items, callback, tail - 1);
}

var allAreLessThanTen = all([1, 2, 9], function (num) {
  return num < 10;
});

console.log(allAreLessThanTen);
