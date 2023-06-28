// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
console.log( someRecursive([4,6,8], isOdd)); // false

function someRecursive(arr,isOdd){
    if(arr.length>0){
       if(isOdd(arr[arr.length-1]))
        return true;
        else
        return someRecursive(arr.slice(0,-1),isOdd)
    }
    return false
}