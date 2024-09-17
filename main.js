function processNumbers(numbers) {
    const squares = numbers.map(num => num * num);
    console.log("Doubled:", squares);

    const lessThan10 = squares.filter(num => num < 10);
    console.log("10 > :", filteredNumbers);

    const sum = filteredNumbers.reduce((s, index) => s + index, 0);
    console.log("Sum of Filtered Numbers:", sum);

    const hasAbove40  = numbers.some(num => num > 40);
    console.log("40 < :", hasAbove40 );

    const devidedTo5 = numbers.find(num => num % 5 === 0);
    console.log("First number divisible by 5:", devidedTo5);

    const allPositive = numbers.every(num => num > 0);
    console.log("Are all positives?:", allPositive);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60];
processNumbers(numbers);
