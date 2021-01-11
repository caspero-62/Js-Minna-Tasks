//Question 1a
//Function to calculate square of each number in an array

const squareOfArray = (inputArray) => {
    let squaredArray = [];
    inputArray.forEach(number => {
        if (typeof(number) === 'number') {
            let numberSquare;
            numberSquare = number ** 2;
            squaredArray.push(numberSquare);
        } else{
            throw 'not all members of this array are numbers';
        }
    });

    return (squaredArray);
}

console.log(squareOfArray([2, 4, 9, 10]));

//Question 1b
//Function to filter out odd numbers in an array

const filterOddArray = (inputArray) => {
    let filteredArray = [];
    inputArray.forEach(number => {
        if (typeof(number) === 'number' && number % 2 === 0) {
            filteredArray.push(number)
        } else if (typeof(number) === 'number') {
            null;
        } else{
            throw 'not all members of this array are numbers';
        }
    });

    return (filteredArray);
}

console.log(filterOddArray([2, 5, 7, 9, 11, 12, 14, 13, 20]));

//Question 1c
//Function to sum up numbers in an array

const sumOfArray = (inputArray) => {
    let sum = 0;
    inputArray.forEach(number => {
        if (typeof(number) === 'number') {
            sum += number;
        } else{
            throw 'not all members of this array are numbers';
        }
    });

    return (sum);
}

console.log(sumOfArray([2, 4, 9, 10, 18]));


//Question 2
//Do all these with map, filter, reduce

//2a
const squareOfArray2 = (inputArray) => {
    let squaredArray = [];
    squaredArray = inputArray.map(number => {
        if (typeof(number) === 'number') {
            return number ** 2
        } else {
            throw 'not all members of this array are numbers';
        }
    });

    return (squaredArray);
}

console.log(squareOfArray2([2, 4, 10]));

//2b
const filterOddArray2 = (inputArray) => {
    let filteredArray;
    filteredArray = inputArray.filter(number => {

        return (typeof(number) === 'number' && number % 2 === 0);
       
    });

    return (filteredArray);
}

console.log(filterOddArray2([2, 5, 7, 9, 11, 12, 14, 13, 20]));

//2c
const sumOfArray2 = (inputArray) => {
    
    return inputArray.reduce((number, arg) => {
        if(typeof(number) === 'number'){
            return number + arg
        } else {
            throw 'not all members of this array are numbers';
        }
    }, 0);
  
}

console.log(sumOfArray2([2, 4, 9, 18]));

//map, filter and reduce are a lot easier to use


//Question 3
//function to sort an array in ascending order

const ascendingOrder = (inputArray) => {
    let sortedArray = inputArray.sort((a, b) => (a - b));
    return (sortedArray);
};

console.log(ascendingOrder([2, 4, 9, 35, 65, 43, 22, 34, 18]));