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
let equalPressed = false;
let oneString = "";
let twoString = "";
let numString = "";

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        switch(btn.textContent) {
            case "0":
                numString = "0";
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                if(equalPressed) {
                    equalPressed = false;
                    display.textContent = "";
                }
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
                equalPressed = false;
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = (Math.round((numOne + Number.EPSILON) * 100)/100).toString();
                }
                operator = "+";
                oneString = "";
                twoString = "";
                display.textContent += operator;
                break;
            case "-":
                equalPressed = false;
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = (Math.round((numOne + Number.EPSILON) * 100)/100).toString();
                }
                operator = "-";
                oneString = "";
                twoString = "";
                display.textContent += operator;
                break;
            case "×":
                equalPressed = false;
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = (Math.round((numOne + Number.EPSILON) * 100)/100).toString();
                }
                operator = "×";
                oneString = "";
                twoString = "";
                display.textContent += operator;
                break;
            case "÷":
                equalPressed = false;
                if(onPartOne) {
                    onPartOne = false;
                } else {
                    numOne = operate(numOne, numTwo, operator);
                    numTwo = 0;
                    display.textContent = (Math.round((numOne + Number.EPSILON) * 100)/100).toString();;
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
                equalPressed = true;
                display.textContent = (Math.round((numOne + Number.EPSILON) * 100)/100).toString();
                
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
                equalPressed = false;
                break;

        }
    });
    
})



    







//Pressing equals button calls the operate function