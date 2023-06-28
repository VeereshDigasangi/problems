function swapTwoNums(a,b) {
    // let temp=a;
    // a=b;
    // b=temp;
    b=b+a;
    a=b-a;
    b=b-a
    return {a,b}
    
}

console.log(swapTwoNums(22,44));

//22 44
//b=66
//a=66-22=44
//b=66-44=22