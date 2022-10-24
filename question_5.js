// Write a function productOfArray(), it takes in an array of numbers and returns their product.

function productOfArray(num_list, tail = num_list.length - 1) {
  if (tail == 0) {
    return num_list[0];
  }
  return num_list[tail] * productOfArray(num_list, tail - 1);
}

console.log(productOfArray([1, 2, 3, 10]));
