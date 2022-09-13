import StackObject from './StackObject.js';

const stackObject = new StackObject();

stackObject.push(5);
stackObject.push(8);


console.log(stackObject.toString());
console.log(Object.getOwnPropertyNames(stackObject))
console.log(Object.keys(stackObject));
// stackObject.items

let objectSymbols = Object.getOwnPropertySymbols(stackObject);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stackObject[objectSymbols[0]].push();
stackObject.print();
