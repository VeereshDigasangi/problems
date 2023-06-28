let a=[1,2,4,7,8,9,3,5,6,8,91,4,6,9,22];

function findSumOfAllEvenNumbers(items) {
    let sum=0;
    for(let i=0;i<items.length;i++){
        if(items[i]%2===0){
            console.log(items[i]);
            sum+=items[i]
        }
    }
    return sum;
}

console.log(findSumOfAllEvenNumbers(a)
    );