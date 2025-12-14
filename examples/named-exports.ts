// Example of Named Exports
// This file exports multiple functions using named exports

/**
 * Adds two numbers together
 */
export const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * Subtracts second number from first
 */
export const subtract = (a: number, b: number): number => {
  return a - b;
};

/**
 * Multiplies two numbers
 */
export const multiply = (a: number, b: number): number => {
  return a * b;
};

/**
 * Divides first number by second
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
};

// Alternative way: export at the end
// const add = (a: number, b: number): number => a + b;
// const subtract = (a: number, b: number): number => a - b;
// export { add, subtract };
