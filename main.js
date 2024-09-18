function processNumbers(numbers) {
    const squares = numbers.map(num => num * num);
    console.log("Squared:", squares);

    const lessThan10 = squares.filter(num => num < 10);
    console.log("10 > :", lessThan10);

    const sum = lessThan10.reduce((s, num) => s + num, 0);
    console.log("Sum of Filtered Numbers:", sum);

    const hasAbove40 = numbers.some(num => num > 40);
    console.log("40 < :", hasAbove40);

    const divisibleBy5 = numbers.find(num => num % 5 === 0);
    console.log("First number divisible by 5:", divisibleBy5);

    const allPositive = numbers.every(num => num > 0);
    console.log("Are all positives?:", allPositive);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
processNumbers(numbers);

// My Map
let numberArr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }
    return newArr;
};

let newArrNumber = numberArr.myMap((value) => value * 2);
console.log("Custom Map:", newArrNumber);

// My Filter
Array.prototype.myFilter = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

let newNumberArr = numberArr.myFilter((item) => item % 2 === 0);
console.log("Custom Filter:", newNumberArr);

// My Some
Array.prototype.mySome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

let numberArrSome = numberArr.mySome((value) => value % 2 === 1);
console.log("Custom Some:", numberArrSome);

// My Find
Array.prototype.myFind = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

let found = numberArr.myFind((value) => value > 3);
console.log("Custom Find:", found);

// My Every
Array.prototype.myEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

let allEven = numberArr.myEvery((value) => value % 2 === 0);
console.log("Custom Every:", allEven);

// My Reduce
Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this);
    }
    return accumulator;
};

let reduced = numberArr.myReduce((acc, value) => acc + value, 0);
console.log("Custom Reduce:", reduced);
