

class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    contains(val) {
        if (this.root === null) {
            return false;
        }
        if (this.root.val === val) return true;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val < current.val)
                current = current.left;
            else if (val > current.val)
                current = current.right;
            else
                return true
        }
        return false;

    }
    BFS(){
        var node = this.root,
            queue= [],
            data=[];
        queue.push(node);
        while(queue.length){
            node=queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;
    }
    DFSPreOrder(){
        let current=this.root;
        let data=[];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current);
        return data;
    }

    DFSPostOrder(){
        let data=[]
        let current= this.root;
        function traverse(node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.val);
        }
        traverse(current);
        return data;
    }

    DFSInOrder(){
        let data=[]
        let current= this.root;
        function traverse(node) {
            if(node.left) traverse(node.left)
            data.push(node.val);
            if(node.right) traverse(node.right)
        }
        traverse(current);
        return data;
    }
}

const b = new BinarySearchTree();
console.log(b.insert(10));
console.log(b.insert(6));
console.log(b.insert(15));
console.log(b.insert(3));
console.log(b.insert(8));
console.log(b.insert(20));

console.log("BFS",b.BFS());
console.log("DFS:PREORDER ",b.DFSPreOrder());
console.log("DFS:POSTORDER ",b.DFSPostOrder());
console.log("DFS:INORDER ",b.DFSInOrder());

//          10
//      6       15
//    3   8       20
