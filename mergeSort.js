// function mergeArray(arr1,arr2) {
//     let i=0,j=0;
//     let result=[];
//     while(i<arr1.length&&j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             result.push(arr1[i])
//             i++;
//         }else{
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i<arr1.length){
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j<arr2.length){
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;
// }
// function mergeSort(arr) {
//     console.log(arr);
//     if(arr.length<=1)
//         return arr;
//     let mid=Math.floor(arr.length/2);
//     let left= mergeSort( arr.slice(0,mid))
//     console.log("left",left);
//     let right= mergeSort( arr.slice(mid))
//     console.log("right ",right);
//     return mergeArray(left,right)
// }

console.log(mergeArray([10,24,74,76],[1,9,72,73]));


function mergeArray(arr1,arr2) {
    let i=0;
    let j=0;
    let results=[];

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            results.push(arr1[i]);
            i++;
        }else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results
}