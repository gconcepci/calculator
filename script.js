

let num1;
let num2;
let currentOperation;
let currentResult;
let stillOperating = false;

//DOM Elements 
const display = document.querySelector(".display");


const numButtons = document.querySelectorAll(".num");
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentResult) {
            resetDisplay();
        }
        display.textContent += button.textContent;

    })
})

const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

const operationButtons = [divideButton, multiplyButton, addButton, subtractButton];
for (let button of operationButtons) {
    button.addEventListener("click", selectOperation);
}



equalsButton.addEventListener("click", () => {
    operate(num1,currentOperation);
});

clearButton.addEventListener("click", resetCalculator);

//Numbers in display should be stored in array.
// first numbers should be stoerd in variable.
//Once operation button is pressed, screen should clear and next numbers should
// be placed in second variable

function selectOperation() {
    num1 = display.textContent;
    currentOperation = this.dataset.op;
    resetDisplay();
    if (currentResult) {
        stillOperating = true;
        currentResult = num1;
    } 
    console.log(currentOperation, num1)
}

function resetDisplay() {
    display.textContent = "";
}

function resetCalculator() {
    num1 = NaN;
    num2 = NaN;
    currentOperation = undefined;
    currentResult = NaN;
    resetDisplay();
}

// Calculator functions

function add(num1,num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1,num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1,num2) {
    return Number(num1) * Number(num2);
}

function divide(num1,num2) {
    return Number(num1) / Number(num2);
}

function operate(num1,operator) {
    let result;
    num2 = display.textContent;
    switch(operator) {
        case "divide":
            result = divide(num1,num2);
            break;
        case "multiply":
            result = multiply(num1,num2);
            break;
        case "add":
            result = add(num1,num2);
            break;
        case "subtract":
            result = subtract(num1,num2);
            break;
    }
    display.textContent = result;
    currentResult = result;
}

