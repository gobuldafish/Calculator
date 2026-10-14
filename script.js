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
        return add(numOne, numTwo);
    } else if (operator === '-') {
        return subtract(numOne, numTwo);
    } else if (operator === '×') {
        return multiply(numOne,numTwo);
    } else if (operator === '÷') {
        return divide(numOne,numTwo);
    }

}
//The program will start with numOne being affected 
// by the number buttons
// and continue with numtwo once one of the 
// operator buttons are clicked
//While in part one we store the value of numOne
const btn = document.querySelector(".btn");
const display = document.querySelector("#calc-display");
const btns = document.querySelectorAll(".btn");
let onPartOne = true;
let oneString = "";
let twoString = "";
let numString = "";
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        switch(btn.textContent) {
            case "0":
                numString = "0";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "1":
                numString = "1";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "2":
                numString = "2";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "3":
                numString = "3";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "4":
                numString = "4";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "5":
                numString = "5";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "6":
                numString = "6";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "7":
                numString = "7";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "8":
                numString = "8";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "9":
                numString = "9";
                display.textContent += numString;
                if(onPartOne) {
                    oneString += numString;
                    numOne = +oneString;
                } else {
                    twoString += numString;
                    numTwo = +twoString;
                }
                break;
            case "+":
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = numOne.toString();
                }
                operator = "+";
                oneString = "";
                twoString = "";
                display.textContent += operator;
                break;
            case "-":
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = numOne.toString()
                }
                operator = "-";
                oneString = "";
                twoString = "";
                display.textContent += operator;
                break;
            case "×":
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = numOne.toString()
                }
                operator = "×";
                oneString = "";
                twoString = "";
                display.textContent += operator;
                break;
            case "÷":
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = numOne.toString()
                }
                operator = "÷";
                oneString = "";
                twoString = "";
                display.textContent += operator;
                break;
            case "=":
                
                oneString = "";
                twoString = "";
                numString = "";
                onPartOne = true;
                numOne = operate(numOne, numTwo, operator);
                display.textContent = numOne.toString();
                
                break;
            case "C":
                display.textContent = "";
                numOne = 0;
                numTwo = 0;
                numString = "";
                oneString = "";
                twoString = "";
                operator = "";
                onPartOne = true;
                break;

        }
    });
    
})



    







//Pressing equals button calls the operate function