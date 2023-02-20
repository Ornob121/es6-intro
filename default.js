function add(first, second){
    const total = first + second;
    return total;
}


const result = add(10, 20)
console.log(result)

function sum (num1 = 0, num2 = 0){
    const add = num1 + num2;
    return add;
}
const result2 = sum();
console.log(result2);


function fullName (first, last = 'hasan'){
    const fullName = first + ' ' + last ;
    return fullName;
}

const name = fullName('Limon');
console.log(name);