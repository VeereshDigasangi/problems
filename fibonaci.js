
function fibonaci(n) {
    if(n<=1)
    return n;
    return fibonaci(n-1)+(fibonaci(n-2));
}

function findFibonaci(n) {
    return fibonaci(n)
}
console.log(findFibonaci(11));