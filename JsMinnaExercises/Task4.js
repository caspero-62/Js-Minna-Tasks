//function to filter off non-numeric characters in a string
const filterNonNumChar = (item) => {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numeric = [];
    
    [...item].forEach(char => {
        if(numbers.includes(Number(char))) {
            numeric.push(char)
        } else {
            null
        }
    });

    
    return numeric.length === 0 ? null : Number(numeric.join(''));
}

//function compute mode of the array
const computeMode = (filteredArray) => {

    if (filteredArray.length === 0) {
        throw 'filtered array is empty';
    }

    let highestOccurence = 1;
    let highestOccurNum = filteredArray[0];
    let currentNumStreak = 1;
    let currentNum = filteredArray[0];

    filteredArray.map((number, idx) => {

        if (idx !== 0) {
            if (number !== filteredArray[idx-1]) {
                if (currentNumStreak > highestOccurence) {
                    highestOccurence = currentNumStreak;
                    highestOccurNum = currentNum;
                }
    
                currentNumStreak = 0;
                currentNum = number;
            }
    
            currentNumStreak++;
        } else {
            null;
        }
    });

    return currentNumStreak > highestOccurence ? currentNum : highestOccurNum;
}

//function compute median of the array
const computeMedian = (filteredArray) => {

    if (filteredArray.length === 0) {
        throw 'filtered array is empty';
    }

    let lengthOfArray = filteredArray.length;
    let midIndex = Math.floor(lengthOfArray/2);

    //find median based on the condition of array length being even or odd
    let median =  lengthOfArray % 2 === 0 ? 
                (filteredArray[midIndex - 1] + filteredArray[midIndex])/2 : 
                filteredArray[midIndex]; 

    return median;

}


//function to compute mean of the array
const computeMean = (filteredArray) => {

    if (filteredArray.length === 0) {
        throw 'filtered array is empty';
    }

    let sumOfArray, lengthOfArray, mean;
    lengthOfArray = filteredArray.length;

    sumOfArray = filteredArray.reduce((num, arg) => {
        return num + arg;
    }, 0);

    //mean is the sum of all numbers in array divided by its length
    mean = sumOfArray/lengthOfArray;

    return mean;
}

//Main function compute to filter off non numeric items in an array, sort array of numbers, and get the mean, median and mode of the array
const compute = (mixedArray) => {
    let filteredArray = [];

    //convert all alphanumeric items to numbers
    mixedArray.map(item => {
        if (typeof(item) === 'number') {
            filteredArray.push(item);
        } else {
            item = filterNonNumChar(item);
            filteredArray.push(item);
        }
    });

    //sort array in descending order
    filteredArray = filteredArray.sort((a, b) => b - a);

    //compute mean, median and mode
    const mean = computeMean(filteredArray);
    const median = computeMedian(filteredArray);
    const mode = computeMode(filteredArray);

    return {
        filteredArray,
        mean,
        median,
        mode
    }
}

console.log(compute([1, '3ab', 2, 'ef4', 'g3h', 5]));



