const add = (first, second) => first + second;

const fullName = (first, second) => first + ' ' + second;

const multiply = (a, b) => a * b;

const addAll = (a, b, c, d, e, f, g, h, i, j) => a + b + c + d + e + f + g + h + i + j;

// No parameter arrow function 
const getPie = () => 3.1416;

// Single parameter arrow function 
const doubleIt = (num) => num * 2;
// Single parameter arrow function can also be written without a bracket.This is only possible for single parameter Arrow function.
const fiveTimes = num => num * 5;

const doMath = (x, y, z) => {
    const firstAdd = x + y;
    const secondAdd = y + z;
    const result = firstAdd - secondAdd;
    return result;
}