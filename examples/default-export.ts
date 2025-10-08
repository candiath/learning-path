// Example of Default Export
// This file exports a single class as the default export

/**
 * Calculator class with basic arithmetic operations
 */
class Calculator {
  /**
   * Adds two numbers
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts second number from first
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides first number by second
   */
  divide(a: number, b: number): number {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
}

// Default export
export default Calculator;

// Alternative inline syntax:
// export default class Calculator { ... }
