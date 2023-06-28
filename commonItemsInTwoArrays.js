const a=[1,3,4,6,8,0,188,32];
const b=[1,3,4,6,11,9,131,32,8];



function intersectItemsInTwoArrays(a,b){
    const set1= new Set(a)
    const set2= new Set(b)
    console.log(set1);
    console.log(set2);
    for (const key of set1) {
        if(set2.has(key))
        console.log(key);
        
    }
}
const myArray = ["value1", "value1", "value3"];
console.log([...new Set(myArray)]);
// intersectItemsInTwoArrays(a,b)

// function intersectItemsInTwoArrays(a,b) {
//     let temp={};
//     a.forEach(element => temp[element]=element);
//     b.forEach(element => {
//         if(temp[element])
//         console.log(temp[element]);
        
//     });
// }
// if(a.length>b.length)
// console.log(intersectItemsInTwoArrays(a,b));
// else
// console.log(intersectItemsInTwoArrays(b,a));
