let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendCharacter(char) {
    if (displayValue === '0' && char !== '.') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}
function backspace(){
   if (displayValue.length >1){
    displayValue=displayValue.slice(0,-1);
   } else{
    displayValue = "0";
   }
   updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function calculateSquare() {
    displayValue = (parseFloat(displayValue) ** 2).toString();
    updateDisplay();
}
