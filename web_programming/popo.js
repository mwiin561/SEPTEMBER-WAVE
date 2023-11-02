//number 1
// Function to calculate the result of a mathematical expression
function calculate(expression) {
    try {
      // Evaluate the mathematical expression using the eval() function
      const result = eval(expression);
      
      // Check if the result is a valid number
      if (isNaN(result)) {
        throw new Error("Invalid expression");
      }
      
      return result;
    } catch (error) {
      return error.message;
    }
  }

  // Testing the calculate function
console.log(calculate("2 + 3")); // Output: 5
console.log(calculate("4 * 5")); // Output: 20
console.log(calculate("10 / 2")); // Output: 5
console.log(calculate("10 / 0")); // Output: Infinity
console.log(calculate("2 +")); // Output: Invalid expression





//number 2
// Function to calculate the grade based on the score
function calculateGrade(score) {
    try {
      // Check if the input is a valid number
      if (isNaN(score)) {
        throw new Error("Invalid input");
      }
      
      // Determine the grade based on the score
      if (score >= 90 && score <= 100) {
        return "A";
      } else if (score >= 80 ) {
        return "B";
      } else if (score >= 70 ) {
        return "C";
      } else if (score >= 60 ) {
        return "D";
      } else if (score >= 0 && score <= 59) {
        return "F";
      } else {
        throw new Error("Invalid score");
      }
    } catch (error) {
      return error.message;
    }
  }
  // Testing the calculateGrade function
console.log(calculateGrade(95)); // Output: A
console.log(calculateGrade(82)); // Output: B
console.log(calculateGrade(75)); // Output: C
console.log(calculateGrade(63)); // Output: D
console.log(calculateGrade("abc")); // Output: Invalid input
console.log(calculateGrade(101)); // Output: Invalid score