export default class StackObject {

    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element){
        console.log(this);
        console.log(this.isEmpty());
        this.items[this.count] = element;
        this.count++;
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.count == 0;
    }

    pop() {
        console.log(this);
        if(this.isEmpty) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(){
        if(this.isEmpty){
            return undefined;
        }
        return this.items[this.count-1];
    }

    clear(){
        /**
         * while(!this.isEmpty){
         *  this.pop;
         * }
         * 
         */
        this.items = {};
        this.count = 0;
    }

    toString(){
        if(this.isEmpty){
            return '';
        }
    }

}