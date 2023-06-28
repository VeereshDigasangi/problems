class Stack {
    dataStore = [];
    // let pop
    // push=this.push;
    // peek=this.peek;
    // clear=this.clear;
    top = 0
    // length=this.length;

    push(item) {
        this.dataStore[this.top++] = item
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    pop() {
        return this.dataStore[--this.top];
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0
    }
}

// const s= new Stack()
// s.push("veeresh")
// s.push("siddu")
// s.push("shripad")
// s.push("praveen")
// s.push("pradeep")
// console.log(s.length());
// console.log(s.pop());
// console.log(s.length());
// console.log(s.peek());
// console.log(s.length());
// s.clear()
// console.log(s.length());
// s.push("pradeep")
// console.log(s.length());

// function mulBase(num, base) {
//     var s = new Stack();
//     do {
//         s.push(num % base);
//         num = Math.floor(num /= base);
//     } while (num > 0);
//     var converted = "";
//     while (s.length() > 0) {
//         converted += s.pop();
//         //   Using the Stack Class
//     }
//     return converted;
// }

// console.log(mulBase(5, 2));

function fact(n) {
    var s = new Stack(); 
    while(n>1){
          s.push(n--);
       }
    var product = 1;
    while (s.length() > 0) {
          product *= s.pop();
       }
    return product; }

console.log(fact(5));