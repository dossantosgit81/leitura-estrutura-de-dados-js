//Para esse tipo de arquivo, é necessário que a extensão .js esteja declarada.
import {StackArray} from "./StackArray.js";

const stack = new StackArray();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);

console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();

console.log(stack.size());