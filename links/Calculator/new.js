let screen = document.getElementById("screen");
let expression = "";


screen.innerText = "0";

function press(value) {
    
    const lastChar = expression.slice(-1);

    if (isOperator(value) && isOperator(lastChar)) {
        return; 
    }

    expression += value;
    screen.innerText = expression;
}

function calculate() {
    try {
        
        let result = eval(expression);
        screen.innerText = result;
        expression = result.toString(); 
    } catch (e) {
        screen.innerText = "Error";
        expression = "";
    }
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}
function clearScreen() {
    expression = "";
    screen.innerText = "0";
}
