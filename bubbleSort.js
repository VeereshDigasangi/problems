function bubbleSort(array){
    if(!array.length)
        return null;
    for (let i = 0; i < array.length; i++) {
        let isSwap=false;
        for (let j = i+1; j < array.length-1; j++) {
            if(array[i]>array[j]){
                isSwap=true;
                [array[i],array[j]]=[array[j],array[i]]
            }
        }
        if(isSwap==false)
            break;
    }
    return array;
}

console.log(bubbleSort([1, 2, 4, 8, 7, 44]));