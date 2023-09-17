const display = document.getElementById('display');
let currentInput = '';

// This function accepts the values clicked as a parameter and returns the same to the textbox.
const appendDisplay = (number) => {
    currentInput += number;
    display.value = currentInput;
};

const clearDisplay = () => {
    currentInput = '';
    display.value = '';
};

// used the eval() function for calculation
// eval takes a string argument and treats the content of that string
// as if it were JavaScript code.
const resultCalculation = () => {
    let result = eval(currentInput);
    display.value = result;
    currentInput = '';
};

