/*
Variables
*/

const keys = document.getElementsByClassName("key");
var display = document.getElementById("display");
var smallDisplay = document.getElementById("smallDisplay");
var displayOperator = document.getElementById("operator");
var firstValue = "";
var result = "";
var smallValue = "";
var operator = "";

/*
Math functions
*/

function add(x, y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
    return parseInt(x) - parseInt(y);
}

function multiply(x, y) {
    return parseInt(x) * parseInt(y);
}

function divide(x, y) {
    return parseInt(x) / parseInt(y);
}

function operate(x, y, z) {
    switch(z) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}


/*
Display
*/

function resetBothDisplays() {
    display.innerHTML = "";
    smallDisplay.innerHTML = "";
    firstValue = "";
    displayOperator.innerHTML = "";
}

function resetDisplay() {
    firstValue = "";
    display.innerHTML = "";
}

function backspace(str) {
    var strLength = str.length;
    return str.substring(strLength - strLength, strLength - 1);
}

/*
Assign on click event listener to each button that runs displayScreen() when clicked
*/
Array.from(keys).forEach(key => key.addEventListener("click", displayScreen));

function displayScreen() {

    /*
    Takes user input assigns first value
    */
   firstValue += this.id;
   firstValue = firstValue.replace(/[^0-9]/g, "");
   display.innerHTML = firstValue;

   /*
   Checks if user specifies an operator, if they do, saves first value to small display
   */

    if (this.id === "+" || this.id === "-" || this.id === "/" || this.id === "*") {
        smallValue = firstValue;
        smallDisplay.innerHTML = smallValue;
        display.innerHTML = "";
        firstValue = "";
    }

    /*
    Assigns type of operation to be used in operate() function when equals is pressed
    */

    switch(this.id) {
        case "+":
            operator = "+";
            displayOperator.innerHTML = "+";
            return
        case "-":
            operator = "-";
            displayOperator.innerHTML = "-";
            return
        case "/":
            operator = "/";
            displayOperator.innerHTML = "/";
            return
        case "*":
            operator = "*";
            displayOperator.innerHTML = "*";
            return
        case "=":
            firstValue = operate(smallValue, firstValue, operator);
            display.innerHTML = firstValue;
            smallDisplay.innerHTML = "";
            displayOperator.innerHTML = "";
            return
        case "ce":
            resetBothDisplays();
            return
        case "c":
            resetDisplay();
            return
        case "<-":
            firstValue = backspace(firstValue);
            display.innerHTML = firstValue;
            return
    }

}

/*
TODO:
Account for multiple operatiosn before pressing equals
*/