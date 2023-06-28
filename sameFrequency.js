/**
 *
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 */
console.log(sameFrequency(22, 222)); //true
function sameFrequency(a, b) {
  a = String(a);
  b = String(b);

  if (a.length !== b.length) return false;
  const frequencyCounter = {};
  for (const key of a) {
    if (!frequencyCounter[key]) {
      frequencyCounter[key] = 1;
    } else frequencyCounter[key] += 1;
  }

  for (const key of b) {
    if (!frequencyCounter[key]) return false;
    else {
      frequencyCounter[key] -= 1;
    }
  }
  return true;
}
