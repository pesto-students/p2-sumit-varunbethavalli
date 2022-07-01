class Queue{
    constructor(){
        //init left(main) and right(auxiliary) stacks
        this.lStack = [];
        this.rStack = [];
    }

    enqueue(data){
        //moving existing elements to avoid affecting the FIFO
        while(this.rStack.size !== 0){
            this.lStack.push(this.rStack[this.rStack.length-1]);
            this.rStack.pop();
        }
        //Adding new data
        this.lStack.push(data);
        while(this.lStack.size !== 0){
            this.rStack.push(this.lStack[this.lStack.length-1]);
            this.lStack.pop();
        }
    }

    dequeue(){
        if(this.rStack.size === 0){
            console.log("Stack underflow!");
        }
        let topElem = this.rStack[this.rStack.length-1];
        this.rStack.pop();
        return topElem;
    }
}