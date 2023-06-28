let names={
    firstName:"Veeresh",
    lastName:"Digasangi"
}

let  printFullName=function(homeTown,state){

    console.log(this.firstName +" "+ this.lastName +" from " +homeTown,state);
}

let name2={
    firstName:"Sachin",
    lastName:"Tendular"
}

// let printName=printFullName.bind(name2,"Mumbai",'Maharastra')
printFullName.call(name2,'Mumbai','Maharastra')
// printName()

// =========== function currying

let multiply = function(x,y){
    console.log(x*y);
}
// multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(9)

// multiplyByThree= multiply.bind(this,3);
// multiplyByThree(4)

// ======= memoization===========

function fib(n,preValue=[]){
    console.log(preValue[n]);
    if(preValue[n]!==undefined)
        return preValue[n]
    let result;
    if(n<=2)
        result= 1
    else
        result= fib(n-1,preValue)+fib(n-2,preValue)
    preValue[n]=result
    return result;
}
// console.log(fib(10));
