function add(numOne, numTwo) {
    return numOne + numTwo;
}
function subtract(numOne, numTwo) {
    return numOne - numTwo;
}
function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
function divide(numOne, numTwo) {
    return numOne / numTwo;
}
let numOne = 0;
let numTwo = 0;
let operator = '';
function operate(numOne, numTwo, operator) {
    if(operator === '+') {
        add(numOne, numTwo);
    } else if (operator === '-') {
        subtract(numOne, numTwo);
    } else if (operator === '*') {
        multiply(numOne,numTwo);
    } else if (operator === '/') {
        divide(numOne,numTwo);
    }

}
