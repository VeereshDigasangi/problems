function isPrime(n) {
    if(n==1||n==0)
    return false;
    if(n===2)
    return true;
    for (let i = 2; i < n/2; i++) {
        if(n%i===0)
        return true;  
    }
    return false;
    
}
console.log(isPrime(11));