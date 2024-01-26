import { formatCurrency } from "../../scripts/utils/money.js";
// A group of related tests is called a 'test suite'

//Basic test cases:
//testcase 1


console.log('Text Suite: Format Currency')
console.log('-Converts Cents into Dollars')
if (formatCurrency(2095) === '20.95') {
  console.log('-passed');
} else {
  console.log('-failed');
} 

//Edge test cases:
//testcase 2

console.log('-Works with 0')
if (formatCurrency(0) === '0.00') {
  console.log('-passed');
} else {
  console.log('-failed');
} 


//testcase 3
console.log('-Rounds up to the nearest cent')
if (formatCurrency(2000.5) === '-20.01') {
  console.log('-passed');
} else {
  console.log('-failed');
}













//testcase 4
if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.log('failed');
}


