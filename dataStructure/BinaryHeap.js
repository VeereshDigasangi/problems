
class BinaryHeap{
    constructor(){
        this.values=[];
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }
     bubbleUp(){
            let idx=this.values.length-1;
            const element = this.values[idx];
            while(idx>0){
                let parentIndex= Math.floor((idx-1)/2)
                let parent=this.values[parentIndex];
                if(element<=parent)break;
                this.values[parentIndex]=element;
                this.values[idx]=parent
                idx=parentIndex;
                
            }
            // console.log(values);
            // return values;
        }
}

const b = new BinaryHeap()
b.insert(41);
b.insert(39);
b.insert(33);
b.insert(18);
b.insert(27);
b.insert(12);
b.insert(55);
b.insert(1);
b.insert(45);
b.insert(145);
console.log(b);