const a = "texttwisttime";
const b = "timetwisttext";
console.log(sumZero(a, b));

function sumZero(a, b) {
  if (a.length !== b.length) return false;
  if (a === b) return true;
  const frequencyCounter1 = {};
  //   const frequencyCounter2 = {};
  for (const char of a) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  console.log(frequencyCounter1);
  for (const key of b) {
    if (!frequencyCounter1[key]) {
      return false;
    } else {
      frequencyCounter1[key] -= 1;
    }
  }
  return true;
}
