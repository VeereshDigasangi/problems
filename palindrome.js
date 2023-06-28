const str1="gadag";

function isPalindrome(str) {
    const len=str.length;
    for (let i = 0; i < Math.floor(len/2); i++) {
        if(str[i]!==str[len-1-i])    
        return false;
    }
    return true
    
    
}

console.log(isPalindrome(str1));

//Recursion
// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }