const display = document.getElementById('display');
let currentInput = '';
let lastResult = null;

// This function accepts the values clicked as a parameter and returns the same to the textbox.
const appendDisplay = (number) => {
    // lastResult variable stores the previous calculation result
    // and allows it to be used as starting point for the new expression
    if (lastResult !== null) {
        currentInput = lastResult.toString();
        lastResult = null;
    };
    currentInput += number;
    display.value = currentInput;
};

const clearDisplay = () => {
    // When the 'C' button is clicked it would reset both the currentInput and the lastResult
    currentInput = '';
    lastResult = null;
    display.value = '';
};

// used the eval() function for calculation
// eval takes a string argument and treats the content of that string
// as if it were JavaScript code.
const resultCalculation = () => {
    const result = eval(currentInput);
    display.value = result;
    lastResult = result;
    currentInput = '';
};

