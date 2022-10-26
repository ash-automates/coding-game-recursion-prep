// Write a function replicate() that returns an array containing repetitions of the number argument

function replicate(reps, num, res = []) {
  if (reps < 1) {
    return [];
  }
  res.push(num);
  replicate(reps - 1, num, res);
  return res;
}

console.log(replicate(3, 5));
console.log(replicate(1, 69));
console.log(replicate(-2, 6));
