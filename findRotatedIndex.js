/**
 * Divide and Conquer - findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
The function should return the index of the integer in the array. If the value is not found, return -1.

Constraints:

Time Complexity - O(log n)

Space Complexity - O(1)

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
 */

function findRotatedIndex(arr,n) {
    let left=0;
    let right=arr.length-1;
    if(arr[left]===n)
        return 0;
    else if(arr[right]===n)
        return right;
    
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===n)
            return mid;
        if(arr[left]<=arr[mid]){
            if(arr[left]<=n && n<arr[mid]){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }else{
            if(arr[mid]<n&&n<=arr[right]){
                left=mid+1;
            }else{
                right=mid-1
            }
        }
    }
    return -1;
}

console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
