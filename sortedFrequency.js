/**
 * Divide and Conquer - sortedFrequency
 * Given a sorted array and a number,
 * write a function called sortedFrequency that counts the occurrences of the number in the array
 * Solve in O(log n) complexity
 */

function sortedFrequency(arr,n) {

    function binarySearch(arr,n,findFirst) {
    let left=0;
    let right=arr.length-1;
    let result=-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===n) {
            result=mid;
           if(findFirst)
               right=mid-1
           else 
               left=mid+1
       }else if(arr[mid]>n){
            right=mid-1
        }
        else {
            left=mid+1
        }
    }
    return result;
}

let firstIndex= binarySearch(arr,n,true)
    if(firstIndex==-1)
        return 0
let lastIndex = binarySearch(arr,n,false)

return lastIndex-firstIndex+1;
}


  

let res=sortedFrequency([1,1,2,2,2,2,3],13) // 4 
console.log(res);