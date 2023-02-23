// Basic math operations

const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);

const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2);

const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2);

const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Error. Cannot divide by zero!";
    }
    return parseFloat(num1) / parseFloat(num2);
}

// calls on basic math functions
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            break;
    }
}

//Bug checking functions


// Changes the display based on the buttons clicked
function updateDisplay(input) {
    if (input == 'clear') {
        displayOutput = '';
        firstNumber = 0;
        secondNumber = 0;
        answer = 0;
        indexOfOperation = '';
        firstOperation = 1;
    }
    else if (input == 'backspace') {
        //For when + - * or / is deleted
        for (let i = 0; i < displayOutput.length; i++) {
            if (displayOutput[i] == '+' || displayOutput[i] == '-' || displayOutput[i] == '*' || displayOutput[i] == '/') {
                indexOfOperation = i;
                break;
            }
        }
        
        displayOutput = displayOutput.slice(0, displayOutput.length - 1);
    }
    else {
        displayOutput += input;
    }

    if (displayOutput.length > 20) {
        displayOutput = displayOutput.slice(1);
    }

    if (input == '+' || input == '-' || input == '*' || input == '/') {
        if (firstOperation) {
            firstOperation = '';

        }
        else {
            for (let i = 0; i < displayOutput.length; i++) {
                if (displayOutput[i] == '+' || displayOutput[i] == '-' || displayOutput[i] == '*' || displayOutput[i] == '/') {
                    indexOfOperation = i;
                    break;
                }
            }
            firstNumber = displayOutput.slice(0, indexOfOperation);
            secondNumber = displayOutput.slice(indexOfOperation + 1);

            answer = operate(firstNumber, displayOutput[indexOfOperation], secondNumber);
            displayOutput = answer + input;

            firstNumber = '';
            secondNumber = '';
            answer = '';
            indexOfOperation = '';
        }
    }

    if (input == '=') {

        for (let i = 0; i < displayOutput.length; i++) {
            if (displayOutput[i] == '+' || displayOutput[i] == '-' || displayOutput[i] == '*' || displayOutput[i] == '/') {
                indexOfOperation = i;
                break;
            }
        }

        if (indexOfOperation) {
            firstNumber = displayOutput.slice(0, indexOfOperation);
            secondNumber = displayOutput.slice(indexOfOperation + 1, displayOutput.length);
            answer = operate(firstNumber, displayOutput[indexOfOperation], secondNumber);
            displayOutput = answer;

            firstNumber = '';
            secondNumber = '';
            answer = '';
            indexOfOperation = '';
            firstOperation = 1;
        }
        else {
            displayOutput = displayOutput.slice(0, displayOutput.length - 1);
        }

    }

    display.textContent = displayOutput;
}


//Variables used for calculations
let firstNumber = 0;
let indexOfOperation = '';
let secondNumber = 0;
let firstOperation = 1;
let answer = 0;
//

// Initialize number variables
const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');
//

// Initialize operations variables
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const equalsButton = document.querySelector('.equals');
//

//Clear and backspace
const clearButton = document.querySelector('.clear-button');
const backspaceButton = document.querySelector('.backspace');


// Initialize display, display variables and text
const display = document.querySelector('.display');
let displayOutput = '';
display.textContent = '0';
//

// Event listeners for numbers
number0.addEventListener('click', e => {
    updateDisplay('0');
});
number1.addEventListener('click', e => {
    updateDisplay('1');
});
number2.addEventListener('click', e => {
    updateDisplay('2');
});
number3.addEventListener('click', e => {
    updateDisplay('3');
});
number4.addEventListener('click', e => {
    updateDisplay('4');
});
number5.addEventListener('click', e => {
    updateDisplay('5');
});
number6.addEventListener('click', e => {
    updateDisplay('6');
});
number7.addEventListener('click', e => {
    updateDisplay('7');
});
number8.addEventListener('click', e => {
    updateDisplay('8');
});
number9.addEventListener('click', e => {
    updateDisplay('9');
});
//

// Event listeners for operations
addButton.addEventListener('click', e => {
    updateDisplay('+');
});
subtractButton.addEventListener('click', e => {
    updateDisplay('-');
});
multiplyButton.addEventListener('click', e => {
    updateDisplay('*');
});
divideButton.addEventListener('click', e => {
    updateDisplay('/');
});
equalsButton.addEventListener('click', e => {
    updateDisplay('=');
});
//

//Event listeners for the delete buttons
clearButton.addEventListener('click', e => {
    updateDisplay('clear');
});
backspaceButton.addEventListener('click', e => {
    updateDisplay('backspace');
})