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
//The program will start with numOne being affected 
// by the number buttons
// and continue with numtwo once one of the 
// operator buttons are clicked
const btn = document.querySelector(".btn");
const display = document.querySelector("#calc-display");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("click", function() {
        switch(btn.textContent) {
            case "0":
                display.textContent += "0";
                break;
            case "1":
                display.textContent += "1";
                break;
            case "2":
                display.textContent += "2";
                break;
            case "3":
                display.textContent += "3";
                break;
            case "4":
                display.textContent += "4";
                break;
            case "5":
                display.textContent += "5";
                break;
            case "6":
                display.textContent += "6";
                break;
            case "7":
                display.textContent += "7";
                break;
            case "8":
                display.textContent += "8";
                break;
            case "9":
                display.textContent += "9";
                break;
            case "+":
                display.textContent = "";
            case "-":
                display.textContent = "";
            case "×":
                display.textContent = "";
            case "÷":
                display.textContent = "";
            case "C":
                display.textContent = "";
        }
    });
})




//Pressing equals button calls the operate function