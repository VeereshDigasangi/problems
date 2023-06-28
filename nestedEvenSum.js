
//Recursion
function nestedEvenSum(json,totalEvenSum=0) {
    for (const key in json) {
        if (typeof json[key] == 'object') {
           totalEvenSum+= nestedEvenSum(json[key])
        }else 
            if (typeof json[key] == "number"&&json[key]%2==0) {
                // console.log("dd ", json[key]);
                totalEvenSum += (json[key])
            } 
               
    }
    return totalEvenSum
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj2)); // 6
//   nestedEvenSum(obj2); // 10