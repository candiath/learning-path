// Example showing how to import named exports

// Import specific named exports
import { add, subtract } from './named-exports';

console.log('Using named exports:');
console.log('5 + 3 =', add(5, 3));           // 8
console.log('5 - 3 =', subtract(5, 3));      // 2

// Import with alias
import { multiply as mult } from './named-exports';
console.log('5 * 3 =', mult(5, 3));          // 15

// Import all as namespace
import * as math from './named-exports';
console.log('10 / 2 =', math.divide(10, 2)); // 5
