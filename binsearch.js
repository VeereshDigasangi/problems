// // // let a = [1, 2, 3, 4, 5, 6, 43, 76, 99];
// // // let x = 43;
// // // let length = a.length;


// // // function binSearch(arr, l, lenght, x) {

// // //     if(lenght>=l){
// // //     let mid =1+Math.floor((lenght-1) / 2);
// // //     if (arr[mid] == x) {
// // //         return mid;
// // //     } 
// // //     if (arr[mid] > x) {
// // //         //if x is smaller than the mid value decrease mid
// // //         return binSearch(arr, 1, mid - 1,x)
// // //     } 

// // //         // if x is greater than the mide value increase mid
// // //      return   binSearch(arr,mid + 1,lenght,x)


// // // }
// // // return -1

// // // }



// // // console.log(binSearch(a,0,length-1,43));

// // function binarySearch2(arr, low, length, x) {
// //     if (length >= low) {
// //         let mid = low + Math.floor((length - low) / 2);

// //         // If the element is present at the middle
// //         // itself
// //         if (arr[mid] == x)
// //             return mid;

// //         // If element is smaller than mid, then
// //         // it can only be present in left subarray
// //         if (arr[mid] > x)
// //             return binarySearch(arr, low, mid - 1, x);

// //         // Else the element can only be present
// //         // in right subarray
// //         return binarySearch(arr, mid + 1, length, x);
// //     }

// //     // We reach here when element is not
// //     // present in array
// //     return -1;
// // }

// function binarySearch(arr,val) {

//     let min=0;
//     let max=arr.length-1;
//     while(min<=max){
//     let mid=Math.floor((min+max)/2)
//     let currentItem=arr[mid]
//     if(currentItem<val){
//         min=mid+1;
//     }else if( currentItem>val){
//         max=mid-1
//     }else{
//         return mid;
//     }
//     }
//     return -1;
    
    
// }

// let arr = [1, 2, 3, 7, 9, 11, 15, 18, 20,21,25];
// let x = 21;
// let result = binarySearch(arr, x);
// console.log(result);
// //43
// // [1, 2, 3, 4, 5, 6, 43, 76, 99];
// // min                         max



function binarySearch(array, val) {
    if(!array.length)
        return null;
    let min=0,max=array.length-1;
    while(min<=max){
        // console.log(min,max);
        let mid=Math.floor((min+max)/2);
        // console.log("mid ",mid);
        if(val<array[mid])
            max=mid-1;
        else if(val>array[mid])
            min=mid+1;
        else
            return mid;
    }
    return -1
}

console.log(binarySearch([1,7,9,11,13,14,21,25],10)); 