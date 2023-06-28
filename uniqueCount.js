let a = [1, 2, 3, 4, 4, 4, 5, 5,9,11,12];
//Note: Array must be in sorted order
console.log(countUniqueValues(a));
//my approach time O(N)
function countUniqueValues1(a) {
  let uniqueCount = 0;
  const uniqueJson = {};
  for (const val of a) {
    if (!uniqueJson[val]) {
      uniqueJson[val] = true;
      uniqueCount += 1;
    }
  }
  return uniqueCount;
}

//teacher approach with time and space complexity is O(n)
//Shift i counter as soon as receive new element and update the ith index with j value
function countUniqueValues2(a) {
  let i = 0;
  if (!a.length) return i;
  for (let j = 1; j < a.length; j++) {
    if (a[i] !== a[j]) {
      i++;
      a[i] = a[j];
    }
  }
  return i + 1;
}
//
//[1, 2, 3, 4, 4, 4, 5, 3, 5, 6];
//
/** i
 * [1,1]; i=0,j=1
 *    j
 *     i
 * [1, 2, 3, 4, 4, 4, 5, 3, 5, 6]; i=1,j=2
 *        j
 *
 *        i
 * [1, 2, 3, 4, 4, 4, 5, 3, 5, 6]; i=1,j=2
 *           j
 *
 *
 *              i
 * [1, 2, 3, 4, 5, 4, 5, 3, 5, 6]; i=1,j=2
 *                     j
 */

function countUniqueValues(a){
  let i=0;
  for (let j = 1; j < a.length;j++) {
    const element = a[j];
    if(a[i]!==a[j]){
      i++;
      a[i]=a[j];
    } 
  }
  console.log(a);
  return i+1;
}
