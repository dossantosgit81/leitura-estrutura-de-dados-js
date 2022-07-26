export default class StackObject {

    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }
}