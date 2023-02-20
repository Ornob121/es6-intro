// The below one is called function declaration.

function add(first, second) {
    const total = first + second;
    return total;
}

// const result = add(10, 20);
// console.log(result);


// The below function is called function expression.
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// The below one is called function expression with anonymous function.
const add2 = function (first, second) {
    const total = first + second;
    return total;
}


function add4(first, second){
    return first + second;
}


// The below function is called an arrow function.

const add6 = (first, second) => first + second;
const result = add6(20, 30);
console.log(result);