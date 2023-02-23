// Basic math operations

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Error. Cannot divide by zero!";
    }
    return num1 / num2;
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

// operations



// display
const display = document.querySelector('.display');
let displayOutput = '';
display.textContent = '0';

function updateDisplay(input) {
    displayOutput += input;
    if (displayOutput.length > 14) {
        return;
    }
    display.textContent = displayOutput;
}



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