// Input - [17, 10, 9, 7, 4, 1 , 2, 8, 5, 13]
// output - [[10, 7],[9, 8],[ 4, 13]]


// function sumOfPairs(arr) {
//     if(!arr || !arr.length){
//         return
//     }
//     const result=[];
//     const target= arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             let sum=arr[i]+arr[j];
//             if(sum==target){
//                 result.push(`${arr[i]} ${arr[j]}`)
//             }
//         }  
//     }
//     return result;
// }

//optimized approach
function sumOfPairs(arr) {
    if (!arr || arr.length < 2) {
      return [];
    }
  
    const result = [];
    const target = arr[0];
    const seen = {}
  
    for (let i = 1; i < arr.length; i++) {
      const num = arr[i];
      const complement = target - num;
  
      if (seen[complement]) {
        const pair = [num,complement].join(' ')
        result.push(pair)
      }else{
        seen[num]=num;
      }
    }
  return result;
  }
const arr=[17, 10, 9, 7, 4, 1 , 2, 8, 5, 13];
console.log(sumOfPairs(arr))