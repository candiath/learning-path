// Example showing how to import default exports

// Import default export (can use any name)
import Calculator from './default-export';

const calc = new Calculator();

console.log('Using default export:');
console.log('5 + 3 =', calc.add(5, 3));      // 8
console.log('5 - 3 =', calc.subtract(5, 3)); // 2
console.log('5 * 3 =', calc.multiply(5, 3)); // 15
console.log('10 / 2 =', calc.divide(10, 2)); // 5

// You can rename default imports freely
import Calc from './default-export';
const calculator = new Calc();
console.log('Using renamed import:', calculator.add(1, 1)); // 2
