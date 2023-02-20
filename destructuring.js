const fish = {
    name : 'King Hilsa', 
    address: 'Chandpur', 
    color: 'silver', 
    phone: '01782898589', 
    price: 4000
}
const {phone, address, price} = fish;
console.log(price, phone, address);
const {name} = fish;

// Array destructuring =
const numbers = [20, 30, 40, 50, 60, 20, 56];
const [one, two, three, four] = numbers;
console.log(one, three);

// Can also use a function;
const names = () => {
    return ['Alim', 'Dalim']
}
const [baba, chaca] = names();
console.log(chaca, baba)