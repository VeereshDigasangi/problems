function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        console.log("currentVal",currentVal);
        for (var j = i-1; j >=0 && arr[j]>currentVal; j--) {
            console.log("j ",j);
            console.log("arr[j] ",arr[j]);
            console.log("arr[j+1] ",arr[j+1]);
            arr[j+1]=arr[j];
            console.log("inner loop --------",arr);

        }
        console.log("outside loop j value",j);
        arr[j+1]=currentVal;
        console.log("arr =========================",arr);
    }
    return arr;
}

console.log(insertionSort([2,4,1,8,7,44]));