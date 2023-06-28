const fs = require('fs')


function countStringOccurenceFromFile() {
    const data = fs.readFileSync('./test.md', 'utf-8');//.split("\n").join(" ").split(" ")
   const words= data.toLowerCase().split(/\W+/);
    console.log(words);
    let wordsCount = {};
    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            if (wordsCount[words[i]]) {
                wordsCount[words[i]] = wordsCount[words[i]] + 1;
            }
            else {
                wordsCount[words[i]] = 1;
            }
        }
    }
    return Object.entries(wordsCount)
    .sort((a, b) =>a[1] - b[1]);
}

countStringOccurenceFromFile()