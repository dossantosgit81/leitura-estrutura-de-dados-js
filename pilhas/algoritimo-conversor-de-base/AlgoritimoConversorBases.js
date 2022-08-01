import StackObject from "../stack-object/StackObject.js";

function decimalToBinary(decnumber, base) {
    const remStack = new StackObject();
    let number = decnumber;
    const digits = '0123456789ABCDEFGHIJLMNOPQRSTUVXYZ';
    let rem;
    let baseString = '';
    if(!(base >= 2 && base <= 36)){
        return '';
    }
    while (number > 0){
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }
    return baseString;
}