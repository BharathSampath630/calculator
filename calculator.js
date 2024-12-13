let expression = '';
let start = '';

function updateDisplay() {
    document.getElementById('calculatorDisplay').value = expression;
}

function addDigit(digit) {
    start += digit;
    expression += digit;
    updateDisplay();
}

function addDecimal() {
    if (!start.includes('.')) {
        start += '.';
        expression += '.';
        updateDisplay();
    }
}

function addOperation(op) {
    if (start) {
        expression += ` ${op} `;
        start = '';
        updateDisplay();
    }
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        start = expression;
        updateDisplay();
    } catch {
        expression = 'Error';
        start = '';
        updateDisplay();
    }
}

function clearCalculator() {
    expression = '';
    start = '';
    updateDisplay();
}