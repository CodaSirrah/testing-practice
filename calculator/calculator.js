const calculator = (operator, a, b) => {
  const add = (a, b) => a + b
  const subtract = (a, b) => a - b
  const multiply = (a, b) => a * b
  const divide = (a, b) => a / b
  switch(operator) {
    case "add":
    return add(a, b);
    case "subtract":
    return subtract(a, b);
    case "multiply":
    return multiply(a, b);
    case "divide":
    return divide(a, b);
    default:
    console.log("please provide either 'add, subtract, multiply or divide' as a string as the first argument.")
  }
}

module.exports = calculator