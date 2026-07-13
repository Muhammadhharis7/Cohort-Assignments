// /*
//   Implement a class `Calculator` having below methods
//     - initialise a result variable in the constructor and keep updating it after every arithmetic operation
//     - add: takes a number and adds it to the result
//     - subtract: takes a number and subtracts it from the result
//     - multiply: takes a number and multiply it to the result
//     - divide: takes a number and divide it to the result
//     - clear: makes the `result` variable to 0
//     - getResult: returns the value of `result` variable
//     - calculate: takes a string expression which can take multi-arithmetic operations and give its result
//       example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
//       Points to Note: 
//         1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
//         2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

//   Once you've implemented the logic, test your code by running
// */

// class Calculator {
//   Calculator(){
//     this.result = result
//   }
//   addNumber (num){
//     if(isNaN(num)){
//       throw new error("Invalid number")
//     }
//     this.result += num
//     return this.result;
//   }
//   subtractNumber(num){
//     if(isNaN(num)){
//       throw new error("Invlaid number")
//     }
//     this.result -= num
//     return this.result;
//   }
//   multiplyNumber(num){
//     mul = num
//     if(isNaN(num)){
//       throw new error("Invalid number")
//     }
//     this.result *= mul
//     return this.result;
//   }
//   divideNumber (num){
//     if(isNaN(num)){
//       throw new error("Invlaid number")
//     }
//     this.result /= divide
//     return this.result;
//   }
//   clear(){
//     this.result = 0
//   }
//   getResult(){
//     return this.result;
//   }
  
//   calculate(expression) {
//     // 1. Remove all spaces
//     const cleaned = expression.replace(/\s+/g, "");

//     // 2. Validate: only digits, operators, parentheses, decimal points allowed
//     if (!/^[0-9+\-*/().]+$/.test(cleaned)) {
//       throw new Error("Expression contains invalid characters");
//     }

//     const result = this.evaluateExpression(cleaned);
//     this.result = result;
//     return result;
//   }

//   // Handles parentheses by resolving innermost ones first
//   evaluateExpression(expr) {
//     while (expr.includes("(")) {
//       expr = expr.replace(/\(([^()]+)\)/, (match, innerExpr) => {
//         return this.evaluateFlat(innerExpr);
//       });
//     }
//     return this.evaluateFlat(expr);
//   }

//   // Evaluates an expression with NO parentheses, respecting * / before + -
//   evaluateFlat(expr) {
//     // Tokenize into numbers and operators
//     const tokens = expr.match(/(\d+\.?\d*)|[+\-*/]/g);
//     if (!tokens) throw new Error("Invalid expression");

//     // First pass: handle * and /
//     let stack = [Number(tokens[0])];
//     for (let i = 1; i < tokens.length; i += 2) {
//       const operator = tokens[i];
//       const nextNum = Number(tokens[i + 1]);

//       if (operator === "*") {
//         stack.push(stack.pop() * nextNum);
//       } else if (operator === "/") {
//         stack.push(stack.pop() / nextNum);
//       } else {
//         // + or - gets pushed as-is for the second pass
//         stack.push(operator, nextNum);
//       }
//     }

//     // Second pass: handle + and - left to right
//     let total = stack[0];
//     for (let i = 1; i < stack.length; i += 2) {
//       const operator = stack[i];
//       const num = stack[i + 1];
//       if (operator === "+") total += num;
//       else if (operator === "-") total -= num;
//     }

//     return total;
//   }
// }


  


// module.exports = Calculator;


class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    if (isNaN(num)) throw new Error("Invalid number");
    this.result += num;
    return this.result;
  }

  subtract(num) {
    if (isNaN(num)) throw new Error("Invalid number");
    this.result -= num;
    return this.result;
  }

  multiply(num) {
    if (isNaN(num)) throw new Error("Invalid number");
    this.result *= num;
    return this.result;
  }

  divide(num) {
    if (isNaN(num)) throw new Error("Invalid number");
    if (num === 0) throw new Error("Cannot divide by zero");
    this.result /= num;
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const cleaned = expression.replace(/\s+/g, "");

    if (!/^[0-9+\-*/().]+$/.test(cleaned)) {
      throw new Error("Expression contains invalid characters");
    }

    // Check balanced parentheses
    let depth = 0;
    for (const char of cleaned) {
      if (char === "(") depth++;
      if (char === ")") depth--;
      if (depth < 0) throw new Error("Unbalanced parentheses");
    }
    if (depth !== 0) throw new Error("Unbalanced parentheses");

    const result = this.evaluateExpression(cleaned);
    this.result = result;
    return result;
  }

  evaluateExpression(expr) {
    while (expr.includes("(")) {
      expr = expr.replace(/\(([^()]+)\)/, (match, innerExpr) => {
        return this.evaluateFlat(innerExpr);
      });
    }
    return this.evaluateFlat(expr);
  }

  evaluateFlat(expr) {
    const tokens = expr.match(/(\d+\.?\d*)|[+\-*/]/g);
    if (!tokens) throw new Error("Invalid expression");

    let stack = [Number(tokens[0])];
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNum = Number(tokens[i + 1]);

      if (operator === "*") {
        stack.push(stack.pop() * nextNum);
      } else if (operator === "/") {
        if (nextNum === 0) throw new Error("Cannot divide by zero");
        stack.push(stack.pop() / nextNum);
      } else {
        stack.push(operator, nextNum);
      }
    }

    let total = stack[0];
    for (let i = 1; i < stack.length; i += 2) {
      const operator = stack[i];
      const num = stack[i + 1];
      if (operator === "+") total += num;
      else if (operator === "-") total -= num;
    }

    return total;
  }
}

module.exports = Calculator;