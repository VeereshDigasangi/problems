/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels (d) {

    let i=0;
    const vowels=['a','e','i','o','u']
    let s=d.split("");
    let j=s.length-1;
    while(i<j){
        if(vowels.includes(s[i])&&vowels.includes(s[j])){
            let temp=s[i];
            s[i]=s[j];
            s[j]=temp;
            j--;
            i++;
        }else if(!vowels.includes(s[i])){
            i++;
        }else if(!vowels.includes(s[j])){
            j--;
        }
    }
    return s.toString().replaceAll(',','')
    
};
console.log(reverseVowels('leetcode'));