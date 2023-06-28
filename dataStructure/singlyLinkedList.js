// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.length=0;
//     }
//     //insert element at the end of the linked list
//     push(val){
//         let newNode=new Node(val);
//         if(!this.head){
//             this.head=this.tail=newNode;
//             // this.tail=newNode;
//         }else{
//             this.tail.next=this.tail=newNode;
//             // this.tail=newNode;
//         }
//         this.length++;
//         return this;
//     }
//     //remove element at the end of the linked list
//     pop(){
//         if(!this.head)
//             return;
//         if(this.length===0){
//             this.head=null;
//             this.tail=null;
//         }    
//         var current=this.head;
//         var newTail=current;
//         while(current.next){
//             newTail=current;
//             current=current.next;
//         }
//         this.tail=newTail;
//         this.tail.next=null;
//         this.length--;

//         return current;
//     }
//     //Removing a new node from beginning of the linked list
//     shift(){
//         let currentHead=this.head;
//         if(!this.head)
//             return ;
//         if(this.head.next===null){
//             this.tail=null;
//         }
//         currentHead=this.head;
//         this.head=currentHead.next;
//         this.length--;
//         return currentHead;
//     }
//     //Inserting a new node from beginning of the linked list
//     unShift(val){

//         if(!this.head){
//             this.push(val)
//             return this;
//         }
//         const newNode=new Node(val);
//         newNode.next=this.head;
//         this.head=newNode;
//         this.length++;
//         return this;
//     }
//     //get node by index value
//     get(index){
//         if(index<0||index>=this.length){
//             return;
//         }
//         let counter=0;
//         let current=this.head;
//         while(counter!==index){
//             current=current.next;
//             counter++;
//         }
//         return current
//     }

//     //set node value by index value
//     set(index, val){
//        let nodeFound=this.get(index);
//        if(nodeFound){
//          nodeFound.val=val;
//         return true;
//     } 
//     return false;
//     }

//     //insert new node at the specified index with the value
//     insert(index, val){
//         if(index<0 || index>this.length) return false;
//         if(index==0){
//             this.unShift(val)
//            return true
//         }else
//         if(index===this.length){
//             this.push(val)
//             return true
//         }
//         let previousNode=this.get(index-1);
//         const temp= previousNode.next;
//         const newNode= new Node(val);
//         // newNode.val=val;
//         previousNode.next=newNode;
//         newNode.next=temp;
//         this.length++;
//         return true
//     }
//     //remove node from the specified index
//     remove(index){
//         if(index<0 || index>this.length) return false;
//         if(index==0){
//                return !!this.shift(val)
//         }else
//         if(index===this.length-1){
//             return !!this.pop(val)
//         }

//         let previousNode=this.get(index-1);
//         let removed= previousNode.next;
//         previousNode.next=removed.next;
//         this.length--;
//         return removed;
//     }

//     reverse(){
//        var node=this.head;
//        this.head=this.tail;
//        this.tail=node;
//        var next;
//        var previous=null;
//        for (var i = 0; i < this.length; i++) {
//         next=node.next;
//         node.next=previous;
//         previous=node;
//         node=next;
//        }
//        return this;

//     }
// }

// let s=new SinglyLinkedList();
// s.push("hhe")
// s.push("dd")
// s.push("cc")
// // console.log(s);
// // s.pop()
// console.log(s);
// console.log(s.reverse());


// // s.pop();
// // s.push("asdf")
// // s.push("bdf")
// // s.shift()
// // s.shift()
// // s.push("cdf")
// // s.shift()
// // s.shift()
// // s.pop();
// // s.unShift("me")
// // s.push("asdf")
// // s.push("ddd")
// // s.get(1)
// // s.set(2,"you")
// // // console.log(s.get(0))
// // s.insert(1,'cccc')
// // console.log(s.get(1))
// // console.log(s.remove(1))
// // console.log(s.get(1))

