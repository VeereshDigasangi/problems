class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.size == 0)
            this.first = this.last = newNode;
        else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (this.size === 0) {
            return null;
        }
        const temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;

    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {

        if (this.size === 0) {
            return null;
        }
        const temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val
    }
}

const s = new Stack();
// console.log(s.push(11));
// console.log(s.push(12));
// console.log(s.push(13));
// console.log(s.push(14));

// console.log(s.pop(),s.size)
// console.log(s.pop(),s.size)
// console.log(s.pop(),s.size)
// console.log(s.pop(),s.size)
// console.log(s.pop(),s.size)
// console.log(s.pop(),s.size)

