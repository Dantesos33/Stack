//Creating a stack

class Stack {
    constructor(){
        this.list = [];
    }

    //add element on top
    push(element){
        this.list.push(element);
        return element;
    }

    //remove the top element    
    pop(){
        if(this.list.length > 0){
        this.list.pop();
        }
        else{
            console.log("Stack is empty")
            return "Stack is empty"
        }
    }
    
    //checks stack is empty or not
    isEmpty(){
        this.list.length == 0 ? console.log("Stack is Empty") : console.log("Stack is Not Empty");
        return this.list.length == 0;
    }
    
    //returns the top element without deleting it
    peek(){
        console.log(this.list[this.list.length - 1]);
        return this.list[this.list.length - 1];
    }

    //prints the stack
    printStack(){
        console.log(this.list)
        return this.list;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.peek();

stack.printStack()