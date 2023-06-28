/*
Write a function called isSubsequence which takes in two strings
 and checks whether the characters in the first string form a subsequence 
 of the characters in the second string. In other words, the function should 
 check whether the characters in the first string appear somewhere in the second
  string, without their order changing.

  Examples:
     isSubsequence('hello', 'hello world'); // true
     isSubsequence('sing', 'sting'); // true
     isSubsequence('abc', 'abracadabra'); // true
     isSubsequence('abc', 'acb'); // false (order matters)
     Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - O(1)
*/

// console.log(isSubsequence("abc", "abracadabra"));
//failed to achieve
function isSubsequence2(target, source) {
  const sequenceJson = {};
  for (let i = 0; i < source.length; i++) {
    sequenceJson[source[i]] = i;
  }
  let temp = 0;
  console.log(sequenceJson);
  for (let j = 0; j < target.length; j++) {
    if (sequenceJson[target[j]] >= 0) {
      if (sequenceJson[target[j]] < temp) {
        return false;
      }
      temp = sequenceJson[target[j]];
      sequenceJson[target[j]] = -1;
    } else return false;
  }
  return true;
}
/**
 * hello world - hello
 *{ h:0,e:0,l:3,l:4,o:5:'':6,w:7}
 *
 */
//str1="abc",
//str2= "abracadabra"
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return false;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i == str1.length) return true;
    j++;
  }
  return false;
}
console.log(isSubsequence("abc", "abracadabra"));
