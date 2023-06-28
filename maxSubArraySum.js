let a = [2,6,9,2,1,8,5,6,3];
let n = 3;
/**
 * WAP to find the max sub array of sum, sub array length would be specified N
 */
console.log(minSubArrayLen(a, n));
//my approach - naive approach
function maxSubArraySum2(a, n) {
  if (n > a.length) return null;
  let maxSum = -Infinity;
  for (let i = 0; i < a.length - n + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < n; j++) {
      tempSum += a[i + j];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

//refactored approach - O(n)
function maxSubArraySum1(a, n) {
  if (n > a.length) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += a[i];
  }
  tempSum = maxSum;
  for (let i = n; i < a.length; i++) {
    tempSum = tempSum - a[i - n] + a[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
/**
 * [1, 2, 3, 8, 7, 4, 5, 5, 6];s
 * tempsum=6
 *
 * tempsum=13
 *
 * tempsum=18
 *
 * tempsum=19
 */

function maxSubArraySumm(a, n) {
  let tempSum=0||null;
  for (let i = 0; i < a.length; i++) {
    let sum=a[i];
  for (let k = i+1; k < n+i; k++) {
     sum+=a[k];
 }
 console.log(sum,tempSum);
  if(sum>tempSum)
  tempSum=sum;
}
return tempSum;
}
// [2,6,9,2,1,8,5,6,3];
// 3
function maxSubArraySum(a,n){
  let sum=0;
  let tsum=0;
  for (let i = 0; i < n; i++) {
    sum+=a[i];
  }
  tsum=sum;
  for (let j = n; j < a.length; j++) {
     tsum=(tsum+a[j])-a[j-n];
    sum=Math.max(tsum,sum);   
  }
  return sum;

}

// 15+7-1=21
// sum=21
// 21+7-3=25
// sum=25
// 25+8-5=28
// sum=28
