/**
 * 
 * Divide and Conquer - countZeroes
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, 
 * write a function called countZeroes, which returns the number of zeroes in the array.
 * Solve in O(log n) complexity
 */
//my approach
function countZeroes1(arr) {
    if (!arr.length)
        return null;
    let left = 0;
    let totalZeros = 0;
    right = arr.length - 1;
    let firstFound = null;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        console.log("mid ", mid);
        if (arr[mid] === 0) {
            if (firstFound !== null && firstFound !== arr[mid]) {
                console.log("heriam", firstFound);
                console.log("left", left);
                console.log("right", right);
                console.log("mid", mid);
                totalZeros = arr.length - left;
                break;
            }
            right = mid - 1;
        } else if (arr[mid] === 1) {
            if (firstFound !== null && firstFound !== arr[mid]) {
                totalZeros = arr.length - (right + 1)
                break;
            }
            left = mid + 1;
        }
        if (firstFound === null)
            firstFound = arr[mid];

    }
    return totalZeros;

}
//solved working approach
function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Check if the last element is 1
    if (arr[right] === 1) {
        return 0;
    }

    // Binary search to find the first occurrence of 0
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === 1) {
            // Move the left pointer to the right half
            left = mid + 1;
        } else {
            if (mid === 0 || arr[mid - 1] === 1) {
                // Found the first occurrence of 0
                return arr.length - mid;
            } else {
                // Move the right pointer to the left half
                right = mid - 1;
            }
        }
    }

    return 0; // No zeroes found
}


console.log("res= ", countZeroes([1, 1, 1, 1, 0, 0, 0, 0, 0]));