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