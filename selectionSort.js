function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest=i;
        for (let j = i+1; j < arr.length-1; j++) {
            console.log("compared between",arr[j],arr[j+1]);
            if(arr[j]<arr[smallest]){
                 smallest=j;
            }
            
        }
        if(i!==smallest)
            [arr[i],arr[smallest]]=[arr[smallest],arr[i]];
        console.log(i," PASS ARRAY: ",arr);
    }
    return arr;
    
}

console.log(selectionSort([2,4,1,8,7,44]));