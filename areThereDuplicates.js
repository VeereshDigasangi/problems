/**
 * Implement a function called, areThereDuplicates which accepts a variable
 *  number of arguments, and checks whether there are any duplicates among
 * the arguments passed in. You can solve this using the frequency counter pattern OR
 * the multiple pointers pattern.
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 * Bonus:
 * Time - O(n log n)
 * Space - O(1)
 * Examples:
 *  areThereDuplicates(1, 2, 3) // false
 *  areThereDuplicates(1, 2, 2) // true
 *  areThereDuplicates('a', 'b', 'c', 'a') // true
 */

console.log(areThereDuplicates("a", "b", "c"));
//frequency counter algo
function areThereDuplicates2(...a) {
  console.log(a);
  const duplicates = {};
  for (const key of a) {
    if (!duplicates[key]) duplicates[key] = 1;
    else return true;
  }
  return false;
}

//multi pointers algo
function areThereDuplicates1(...a) {
  a.sort();
  console.log(a);
  let start = 0;
  let next = 1;
  while (next < a.length) {
    if (a[start] === a[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
/**
 * [ 1, 2, 3, 3, 4, 5 ]
 * 1<6,1===2,start=1,next=2
 * 2<6 2===3 start=2,next=3
 * 3<6 3===3 true
 *
 */

//One liner solution
function areThereDuplicates(...a) {
  console.log(new Set(a));
  return new Set(a).size !== a.length;
}
