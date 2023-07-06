// 1. 
// (function () {
//     var a=b=3;
// })();
// console.log(typeof a);
// console.log(typeof b);

//2
// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer function, this.foo", this.foo);
//         console.log("outer function, self.foo", self.foo);
//         (function () {
//             console.log("inner function, this.foo", this.foo);
//             console.log("inner function, self.foo", self.foo);
//         })()
//     }
// }
// myObject.func()

// 3
// console.log(0.1+0.2);
// console.log(0.1+1===1.1);

// // 4
// var arr1="john".split("")
// console.log("arr1",arr1.length);
// var arr2=arr1.reverse();
// console.log("arr2",arr2.length);

// var arr3="jones".split("")
// arr2.push(arr3)
// console.log("arr1",arr1);
// console.log("===");
// console.log("arr2",arr2);

// 5 write code for the below console 
// console.log(sum(3,4));
// console.log(sum(3)(4));

// function sum(x){
//     if(arguments.length==2){
//         return arguments[0]+arguments[1]
//     }
//     else
//    return function (y){
//         return x+y
//     }   
// }

// // 6
// var a=(2,3,5);
// console.log(a);

// //7
// console.log(typeof arguments);

// // 8
// var y=1;
// if(function f(){}){
//     y+=typeof f;
// }
// console.log(y);

// 9
// console.log(mul(2)(3)(5))
// function mul(x) {
//   return  function(y) {
//         return function(z){
//             return x*y*z;
//         }

//     }
// }



// function bar() {
//      console.log(1); 
//      setTimeout(() => { console.log(2); }, 0); 
//      Promise.resolve().then(() => { 
//         console.log(3); 
//     }); 
//     console.log(4); 
// } 
// bar(); 

// console.log(a); 
// var a = 1; 
// function foo() {
//     const a = 2; 
//     console.log(a);
// } 
// foo(); 
// console.log(a); 


// function add(x) {
//     return function(y){
//         return x+y;
//     }
// }
// const sum= add(2)(4)(3)
// console.log(sum);
// // console.log((sum(5)));

// function sum(x) {
//     if(x===undefined)
//         return 0;
//     else {
//         return function(y){
//             if(y===undefined)
//                 return x;
//             else
//                 return sum(x+y)
//         }
//     }

// }

// console.log(sum(1)(1)(2));


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Person.prototype.greet = function() {
//     console.log('Hello, my name is ' + this.name);
//   };

//   var john = new Person('John', 30);
//   john.greet()

// const PersonProto={
//     greet:function () {
//         console.log("my name is ",this.name);
//     }
// }

// function CreatePerson(name,age) {
//     // var person = Object.create(personProto);
//     this.name=name;
//     this.age=age;
//     this.greet=function () {
//                 console.log("my name is ",this.name);
//             }
//     return this;
// }

// CreatePerson("Veeresh",22).greet()
// CreatePerson.prototype.greet2=function () {
//     console.log("this is new greet",this.name);

// }
// console.log(new CreatePerson("veeresh",1).greet2());

// let arr=[11,22,false,true];

// Array.prototype.customMap=function (callback) {
// const newArray=[];
// for (let index = 0; index < this.length; index++) {
//     if(!!callback(this[index],index,this))
//         newArray.push(this[index])
// }
// return newArray;
// }
// let cm=arr.customMap(function(item,index,arr){
//     return !!item;
// })
// console.log(cm);
// console.log("=================");
// let m=arr.map(function(item,index,arr){
//     return item;
// })
// console.log(m);


// let a=[1,2,3,4,5,10]
// let b=[1,3,6,9,5,8,12,4]
// const arrayAJson={};
// const concatArray=a.concat(b);
// concatArray.forEach(element => { 
//     arrayAJson[element]=(arrayAJson[element]||0)+1
// });
// const result=concatArray.filter((item)=>arrayAJson[item]===1)

// console.log(result);//2,6,8,9,10,12