// ========

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length == 0)
            return null;
        if (this.length == 1) {
            let temp = this.head;
            this.head = this.tail = null
            this.length--;
            return temp;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        current.next = null;
        return current;
    }
    get(index) {
        if (index < 0 || index > this.length - 1)
            return null;
        if (index === 0) {
            let temp = this.head;
            // temp.next = null;
            return temp;
        }
        if (index === 1) {
            let temp = this.head.next;
            // temp.next = null;
            return temp;
        }
        if (index === this.length - 1)
            return this.tail;
        let current = this.head;
        let counter = 1;
        while (current.next) {
            current = current.next;
            if (index == counter) {
                // current.next = null;
                return current
            }
            counter++;
        }
        return undefined;

    }
    insert(index, val) {
        if (index < 0 || index > this.length )
            return false;
        if (index === this.length){
            console.log("hereiam");
            return !!this.push(val);}
        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
        return true;
    }
    // rotate(num){
    //     if(num>this.length)
    //         num=num%this.length;
    //     let newHead= this.get(num);
    //     let currentHead=this.head;
    //     console.log(newHead);
    //     while(newHead.next){
    //         newHead=newHead.next
            
    //     }
    //     return newHead;
    //     // // newHead.next=this.head;
    //     // let firstHalf=this.head
    //     // let counter=1;
    //     // while(firstHalf.next && counter<=num){
    //     //     firstHalf=
    //     //     counter++;
    //     // }

    // }

     rotate2(k) {
        // If k is greater
        // or less than
        // nodes in linked list. 
        // Don't change the list in this case
        if (k == 0|| k>=this.length)
            return;
  
        // Let us understand the 
        // below code for example k = 4
        // and list = 10->20->30->40->50->60.
        var current = this.head;
  
        // current will either point to kth 
        // or NULL after this loop.
        // current will point to node 
        // 40 in the above example
        var count = 1;
        
        while (count < k && current != null) {
            current = current.next;
            count++;
        }
  
       
  
        // current points to kth node. 
        // Store it in a variable.
        // kthNode points to node 40 
        // in the above example
        var kthNode = current;
  
        // current will point to last
        // node after this loop
        // current will point to node 
        // 60 in the above example
        while (current.next != null)
            current = current.next;
  
        // Change next of last node to previous head
        // Next of 60 is now changed to node 10
  
        current.next = this.head;
  
        // Change head to (k+1)th node
        // head is now changed to node 50
        this.head = kthNode.next;
  
        // change next of kth node to null
        kthNode.next = null;
        this.tail=kthNode
        return this.head
    }

    rotate(n){
        if(n<0)
            n=this.length-(-n);
        console.log("n ",n);
        if(n==0||n>=this.length)
            return null;
        let current = this.head;
        let counter=1;
        while(counter<n && current.next!==null){
            current=current.next;
            counter++;
        }
        let nthNode=current;
        while(current.next!==null){
            current=current.next;
        }
        current.next=this.head;
        this.head=nthNode.next;
        nthNode.next=null;
        this.tail=nthNode;
        return this.head;
    }
    set(index,val){
        if(index<0 || index>this.length){
            return false;
        }
        if(index===0){
            this.head.val=val;
            return true;
        }
        
        let counter=1;
        let current = this.head;
        while(current.next!==null){
            current=current.next;
            if(counter===index){
                break;
            }
            counter++;
        }
        current.val=val;
        return true;
    }
}

var s = new SinglyLinkedList;
s.push(5).push(10).push(15).push(20).push(25);
console.log(s.rotate(-1));
console.log(JSON.stringify(s));

// {"head":{"val":50,"next":{"val":60,"next":{"val":10,"next":{"val":20,"next":{"val":30,"next":{"val":40,"next":null}}}}}},
// "tail":{"val":60,"next":{"val":10,"next":{"val":20,"next":{"val":30,"next":{"val":40,"next":null}}}}},"length":6}