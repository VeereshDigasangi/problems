// const a = [-3, -2, -1, 0, 2, 4, 3, 4];
// console.log(sumZero(a));
// //Multiple pointers to return sum zero of two number in an array
// //refactored approach
// function sumZero(a) {
//   let left = 0;
//   let right = a.length - 1;
//   while (left < right) {
//     let sum = a[left] + a[right];
//     if (sum == 0) return [a[left], a[right]];
//     //sum>0 because array is in order,
//     //if sum os greater than 0 mean right value is higher than left value
//     else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// //Navie approach
// // function sumZero(a) {
// //   for (let i = 0; i < a.length; i++) {
// //     for (let j = i + 1; j < a.length; j++) {
// //       if (a[i] + a[j] === 0) {
// //         return [a[i], a[j]];
// //         // return 0;
// //       }
// //     }
// //   }
// //   return;
// // }



function sumZero(arr1) {
  let startIndex = 0;
  let endIndex = arr1.length - 1;
  // for (let i = 0; i < arr1.length;) {
  //   let sum=arr1[startIndex]+arr1[endIndex];
  //   if(startIndex>endIndex)
  //     return; 
  //    else if(sum===0)
  //   return [arr1[startIndex],arr1[endIndex]]
  //   else if(sum>0){
  //     endIndex--;
  //   } else if(sum<0){
  //     startIndex++;
  //   } 
  // }


  while (startIndex < endIndex) {
    let sum=arr1[startIndex]+arr1[endIndex];
    if (sum === 0)
      return [arr1[startIndex], arr1[endIndex]]
    else if (sum > 0) {
      endIndex--;
    } else {
      startIndex++;
    }
  }


}

const a = [-6, -2, -1, 3,  4, 5];
console.log(sumZero(a));