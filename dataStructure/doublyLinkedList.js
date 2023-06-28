class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    //insert to last
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            // this.previous=this.tail.next;
        }
        this.length++;
        return this;
    }
    //remove from last
    pop() {
        if (this.length == 0) {
            return;
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            const tempNode = this.tail.previous;
            this.tail = tempNode;
            this.tail.next = null;
        }
        this.length--;
        return this;
    }
    //remove at beginning
    shift() {
        let oldNode = this.head;
        if (this.length == 0) {
            return;
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }else{
        this.head = oldNode.next;
        this.head.previous = null;
        oldNode.next = null;
        }
        this.length--;
        return oldNode;
    }
    //inset at beginning
    unshift(val) {
        let newNode= new Node(val);
        if (this.length == 0) {
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.head.previous = newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return newNode;
    }

    get(index){
        if(index<0||index>=this.length)
            return
        let counter,current;
        if(index<this.length/2){
            console.log("FROM START");
            counter=0
            current=this.head;
        while(counter!==index){
            current=current.next;
            counter++;
        }
    }else{
        console.log("FROM END");
        counter=this.length-1;
        current=this.tail;
        while(counter!==index){
            current=current.previous;
            counter--;
        }
    }

        return current;
    

    }

    set(val,index){
        let node=this.get(index)
        if(node){
            node.val=val;
        }
        return node;
    }

    insert(val,index){
        let newNode=new Node(val);
        if(index==0){
            return !!this.unshift(val);
        }else if(index==this.length){
           return !!this.push(val)
        }else{
            const beforeNode= this.get(index-1);
            const afterNode=beforeNode.next;
            beforeNode.next=newNode;
            newNode.previous=beforeNode;
            newNode.next=afterNode;
            beforeNode.previous=beforeNode.next;
            afterNode.previous=newNode
            this.length++;
            return true;
        }
    }

    remove(index){
        if(index==0){
            return this.shift();
        }else if(index==this.length){
           return this.pop()
        }else{
            const removeNode= this.get(index);
            removeNode.previous.next=removeNode.next;
            removeNode.next.previous=removeNode.previous;            
            removeNode.previous=null
            removeNode.next=null;
            this.length--;
            return removeNode;
        }
    }
}
const s = new DoublyLinkedList();
s.push(99)
s.push(100)
s.push(101)
s.push(102)
s.push(103)
s.push(104)
s.push(104)
s.push(105)
s.insert(88,1)

// console.log(s.get(4));
console.log(s.get(1));

