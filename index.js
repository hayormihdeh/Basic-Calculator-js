let number1 = parseFloat(prompt("Enter first number : "));
let number2 = parseFloat(prompt("Enter Second number : "));
let operator = prompt("Enter operator(+ , - , /, *): ");
let result = 0;
if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "/") {
  result = number1 / number2;
} else {
  result = number1 * number2;
}


window.alert("Result is " + result); 
