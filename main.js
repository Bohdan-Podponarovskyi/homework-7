function createAdder() {
    let sum = 0;

    return function (y) {

        sum = sum + y;

        return sum;
    };
}

const adder = createAdder();

console.log(adder(5))
console.log(adder(7))
console.log(adder(10))
console.log(adder(30))



